// ===========================
// Menu Filter Function
// ===========================
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    const buttons = document.querySelectorAll('.menu-categories button');
    
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Filter menu items
    items.forEach(item => {
        if (category === 'semua' || item.dataset.category === category) {
            item.style.display = 'block';
            // Add fade-in animation
            item.style.animation = 'fadeIn 0.5s';
        } else {
            item.style.display = 'none';
        }
    });
}

// ===========================
// Order Button Handler
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.btn-order');
    
    orderButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const menuItem = this.closest('.menu-item-content');
            const menuName = menuItem.querySelector('h4').textContent;
            const price = menuItem.querySelector('.price').textContent;
            
            // Create WhatsApp message
            const message = `Halo, saya ingin memesan ${menuName} (${price})`;
            const phoneNumber = '6281234567890'; // Ganti dengan nomor WA Anda
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Open WhatsApp in new tab
            window.open(whatsappURL, '_blank');
        });
    });
});

// ===========================
// Smooth Scroll Navigation
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// ===========================
// Contact Form Handler
// ===========================
const contactForm = document.querySelector('#orderForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const order = this.querySelector('textarea').value;
        
        // Create WhatsApp message
        const message = `Nama: ${name}%0ANo. HP: ${phone}%0APesanan: ${order}`;
        const phoneNumber = '6281234567890'; // Ganti dengan nomor WA Anda
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');
        
        // Reset form
        this.reset();
        
        // Show success message (optional)
        alert('Terima kasih! Pesanan Anda akan dikirim via WhatsApp.');
    });
}

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Gallery Item Click Handler
// ===========================
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // You can add lightbox functionality here
        // For now, just show an alert
        alert('Fitur lightbox galeri dapat ditambahkan di sini');
    });
});

// ===========================
// Animation on Scroll
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .menu-item, .gallery-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease-out';
        observer.observe(el);
    });
});

// ===========================
// Add Fade-in Animation CSS
// ===========================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);