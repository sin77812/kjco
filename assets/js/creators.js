// Creators Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const creatorCards = document.querySelectorAll('.creator-card-large');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    let currentFilter = 'all';
    let visibleCards = 6; // Initially show 6 cards

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            filterCreators(filter);
            
            // Reset visible cards count
            visibleCards = 6;
            updateLoadMoreButton();
        });
    });

    function filterCreators(filter) {
        creatorCards.forEach((card, index) => {
            const category = card.getAttribute('data-category');
            const shouldShow = filter === 'all' || category === filter;
            
            if (shouldShow && index < visibleCards) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            } else if (shouldShow) {
                card.style.display = 'none'; // Hidden but can be shown with "Load More"
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const hiddenCards = Array.from(creatorCards).filter(card => {
                const category = card.getAttribute('data-category');
                const shouldShow = currentFilter === 'all' || category === currentFilter;
                return shouldShow && card.style.display === 'none';
            });

            // Show next 3 cards
            hiddenCards.slice(0, 3).forEach(card => {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease forwards';
            });

            visibleCards += 3;
            updateLoadMoreButton();
        });
    }

    function updateLoadMoreButton() {
        if (!loadMoreBtn) return;
        
        const hiddenCards = Array.from(creatorCards).filter(card => {
            const category = card.getAttribute('data-category');
            const shouldShow = currentFilter === 'all' || category === currentFilter;
            return shouldShow && card.style.display === 'none';
        });

        if (hiddenCards.length === 0) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }

    // Initialize page
    filterCreators('all');
    updateLoadMoreButton();

    // Enhanced hover effects for creator cards
    creatorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth scroll to creators section when coming from home page
    if (window.location.hash === '#creators') {
        setTimeout(() => {
            document.querySelector('.creators-main-gallery').scrollIntoView({
                behavior: 'smooth'
            });
        }, 500);
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .creator-filters {
        padding: 40px 0;
        background-color: var(--bg-section);
    }
    
    .filter-tabs {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    .filter-btn {
        padding: 12px 24px;
        border: 2px solid var(--border-color);
        background-color: var(--pure-white);
        color: var(--text-primary);
        border-radius: 25px;
        font-weight: 500;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .filter-btn:hover,
    .filter-btn.active {
        background-color: var(--sky-blue);
        color: var(--pure-white);
        border-color: var(--sky-blue);
    }
    
    .creators-main-gallery {
        padding: 80px 0;
    }
    
    .creators-grid-large {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .creator-card-large {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: var(--shadow-light);
        transition: all 0.3s ease;
        background-color: var(--pure-white);
    }
    
    .creator-image-large {
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;
    }
    
    .creator-image-large img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;
    }
    
    .creator-overlay-large {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.9) 60%);
        display: flex;
        align-items: flex-end;
        padding: 2rem;
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .creator-card-large:hover .creator-overlay-large {
        opacity: 1;
    }
    
    .creator-card-large:hover .creator-image-large img {
        transform: scale(1.05);
    }
    
    .creator-info-large {
        color: var(--pure-white);
        width: 100%;
    }
    
    .creator-name-large {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    
    .creator-category {
        font-size: 0.9rem;
        opacity: 0.8;
        margin-bottom: 0.3rem;
    }
    
    .creator-instagram {
        font-size: 0.9rem;
        opacity: 0.7;
        margin-bottom: 1rem;
    }
    
    .creator-stats {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
    }
    
    .stat-item {
        background-color: rgba(255,255,255,0.2);
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        backdrop-filter: blur(10px);
    }
    
    .platform-links {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .platform-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: rgba(255,255,255,0.2);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }
    
    .platform-link:hover {
        background-color: var(--sky-blue);
        transform: translateY(-2px);
    }
    
    .platform-link img {
        width: 16px;
        height: 16px;
    }
    
    .social-link {
        width: 40px;
        height: 40px;
        background-color: rgba(255,255,255,0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }
    
    .social-link:hover {
        background-color: var(--sky-blue);
        transform: translateY(-2px);
    }
    
    .social-link img {
        width: 20px;
        height: 20px;
    }
    
    .load-more-section {
        text-align: center;
        margin-top: 2rem;
    }
    
    .creators-stats {
        background-color: var(--bg-section);
        padding: 80px 0;
    }
    
    .success-stories {
        padding: 80px 0;
    }
    
    .stories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }
    
    .story-card {
        background-color: var(--pure-white);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: var(--shadow-light);
        transition: all 0.3s ease;
    }
    
    .story-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-medium);
    }
    
    .story-image {
        height: 200px;
        overflow: hidden;
    }
    
    .story-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .story-content {
        padding: 1.5rem;
    }
    
    .story-content h3 {
        color: var(--deep-blue);
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    
    .story-content p {
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }
    
    .story-author {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        border-top: 1px solid var(--border-color);
    }
    
    .author-name {
        font-weight: 600;
        color: var(--text-primary);
    }
    
    .author-platform {
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
        .creators-grid-large {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .creator-image-large {
            height: 300px;
        }
        
        .creator-overlay-large {
            padding: 1.5rem;
        }
        
        .creator-stats {
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .platform-links {
            flex-direction: column;
            gap: 0.8rem;
        }
        
        .filter-tabs {
            gap: 0.5rem;
        }
        
        .filter-btn {
            padding: 10px 16px;
            font-size: 0.9rem;
        }
    }
`;
document.head.appendChild(style);