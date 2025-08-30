// Notice Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Trigger AOS refresh for new content
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    });

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggle = item.querySelector('.faq-toggle');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                faqItem.querySelector('.faq-toggle').textContent = '+';
                faqItem.querySelector('.faq-answer').style.maxHeight = '0';
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                toggle.textContent = '−';
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // Notice item click handlers
    const noticeItems = document.querySelectorAll('.notice-item');
    noticeItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link
            if (e.target.tagName === 'A') return;
            
            const link = this.querySelector('.notice-title a');
            if (link) {
                // Simulate click on notice detail (would normally navigate to detail page)
                console.log('Opening notice:', link.textContent);
                // In a real application, this would navigate to the notice detail page
            }
        });
    });

    // Event item interactions
    const eventItems = document.querySelectorAll('.event-item');
    eventItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Job item interactions
    const jobItems = document.querySelectorAll('.job-item');
    jobItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Handle URL hash for direct tab access
    function handleHashTab() {
        const hash = window.location.hash.substring(1);
        if (hash && ['notices', 'events', 'recruitment'].includes(hash)) {
            const targetButton = document.querySelector(`[data-tab="${hash}"]`);
            if (targetButton) {
                targetButton.click();
            }
        }
    }
    
    // Check for hash on page load
    handleHashTab();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashTab);
});

// Add notice page specific styles
const style = document.createElement('style');
style.textContent = `
    .notice-tabs {
        padding: 40px 0 80px;
    }
    
    .notice-list {
        max-width: 800px;
        margin: 0 auto;
    }
    
    .notice-item {
        background-color: var(--pure-white);
        border-radius: 8px;
        box-shadow: var(--shadow-light);
        margin-bottom: 1rem;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .notice-item:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-medium);
    }
    
    .notice-item.important {
        border-left: 4px solid var(--sky-blue);
    }
    
    .notice-content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .notice-badge {
        display: inline-block;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        width: fit-content;
    }
    
    .notice-item .notice-badge {
        background-color: var(--bg-section);
        color: var(--text-primary);
    }
    
    .notice-item.important .notice-badge {
        background-color: var(--sky-blue);
        color: var(--pure-white);
    }
    
    .notice-title {
        margin-bottom: 0.5rem;
    }
    
    .notice-title a {
        color: var(--text-primary);
        font-weight: 500;
        transition: color 0.3s ease;
    }
    
    .notice-title a:hover {
        color: var(--sky-blue);
    }
    
    .notice-summary {
        color: var(--text-secondary);
        line-height: 1.5;
        margin-bottom: 1rem;
    }
    
    .notice-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;
        color: var(--text-secondary);
    }
    
    .event-list {
        max-width: 900px;
        margin: 0 auto;
    }
    
    .event-item {
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 1.5rem;
        background-color: var(--pure-white);
        border-radius: 12px;
        box-shadow: var(--shadow-light);
        margin-bottom: 2rem;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .event-image {
        position: relative;
        height: 200px;
        overflow: hidden;
    }
    
    .event-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .event-status {
        position: absolute;
        top: 1rem;
        right: 1rem;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--pure-white);
    }
    
    .event-item.active .event-status {
        background-color: #10B981;
    }
    
    .event-item.upcoming .event-status {
        background-color: var(--sky-blue);
    }
    
    .event-item.ended .event-status {
        background-color: #6B7280;
    }
    
    .event-content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .event-title {
        color: var(--deep-blue);
        margin-bottom: 1rem;
        font-size: 1.3rem;
    }
    
    .event-description {
        line-height: 1.6;
        margin-bottom: 1.5rem;
        flex-grow: 1;
    }
    
    .event-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        border-top: 1px solid var(--border-color);
    }
    
    .event-period {
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    .event-result {
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    .recruitment-list {
        max-width: 800px;
        margin: 0 auto;
    }
    
    .recruitment-header {
        text-align: center;
        margin-bottom: 3rem;
    }
    
    .recruitment-header h3 {
        color: var(--deep-blue);
        margin-bottom: 0.5rem;
    }
    
    .job-item {
        background-color: var(--pure-white);
        border-radius: 8px;
        box-shadow: var(--shadow-light);
        margin-bottom: 1.5rem;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    
    .job-item.urgent {
        border-left: 4px solid #EF4444;
    }
    
    .job-content {
        padding: 1.5rem;
    }
    
    .job-badge {
        display: inline-block;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    .job-item .job-badge {
        background-color: var(--bg-section);
        color: var(--text-primary);
    }
    
    .job-item.urgent .job-badge {
        background-color: #EF4444;
        color: var(--pure-white);
    }
    
    .job-title {
        color: var(--deep-blue);
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }
    
    .job-summary {
        color: var(--text-secondary);
        margin-bottom: 1rem;
        line-height: 1.5;
    }
    
    .job-conditions {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
    }
    
    .condition-item {
        background-color: var(--bg-section);
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.9rem;
    }
    
    .job-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        border-top: 1px solid var(--border-color);
    }
    
    .job-deadline {
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    
    .btn-small {
        padding: 8px 16px;
        font-size: 0.9rem;
    }
    
    .faq-section {
        background-color: var(--bg-section);
        padding: 80px 0;
    }
    
    .faq-list {
        max-width: 800px;
        margin: 0 auto;
    }
    
    .faq-item {
        background-color: var(--pure-white);
        border-radius: 8px;
        box-shadow: var(--shadow-light);
        margin-bottom: 1rem;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .faq-question {
        padding: 1.5rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease;
    }
    
    .faq-question:hover {
        background-color: var(--bg-section);
    }
    
    .faq-question h4 {
        margin: 0;
        color: var(--text-primary);
    }
    
    .faq-toggle {
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--sky-blue);
        transition: transform 0.3s ease;
    }
    
    .faq-item.active .faq-toggle {
        transform: rotate(45deg);
    }
    
    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
    
    .faq-answer p {
        padding: 0 1.5rem 1.5rem;
        margin: 0;
        line-height: 1.6;
        color: var(--text-secondary);
    }
    
    .contact-cta {
        background-color: var(--bg-section);
        padding: 60px 0;
        text-align: center;
    }
    
    .contact-cta h2 {
        color: var(--deep-blue);
        margin-bottom: 1rem;
    }
    
    .contact-cta p {
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }
    
    .contact-buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    @media (max-width: 768px) {
        .event-item {
            grid-template-columns: 1fr;
        }
        
        .event-image {
            height: 150px;
        }
        
        .job-conditions {
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .contact-buttons {
            flex-direction: column;
            align-items: center;
        }
        
        .faq-question {
            padding: 1rem;
        }
        
        .faq-question h4 {
            font-size: 1rem;
        }
        
        .notice-content {
            padding: 1rem;
        }
        
        .event-content {
            padding: 1rem;
        }
    }
`;
document.head.appendChild(style);