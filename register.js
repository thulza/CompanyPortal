// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const clientForm = document.getElementById('clientRegistrationForm');
    const businessForm = document.getElementById('businessRegistrationForm');

    if (clientForm) {
        clientForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateClientForm()) {
                const formData = new FormData(clientForm);
                const userData = {
                    type: 'client',
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    password: formData.get('password'),
                    interests: formData.getAll('interests'),
                    newsletter: formData.get('newsletter') === 'on'
                };

                // Store in localStorage
                const users = JSON.parse(localStorage.getItem('company_portal_users') || '[]');
                users.push(userData);
                localStorage.setItem('company_portal_users', JSON.stringify(users));
                
                // Set current user
                localStorage.setItem('company_portal_current_user', JSON.stringify(userData));
                
                alert('Registration successful!');
                window.location.href = 'index.html';
            }
        });
    }

    if (businessForm) {
        businessForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateBusinessForm()) {
                const formData = new FormData(businessForm);
                const userData = {
                    type: 'business',
                    companyName: formData.get('companyName'),
                    businessType: formData.get('businessType'),
                    registrationNumber: formData.get('registrationNumber'),
                    vatNumber: formData.get('vatNumber'),
                    businessEmail: formData.get('businessEmail'),
                    businessPhone: formData.get('businessPhone'),
                    website: formData.get('website'),
                    address: {
                        street: formData.get('streetAddress'),
                        city: formData.get('city'),
                        postalCode: formData.get('postalCode'),
                        country: formData.get('country')
                    },
                    password: formData.get('password')
                };

                // Store in localStorage
                const users = JSON.parse(localStorage.getItem('company_portal_users') || '[]');
                users.push(userData);
                localStorage.setItem('company_portal_users', JSON.stringify(users));
                
                // Set current user
                localStorage.setItem('company_portal_current_user', JSON.stringify(userData));
                
                alert('Registration successful!');
                window.location.href = 'index.html';
            }
        });
    }
});

function validateClientForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        return false;
    }
    
    return true;
}

function validateBusinessForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        return false;
    }
    
    // Validate file uploads
    const businessLicense = document.getElementById('businessLicense').files[0];
    if (!businessLicense) {
        alert('Please upload your business license!');
        return false;
    }
    
    return true;
}
