/*==================================
    MOBILE MENU
==================================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


/*==================================
    CLOSE MENU ON LINK CLICK
==================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


/*==================================
    STICKY HEADER SHADOW
==================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
        header.style.background = "rgba(15,23,42,.98)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(15,23,42,.95)";

    }

});


/*==================================
    ACTIVE NAV LINK
==================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==================================
    TYPING EFFECT
==================================*/

const typing = document.querySelector(".typing");

const words = [

    "Software Engineer",
    "Front-End Developer",
    "Digital Marketer",
    "Web Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/*==================================
    SCROLL REVEAL
==================================*/

const reveals = document.querySelectorAll(

    ".title,.about-grid,.skill-box,.card,.project,.contact,.hero-text,.hero-image"

);

function revealScroll() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealScroll);

revealScroll();


/*==================================
    SKILL BAR ANIMATION
==================================*/

const bars = document.querySelectorAll(".bar span");

function animateBars() {

    bars.forEach(bar => {

        const value = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = value;

        }, 300);

    });

}

window.addEventListener("load", animateBars);


/*==================================
    SMOOTH SCROLL
==================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        window.scrollTo({

            top: target.offsetTop - 70,

            behavior: "smooth"

        });

    });

});


/*==================================
    HERO IMAGE PARALLAX
==================================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 35;
    let y = (window.innerHeight / 2 - e.pageY) / 35;

    heroImage.style.transform = `translate(${x}px,${y}px)`;

});


/*==================================
    BUTTON RIPPLE EFFECT
==================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


/*==================================
    PRELOADER (Optional)
==================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*==================================
    CURRENT YEAR IN FOOTER
==================================*/

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} Zulqarnain Ali. All Rights Reserved.`;

}