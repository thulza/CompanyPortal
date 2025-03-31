document.addEventListener('DOMContentLoaded', () => {
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const categorySelect = document.querySelector('select');
    const searchButton = document.querySelector('.btn-primary');

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value;
            const category = categorySelect.value;
            
            // Make API call to search companies
            fetch(`/api/companies/search?term=${searchTerm}&category=${category}`)
                .then(response => response.json())
                .then(data => {
                    updateCompanyGrid(data);
                })
                .catch(error => console.error('Error:', error));
        });
    }

    // Dynamic rating system
    const ratingContainers = document.querySelectorAll('.rating-input');
    ratingContainers.forEach(container => {
        const stars = container.querySelectorAll('.fa-star');
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                const rating = index + 1;
                const companyId = container.dataset.companyId;
                
                // Submit rating to server
                fetch('/api/companies/rate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ companyId, rating })
                })
                .then(response => response.json())
                .then(data => {
                    updateRatingDisplay(container, data.newRating);
                })
                .catch(error => console.error('Error:', error));
            });
        });
    });
});

function updateCompanyGrid(companies) {
    const grid = document.querySelector('.company-grid');
    grid.innerHTML = '';

    companies.forEach(company => {
        const card = createCompanyCard(company);
        grid.appendChild(card);
    });
}

function createCompanyCard(company) {
    const card = document.createElement('div');
    card.className = 'company-card';
    
    card.innerHTML = `
        <img src="${company.image}" alt="${company.name}" class="company-image">
        <div class="company-info">
            <h3 class="company-name">${company.name}</h3>
            <div class="rating">
                ${generateStarRating(company.rating)}
            </div>
            <p class="company-description">${company.description}</p>
            <a href="/companies/${company._id}" class="btn btn-primary">View Details</a>
        </div>
    `;
    
    return card;
}

function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }

    return stars;
}

function updateRatingDisplay(container, newRating) {
    const stars = container.querySelectorAll('.fa-star');
    stars.forEach((star, index) => {
        if (index < Math.floor(newRating)) {
            star.className = 'fas fa-star';
        } else if (index === Math.floor(newRating) && newRating % 1 !== 0) {
            star.className = 'fas fa-star-half-alt';
        } else {
            star.className = 'far fa-star';
        }
    });
}
