// Logo - Simple version (Watup API doesn't exist)
function initLogo() {
    const brand = document.querySelector('.navbar-brand');
    if (brand && brand.textContent === 'Skyline') {
        brand.style.color = '#d4af37';
        brand.style.fontWeight = '700';
    }
}

// Smooth scroll links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        if (link.getAttribute('href').length > 1) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initLogo);
