

function scrollToSection(sectionID) {
    document.querySelector(sectionID).scrollIntoView({ behavior: "smooth" });
}

// Loading Screen
window.addEventListener("load", () => {
    let loadingScreen = document.getElementById("loading");
    loadingScreen.style.display = "none";
});

// GSAP Animations
window.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-title", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".hero-subtitle", { duration: 1, y: 50, opacity: 0 });
});

document.getElementById("darkModeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

