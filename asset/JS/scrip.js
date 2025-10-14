        // ====== Menu burger (mobile) ======
        const burger = document.getElementById('burger');
        const nav = document.getElementById('nav');
        burger.addEventListener('click', () => {
            const expanded = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', String(!expanded));
            nav.classList.toggle('open');
        });

        nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            burger.setAttribute('aria-expanded','false');
            nav.classList.remove('open');
        }));

        // ====== Reveal on scroll ======
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            })
        }, {threshold: .12, rootMargin: '0px 0px -40px 0px'});

        document.querySelectorAll('.card').forEach(el => io.observe(el));