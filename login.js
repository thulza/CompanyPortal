document.addEventListener('DOMContentLoaded', function() {
    // Toggle form visibility when clicking the login buttons
    document.querySelectorAll('.toggle-form').forEach(button => {
        button.addEventListener('click', function() {
            const formId = this.getAttribute('data-form');
            const form = document.getElementById(formId);
            const card = this.closest('.choice-card');
            
            // Hide all forms first
            document.querySelectorAll('.login-form').forEach(f => f.style.display = 'none');
            document.querySelectorAll('.toggle-form').forEach(b => b.style.display = 'block');
            
            // Show the selected form and hide its button
            form.style.display = 'block';
            this.style.display = 'none';
        });
    });

    // Handle client login
    const clientLoginForm = document.getElementById('clientLoginForm');
    if (clientLoginForm) {
        clientLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('clientEmail').value;
            const password = document.getElementById('clientPassword').value;
            
            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('company_portal_users') || '[]');
            
            // Find client user with matching credentials
            const user = users.find(u => 
                u.type === 'client' && 
                u.email === email && 
                u.password === password
            );
            
            if (user) {
                localStorage.setItem('company_portal_current_user', JSON.stringify(user));
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid email or password!');
            }
        });
    }

    // Handle business owner login
    const businessLoginForm = document.getElementById('businessLoginForm');
    if (businessLoginForm) {
        businessLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('businessEmail').value;
            const password = document.getElementById('businessPassword').value;
            const registrationNumber = document.getElementById('businessRegistrationNumber').value;
            
            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('company_portal_users') || '[]');
            
            // Find business user with matching credentials
            const user = users.find(u => 
                u.type === 'business' && 
                u.businessEmail === email && 
                u.password === password &&
                u.registrationNumber === registrationNumber
            );
            
            if (user) {
                localStorage.setItem('company_portal_current_user', JSON.stringify(user));
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials! Please check your email, password, and registration number.');
            }
        });
    }

    // Add hover effect to choice cards
    document.querySelectorAll('.choice-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.querySelector('.login-form').style.display || 
                this.querySelector('.login-form').style.display === 'none') {
                this.querySelector('.toggle-form').classList.add('btn-hover');
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.toggle-form').classList.remove('btn-hover');
        });
    });
});
