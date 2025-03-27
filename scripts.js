document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "¿Te gustaría ser mi novia?",
        "Mi amor por ti empezó desde una hermosa amistad. Nuestra química era insuperable.",
        "Cada momento que paso contigo, es el momento más bonito de mi día. Soy el hombre más feliz cuando estoy contigo.",
        "Eres la princesa más linda, comprensiva e increíble del mundo. Eres mi princesa, haces mis sueños realidad."
    ];

    const romanticText = document.getElementById('romantic-text');
    const changeTextButton = document.getElementById('change-text');
    const heartsContainer = document.getElementById('hearts-container');
    let currentIndex = 0;

    // Change the text when the button is clicked
    changeTextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % messages.length;
        romanticText.textContent = messages[currentIndex];
    });

    // Function to create a heart element
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random animation speed
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Heart disappears after 5 seconds
    }

    // Create hearts at intervals
    setInterval(createHeart, 500);

    // Add styles for hearts dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .heart {
            width: 20px;
            height: 20px;
            background: red;
            position: absolute;
            bottom: 0; /* Hearts appear at the bottom */
            opacity: 0.7;
            clip-path: polygon(50% 0%, 61% 16%, 75% 19%, 86% 35%, 95% 50%, 100% 61%, 100% 75%, 90% 83%, 75% 91%, 60% 95%, 50% 100%, 40% 95%, 25% 91%, 10% 83%, 0% 75%, 0% 61%, 5% 50%, 14% 35%, 25% 19%, 39% 16%);
            animation: float 5s infinite;
        }

        @keyframes float {
            0% {
                transform: translateY(0) scale(1);
                opacity: 0.7;
            }
            100% {
                transform: translateY(-100vh) scale(0.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
