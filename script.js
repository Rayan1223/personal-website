// Animate Sections on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            let position = section.getBoundingClientRect().top;
            let screenHeight = window.innerHeight / 1.3;
            if (position < screenHeight) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    });
});

// GSAP Animation
gsap.from("h1", { opacity: 0, y: -49, duration: 1 });  
gsap.from("nav ul li", { opacity: 0, y: -20, stagger: 0.2 });
gsap.from("section", { opacity: 0, y: 50, stagger: 0.3, duration: 1 });
