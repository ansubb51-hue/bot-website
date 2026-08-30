// ========================================
// MY BOT WEBSITE JAVASCRIPT
// ========================================


// Page load animation

document.addEventListener("DOMContentLoaded", () => {

    console.log("🤖 MY BOT website loaded successfully!");

});


// Button click effect

const buttons = document.querySelectorAll(
    ".primary-button, .secondary-button, .nav-button"
);

buttons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("Button clicked:", button.innerText);

    });

});


// Simple scroll animation

const cards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition = "0.6s ease";

    observer.observe(card);

});
