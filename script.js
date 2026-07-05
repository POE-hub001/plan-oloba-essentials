// PLAN OLOBA ESSENTIALS

console.log("Welcome to Plan Oloba Essentials!");

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseover", () => {
            card.style.transform = "translateY(-10px) scale(1.03)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "translateY(0) scale(1)";
        });

    });

});
