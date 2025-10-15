

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


// Animation de révélation des cartes au défilement
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Gestion du menu burger
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});
// Rendre toutes les cartes visibles une fois le DOM chargé (au cas où IntersectionObserver ne fonctionne pas)
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.add('visible'));
});