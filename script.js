// 1. MENU BURGER MOBILE
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navList.classList.remove('active');
    }));
}

// 2. EFFET MACHINE À ÉCRIRE
const textElement = document.getElementById('typewriter');
const phrases = ["Développement Web.", "Linux & Bash.", "Python & SQL."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (textElement) {
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1500); 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 300); 
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
}
document.addEventListener('DOMContentLoaded', type);

// 3. SCROLL SPY (NOUVEAU : Surligne le menu au défilement)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Si on a scrollé jusqu'à cette section (avec une petite marge de 150px pour l'entête)
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        // Si le lien correspond à la section actuelle, on ajoute la classe active
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
