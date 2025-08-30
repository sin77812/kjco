// Service Page Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Tab switching functionality
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
    
    // Handle URL hash for direct tab access
    function handleHashTab() {
        const hash = window.location.hash.substring(1);
        if (hash) {
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
    
    // Add smooth transitions to tab contents
    tabContents.forEach(content => {
        content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});