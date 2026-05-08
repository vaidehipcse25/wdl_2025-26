// Fetch Watup API logo
async function loadLogo() {
    try {
        const response = await fetch('https://api.watup.io/v1/logo');
        const data = await response.json();
        if (data.logo) {
            const navbar = document.querySelector('.navbar-brand');
            navbar.innerHTML = `<img src="${data.logo}" alt="Watup" style="height: 40px;">`;
        }
    } catch (e) {
        console.log('Logo API unavailable - using default');
    }
}

// Currency converter
document.getElementById('convertBtn')?.addEventListener('click', async () => {
    const amount = document.getElementById('currencyAmount').value;
    const from = document.getElementById('currencyFrom').value;
    const to = document.getElementById('currencyTo').value;
    
    try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const data = await res.json();
        const rate = data.rates[to];
        const result = (amount * rate).toFixed(2);
        document.getElementById('currencyResult').innerHTML = 
            `<strong>${amount} ${from} = ${result} ${to}</strong>`;
    } catch (e) {
        document.getElementById('currencyResult').innerHTML = '<span class="text-danger">Error fetching rates</span>';
    }
});

// Location info
document.getElementById('nearMeBtn')?.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            document.getElementById('locationInfo').innerHTML = 
                `<p class="text-muted">📍 Your location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}</p>`;
        });
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initialize on load
window.addEventListener('load', loadLogo);
