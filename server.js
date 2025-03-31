const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const bcrypt = require('bcryptjs');
const multer = require('multer');
require('dotenv').config();

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET || 'dev-secret',
    resave: false,
    saveUninitialized: false
}));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/company-portal', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Models
const User = mongoose.model('User', {
    email: String,
    password: String,
    isCompanyOwner: Boolean
});

const Company = mongoose.model('Company', {
    name: String,
    description: String,
    category: String,
    image: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, default: 0 },
    reviews: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        rating: Number,
        comment: String,
        date: { type: Date, default: Date.now }
    }]
});

// File upload configuration
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// Routes
app.get('/', async (req, res) => {
    const companies = await Company.find().limit(12);
    res.render('index', { 
        companies,
        user: req.session.user 
    });
});

app.get('/companies', async (req, res) => {
    const { search, category } = req.query;
    let query = {};
    
    if (search) {
        query.name = { $regex: search, $options: 'i' };
    }
    if (category) {
        query.category = category;
    }
    
    const companies = await Company.find(query);
    res.render('companies', { companies, user: req.session.user });
});

app.get('/companies/:id', async (req, res) => {
    const company = await Company.findById(req.params.id).populate('owner');
    if (!company) {
        return res.status(404).render('error', { message: 'Company not found' });
    }
    res.render('company-details', { company, user: req.session.user });
});

// API Routes
app.post('/api/companies/rate', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ error: 'Must be logged in to rate' });
    }

    const { companyId, rating } = req.body;
    const company = await Company.findById(companyId);
    
    if (!company) {
        return res.status(404).json({ error: 'Company not found' });
    }

    const existingReview = company.reviews.find(
        review => review.user.toString() === req.session.user._id
    );

    if (existingReview) {
        existingReview.rating = rating;
    } else {
        company.reviews.push({
            user: req.session.user._id,
            rating
        });
    }

    // Update average rating
    const avgRating = company.reviews.reduce((sum, review) => sum + review.rating, 0) / company.reviews.length;
    company.rating = Math.round(avgRating * 2) / 2; // Round to nearest 0.5

    await company.save();
    res.json({ newRating: company.rating });
});

// Auth routes
app.post('/register', async (req, res) => {
    const { email, password, isCompanyOwner } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
        email,
        password: hashedPassword,
        isCompanyOwner: !!isCompanyOwner
    });
    
    await user.save();
    req.session.user = user;
    res.redirect('/');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (user && await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.redirect('/');
    } else {
        res.render('login', { error: 'Invalid credentials' });
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// Company management routes
app.post('/companies', upload.single('image'), async (req, res) => {
    if (!req.session.user?.isCompanyOwner) {
        return res.status(403).send('Only company owners can create listings');
    }

    const company = new Company({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        image: req.file ? `/uploads/${req.file.filename}` : '/images/default-company.jpg',
        owner: req.session.user._id
    });

    await company.save();
    res.redirect(`/companies/${company._id}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
