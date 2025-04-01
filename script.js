// Local Storage Keys
const STORAGE_KEYS = {
    USERS: 'company_portal_users',
    COMPANIES: 'company_portal_companies',
    CURRENT_USER: 'company_portal_current_user'
};

// Sample company data with full details
const sampleCompanies = [
    // Technology Companies
    {
        id: 1,
        name: 'Tech Innovators',
        category: 'technology',
        description: 'Leading technology solutions provider specializing in AI and machine learning.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        rating: 4.5,
        reviews: [],
        businessEmail: 'pharezsigasa@gmail.com',
        businessPhone: '+27 60 642 9587',
        website: 'https://techinnovators.com',
        address: {
            street: '6866 Ext 7 Sakhile',
            city: 'Standerton',
            postalCode: '2431',
            country: 'South Africa'
        },
        businessHours: {
            weekday: '9:00 AM - 6:00 PM',
            saturday: '10:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    },
    {
        id: 2,
        name: 'Digital Solutions Pro',
        category: 'technology',
        description: 'Cloud computing and digital transformation specialists with focus on enterprise solutions.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
        rating: 4.2,
        reviews: [],
        businessEmail: 'pharezsigasa@gmail.com',
        businessPhone: '+27 60 642 9587',
        website: 'https://digitalsolutionspro.com',
        address: {
            street: '6866 Ext 7 Sakhile',
            city: 'Standerton',
            postalCode: '2431',
            country: 'South Africa'
        },
        businessHours: {
            weekday: '9:00 AM - 5:00 PM',
            saturday: '10:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    },
    {
        id: 3,
        name: 'CyberTech Systems',
        category: 'technology',
        description: 'Cybersecurity and network infrastructure solutions for modern businesses.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
        rating: 4.7,
        reviews: [],
        businessEmail: 'contact@cybertechsystems.com',
        businessPhone: '+1 (555) 789-0123',
        website: 'https://cybertechsystems.com',
        address: {
            street: '789 CyberTech Way',
            city: 'San Francisco',
            postalCode: '94105',
            country: 'United States'
        },
        businessHours: {
            weekday: '9:00 AM - 6:00 PM',
            saturday: '10:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    },
    // Finance Companies
    {
        id: 4,
        name: 'Global Finance',
        category: 'finance',
        description: 'International financial services and consulting firm.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        rating: 4.0,
        reviews: [],
        businessEmail: 'info@globalfinance.com',
        businessPhone: '+1 (555) 111-2222',
        website: 'https://globalfinance.com',
        address: {
            street: '123 Financial Street',
            city: 'London',
            postalCode: 'EC2V 7EA',
            country: 'United Kingdom'
        },
        businessHours: {
            weekday: '9:00 AM - 5:00 PM',
            saturday: '10:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    },
    {
        id: 5,
        name: 'Investment Masters',
        category: 'finance',
        description: 'Expert investment management and wealth advisory services.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        rating: 4.4,
        reviews: [],
        businessEmail: 'contact@investmentmasters.com',
        businessPhone: '+1 (555) 333-4444',
        website: 'https://investmentmasters.com',
        address: {
            street: '456 Investment Drive',
            city: 'New York City',
            postalCode: '10001',
            country: 'United States'
        },
        businessHours: {
            weekday: '9:00 AM - 5:00 PM',
            saturday: '10:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    },
    {
        id: 6,
        name: 'Secure Banking Corp',
        category: 'finance',
        description: 'Modern banking solutions with focus on security and customer satisfaction.',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800',
        rating: 4.6,
        reviews: [],
        businessEmail: 'info@securebankingcorp.com',
        businessPhone: '+1 (555) 555-6666',
        website: 'https://securebankingcorp.com',
        address: {
            street: '789 Banking Way',
            city: 'Chicago',
            postalCode: '60606',
            country: 'United States'
        },
        businessHours: {
            weekday: '9:00 AM - 5:00 PM',
            saturday: '10:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    },
    // Healthcare Companies
    {
        id: 7,
        name: 'HealthCare Plus',
        category: 'healthcare',
        description: 'Comprehensive healthcare services with state-of-the-art facilities.',
        image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800',
        rating: 4.3,
        reviews: [],
        businessEmail: 'contact@healthcareplus.com',
        businessPhone: '+1 (555) 777-8888',
        website: 'https://healthcareplus.com',
        address: {
            street: '123 Healthcare Drive',
            city: 'Los Angeles',
            postalCode: '90001',
            country: 'United States'
        },
        businessHours: {
            weekday: '9:00 AM - 5:00 PM',
            saturday: '10:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    },
    {
        id: 8,
        name: 'MediTech Solutions',
        category: 'healthcare',
        description: 'Innovative medical technology and patient care services.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
        rating: 4.5,
        reviews: [],
        businessEmail: 'info@meditechsolutions.com',
        businessPhone: '+1 (555) 999-0000',
        website: 'https://meditechsolutions.com',
        address: {
            street: '456 MediTech Way',
            city: 'Boston',
            postalCode: '02101',
            country: 'United States'
        },
        businessHours: {
            weekday: '9:00 AM - 5:00 PM',
            saturday: '10:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    },
    // Retail Companies
    {
        id: 9,
        name: 'Retail Express',
        category: 'retail',
        description: 'Modern retail solutions with omnichannel presence.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
        rating: 4.1,
        reviews: [],
        businessEmail: 'contact@retailexpress.com',
        businessPhone: '+1 (555) 111-1111',
        website: 'https://retailexpress.com',
        address: {
            street: '123 Retail Drive',
            city: 'Miami',
            postalCode: '33101',
            country: 'United States'
        },
        businessHours: {
            weekday: '9:00 AM - 5:00 PM',
            saturday: '10:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    },
    {
        id: 10,
        name: 'Shop Smart',
        category: 'retail',
        description: 'Smart retail technology and customer experience solutions.',
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800',
        rating: 4.2,
        reviews: [],
        businessEmail: 'info@shopsmart.com',
        businessPhone: '+1 (555) 222-3333',
        website: 'https://shopsmart.com',
        address: {
            street: '456 ShopSmart Way',
            city: 'Dallas',
            postalCode: '75201',
            country: 'United States'
        },
        businessHours: {
            weekday: '9:00 AM - 5:00 PM',
            saturday: '10:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    }
];

// Initialize data
function initializeData() {
    // Always reset companies data
    localStorage.setItem(STORAGE_KEYS.COMPANIES, JSON.stringify(sampleCompanies));
    
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify([]));
    }
}

// Display companies in the grid
function displayCompanies(companies = null) {
    const companyGrid = document.getElementById('companyGrid');
    if (!companyGrid) {
        console.error('Company grid not found');
        return;
    }

    // If no companies provided, get from localStorage
    if (!companies) {
        companies = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPANIES)) || [];
    }

    if (companies.length === 0) {
        console.log('No companies found, reinitializing data');
        initializeData();
        companies = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPANIES)) || [];
    }

    companyGrid.innerHTML = companies.map(company => `
        <div class="company-card" data-id="${company.id}">
            <div class="company-image">
                <img src="${company.image}" alt="${company.name}">
            </div>
            <div class="company-info">
                <h3>${company.name}</h3>
                <p class="category">${company.category}</p>
                <p class="description">${company.description}</p>
                <div class="rating">
                    <span class="stars">${'★'.repeat(Math.round(company.rating))}</span>
                    <span class="rating-value">${company.rating}</span>
                </div>
                <div class="quick-actions">
                    <button class="quick-action-btn" onclick="window.location.href='tel:${company.businessPhone}'">
                        <i class="fas fa-phone"></i>
                    </button>
                    <button class="quick-action-btn" onclick="window.location.href='mailto:${company.businessEmail}'">
                        <i class="fas fa-envelope"></i>
                    </button>
                    <button class="quick-action-btn" onclick="window.location.href='https://maps.google.com/?q=${encodeURIComponent(
                        `${company.address.street}, ${company.address.city}, ${company.address.postalCode}, ${company.address.country}`
                    )}'">
                        <i class="fas fa-map-marker-alt"></i>
                    </button>
                    <button class="quick-action-btn" onclick="window.location.href='${company.website}'">
                        <i class="fas fa-globe"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add click event listeners to company cards
    document.querySelectorAll('.company-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't show preview if clicking on quick action buttons
            if (!e.target.closest('.quick-actions')) {
                showCompanyPreview(card.dataset.id);
            }
        });
    });
}

// Search companies
function searchCompanies() {
    const searchTerm = document.querySelector('.search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value.toLowerCase();
    
    const companies = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPANIES)) || [];
    
    const filteredCompanies = companies.filter(company => {
        const matchesSearch = company.name.toLowerCase().includes(searchTerm) ||
                            company.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || company.category.toLowerCase() === categoryFilter;
        
        return matchesSearch && matchesCategory;
    });
    
    displayCompanies(filteredCompanies);
}

// Show company preview when clicking on card
function showCompanyPreview(companyId) {
    const companies = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPANIES)) || [];
    const company = companies.find(c => c.id === parseInt(companyId));
    
    if (!company) return;

    const modal = document.getElementById('companyModal');
    const detailsDiv = document.getElementById('companyDetails');
    
    detailsDiv.innerHTML = `
        <div class="company-preview">
            <img src="${company.image}" alt="${company.name}" class="preview-image">
            <div class="preview-content">
                <h2>${company.name}</h2>
                <p class="category">${company.category}</p>
                <p class="description">${company.description}</p>
                <div class="rating">
                    <span class="stars">${'★'.repeat(Math.round(company.rating))}</span>
                    <span class="rating-value">${company.rating}</span>
                </div>
                <button class="btn btn-primary view-full-details" onclick="showCompanyFullDetails(${company.id})">
                    View Full Details
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';

    // Add event listener for the View Full Details button
    const viewDetailsBtn = detailsDiv.querySelector('.view-full-details');
    if (viewDetailsBtn) {
        viewDetailsBtn.addEventListener('click', () => showCompanyFullDetails(company.id));
    }
}

// Show full company details
function showCompanyFullDetails(companyId) {
    const companies = JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPANIES)) || [];
    const company = companies.find(c => c.id === parseInt(companyId));
    
    if (!company) return;

    const modal = document.getElementById('companyModal');
    const detailsDiv = document.getElementById('companyDetails');
    
    detailsDiv.innerHTML = `
        <div class="company-full-details">
            <div class="details-header">
                <img src="${company.image}" alt="${company.name}" class="detail-image">
                <div class="header-content">
                    <h2>${company.name}</h2>
                    <p class="category">${company.category}</p>
                    <div class="rating">
                        <span class="stars">${'★'.repeat(Math.round(company.rating))}</span>
                        <span class="rating-value">${company.rating} / 5</span>
                    </div>
                </div>
            </div>

            <div class="details-section">
                <h3>About Us</h3>
                <p class="description">${company.description}</p>
            </div>

            <div class="details-section">
                <h3>Contact Information</h3>
                <div class="contact-info">
                    <p><i class="fas fa-envelope"></i> Email: ${company.businessEmail || 'Not available'}</p>
                    <p><i class="fas fa-phone"></i> Phone: ${company.businessPhone || 'Not available'}</p>
                    ${company.website ? `
                        <p><i class="fas fa-globe"></i> Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
                    ` : ''}
                </div>
            </div>

            <div class="details-section">
                <h3>Business Address</h3>
                <div class="address-info">
                    ${company.address ? `
                        <p><i class="fas fa-map-marker-alt"></i> ${company.address.street}</p>
                        <p>${company.address.city}, ${company.address.postalCode}</p>
                        <p>${company.address.country}</p>
                    ` : '<p>Address not available</p>'}
                </div>
            </div>

            <div class="details-section">
                <h3>Business Hours</h3>
                <div class="business-hours">
                    ${company.businessHours ? `
                        <p>Monday - Friday: ${company.businessHours.weekday}</p>
                        <p>Saturday: ${company.businessHours.saturday}</p>
                        <p>Sunday: ${company.businessHours.sunday}</p>
                    ` : `
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                    `}
                </div>
            </div>

            <div class="details-section">
                <h3>Reviews</h3>
                <div class="reviews">
                    ${company.reviews && company.reviews.length ? 
                        company.reviews.map(review => `
                            <div class="review">
                                <div class="rating">
                                    <span class="stars">${'★'.repeat(review.rating)}</span>
                                    <span class="rating-value">${review.rating} / 5</span>
                                </div>
                                <p class="review-text">${review.comment || ''}</p>
                                <p class="review-author">- ${review.user || 'Anonymous'}</p>
                            </div>
                        `).join('') : 
                        '<p>No reviews yet</p>'
                    }
                </div>
            </div>

            <div class="details-section">
                <h3>Quick Actions</h3>
                <div class="quick-actions">
                    ${company.businessEmail ? `
                        <button class="btn btn-primary" onclick="window.location.href='mailto:${company.businessEmail}'">
                            <i class="fas fa-envelope"></i> Send Email
                        </button>
                    ` : ''}
                    ${company.businessPhone ? `
                        <button class="btn btn-primary" onclick="window.location.href='tel:${company.businessPhone}'">
                            <i class="fas fa-phone"></i> Call Now
                        </button>
                    ` : ''}
                    ${company.website ? `
                        <button class="btn btn-primary" onclick="window.open('${company.website}', '_blank')">
                            <i class="fas fa-globe"></i> Visit Website
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Handle stamp visibility on scroll
function handleStampVisibility() {
    const stamp = document.querySelector('.stamp-watermark');
    if (!stamp) return;

    const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
    
    if (isAtBottom) {
        stamp.classList.add('visible');
    } else {
        stamp.classList.remove('visible');
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize data
    initializeData();
    
    // Display companies
    displayCompanies();
    
    // Search functionality
    document.querySelector('.search-input').addEventListener('input', searchCompanies);
    document.getElementById('categoryFilter').addEventListener('change', searchCompanies);
    document.getElementById('searchBtn').addEventListener('click', searchCompanies);
    
    // Close modals when clicking on X or outside
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Add scroll event listener for stamp visibility
    window.addEventListener('scroll', handleStampVisibility);
    // Initial check for stamp visibility
    handleStampVisibility();
});