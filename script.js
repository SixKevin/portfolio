/* --- SCRIPT.JS - KEVIN SIX --- */

// 1. MENU BURGER MOBILE
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

if (burger) {
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animation du Burger
        burger.classList.toggle('toggle');

        // Animation des liens
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
}

// 2. EFFET MACHINE À ÉCRIRE (TYPEWRITER)
const textElement = document.getElementById('typing-text');
const words = ["Web & Back-end", "Linux & Système", "Passionné & Curieux"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    
    if (textElement) {
        textElement.textContent = currentChar;
        textElement.classList.add('stop-blinking');

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            textElement.classList.remove('stop-blinking');
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
            setTimeout(typeEffect, 1200);
        }
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);
