// ====== Menu burger (mobile) ======
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('active');
});

nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.setAttribute('aria-expanded','false');
    nav.classList.remove('active');
}));

// ====== Reveal on scroll ======
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
        }
    })
}, {threshold: .20, rootMargin: '0px 0px -40px 0px'});

document.querySelectorAll('.card').forEach(el => io.observe(el));

// ====== Formulaire de contact ======
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    formStatus.textContent = 'Message envoyé ! Merci.';
    formStatus.style.color = '#4ade80';
    
    // Réinitialiser le formulaire
    contactForm.reset();
    
    setTimeout(() => {
        formStatus.textContent = '';
    }, 5000);
});