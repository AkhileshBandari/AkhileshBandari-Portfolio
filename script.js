// ================= LIGHT/DARK MODE =================
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light');
});

// ================= GSAP SCROLL ANIMATIONS =================
gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// ================= FLOATING CERTIFICATES =================
gsap.utils.toArray('.cert-card').forEach(card => {
    gsap.fromTo(card,
        { y: 0 },
        {
            y: -10,
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
});
const hero = document.querySelector(".hero-right");

hero.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

hero.addEventListener("mouseleave", () => {
    hero.style.transform = "rotateY(0deg) rotateX(0deg)";
});

const roles = [
    "Full Stack Developer",
    "AI/ML Engineering",
    "Prompt Engineering"
];

const roleElement = document.getElementById("dynamic-role");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 80;       // typing speed
const deletingSpeed = 50;     // deleting speed
const delayBetweenRoles = 1500; // wait after full word

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        // Typing
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            setTimeout(() => isDeleting = true, delayBetweenRoles);
        }

    } else {
        // Deleting
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeEffect, speed);
}

typeEffect();
