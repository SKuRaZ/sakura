document.addEventListener("DOMContentLoaded", function () {
    createContinuousFlowerRain();
});

function createContinuousFlowerRain() {
    setInterval(function () {
        const logos = document.querySelectorAll(".logo");
        logos.forEach((logo) => {
            createFlowerRain(logo);
        });
    }, 2000); // Adjust the interval as needed
}

function createFlowerRain(logo) {
    const container = document.body;
    const logoRect = logo.getBoundingClientRect();

    for (let i = 0; i < 5; i++) {
        const flower = document.createElement("img");
        flower.src = "image/Flower-final.png";
        flower.alt = "flower";
        flower.className = "flower";
        container.appendChild(flower);

        animateFlower(logoRect, flower);
    }
}

function animateFlower(logoRect, flower) {
    const duration = Math.random() * 3 + 2; // Random duration between 2 and 5 seconds
    const startPositionX = logoRect.left + logoRect.width * Math.random();
    const startPositionY = logoRect.top - 10; // Start above the logo

    flower.style.left = startPositionX + "px";
    flower.style.top = startPositionY + "px";
    flower.style.opacity = 4; // Adjust the opacity value for better visibility

    // Set up keyframes for smooth animation
    flower.animate(
        [
            { transform: `translateY(${startPositionY}px)`, opacity: 4 },
            { transform: `translateY(${window.innerHeight}px)`, opacity: 0.001 },
        ],
        {
            duration: duration * 1000,
            easing: "linear",
            fill: "forwards",
        }
    );

    flower.addEventListener("animationend", function () {
        flower.remove();
    });
}
