/* --- 1. GESTION DU MENU MOBILE (Burger) --- */
const menuToggle = document.getElementById('mobile-menu'); // Le bouton avec les 3 barres
const navLinks = document.querySelector('.nav-links');     // La liste des liens

// On vérifie que le bouton existe (pour éviter les erreurs)
if (menuToggle) {
    // Quand on clique sur le burger
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active'); 
        // La classe 'active' est ajoutée ou retirée. 
        // C'est le CSS qui fait apparaître le menu quand 'active' est là.
    });

    // Pour chaque lien du menu...
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            // ...si on clique dessus, on ferme le menu.
            // C'est plus agréable pour l'utilisateur sur mobile.
            navLinks.classList.remove('active');
        });
    });
}

/* --- 2. EFFET MACHINE À ÉCRIRE (Typewriter) --- */
const textElement = document.getElementById('typewriter'); // L'endroit où le texte s'écrit
const phrases = ["Web.", "Logicielles.", "Intuitives.", "Robustes."]; // Les mots à afficher
let phraseIndex = 0; // Quel mot on est en train d'écrire (0 = Web)
let charIndex = 0;   // Quelle lettre on est en train d'écrire
let isDeleting = false; // Est-ce qu'on est en train d'effacer ?

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (textElement) {
        if (isDeleting) {
            // Si on efface : on prend un caractère de moins
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Si on écrit : on prend un caractère de plus
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        // LOGIQUE DE VITESSE ET DE CHANGEMENT
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Si le mot est fini, on attend un peu (1.5s) avant d'effacer
            isDeleting = true;
            setTimeout(type, 1500); 
        } else if (isDeleting && charIndex === 0) {
            // Si tout est effacé, on passe au mot suivant
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Boucle infinie sur la liste
            setTimeout(type, 300); // Petite pause avant de réécrire
        } else {
            // Vitesse de frappe normale (rapide pour effacer, un peu plus lent pour écrire)
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
}
// Lance l'animation quand la page est chargée
document.addEventListener('DOMContentLoaded', type);

/* --- 3. SCROLL SPY (Indicateur de position) --- */
// Sert à allumer le bon lien dans le menu quand on descend dans la page
const sections = document.querySelectorAll('section'); // Toutes tes sections
const navLinksItems = document.querySelectorAll('.nav-link'); // Tous tes liens

window.addEventListener('scroll', () => {
    let current = ''; // L'id de la section visible
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Position de la section par rapport au haut
        const sectionHeight = section.clientHeight; // Hauteur de la section
        
        // Si on a scrollé jusqu'à un tiers de la section, on considère qu'on est dedans
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    // On met à jour les liens du menu
    navLinksItems.forEach(link => {
        link.classList.remove('active'); // On éteint tout
        // Si le lien pointe vers la section actuelle (ex: href="#about" contient "about")
        if (link.getAttribute('href').includes(current)) {
            // On vérifie que 'current' n'est pas vide pour éviter de tout allumer au début
            if (current !== '') {
                link.classList.add('active'); // On allume le bon
            }
        }
    });
});
