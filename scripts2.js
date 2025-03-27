document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.getElementById('hearts-container');

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


document.addEventListener('DOMContentLoaded', () => {
    // Define the images for each month in an object
    const monthImages = {
        april: [
            'april/1 (1).jpeg',
            'april/1 (2).jpeg',
            'april/1 (3).jpeg',
            'april/1 (7).jpeg',
            'april/1 (5).jpeg'
        ],
        may: [
            'may/1 (1).jpeg',
            'may/1 (2).jpeg',
            'may/1 (3).jpeg',
            'may/1 (4).jpeg',
            'may/1 (5).jpeg'
        ],
        june: [
            'june/1 (1).jpeg',
            'june/1 (2).jpeg',
            'june/1 (3).jpeg',
            'june/1 (4).jpeg',
            'june/1 (5).jpeg'
        ],
        july: [
            'july/1 (1).jpeg',
            'july/1 (2).jpeg',
            'july/1 (3).jpeg',
            'july/1 (4).jpeg',
            'july/1 (5).jpeg'
        ],
        august: [
            'august/1 (1).jpeg',
            'august/1 (2).jpeg',
            'august/1 (3).jpeg',
            'august/1 (4).jpeg',
            'august/1 (5).jpeg'
        ],
        september: [
            'september/1 (1).jpeg',
            'september/1 (2).jpeg',
            'september/1 (3).jpeg',
            'september/1 (4).jpeg',
            'september/1 (5).jpeg'
        ],
        october: [
            'october/1 (1).jpeg',
            'october/1 (2).jpeg',
            'october/1 (3).jpeg',
            'october/1 (4).jpeg',
            'october/1 (5).jpeg'
        ],
        november: [
            'november/1 (1).jpeg',
            'november/1 (2).jpeg',
            'november/1 (3).jpeg',
            'november/1 (4).jpeg',
            'november/1 (5).jpeg'
        ],
        december: [
            'december/1 (1).jpeg',
            'december/1 (2).jpeg',
            'december/1 (3).jpeg',
            'december/1 (4).jpeg',
            'december/1 (5).jpeg'
        ],
        january: [
            'january/1 (1).jpeg',
            'january/1 (2).jpeg',
            'january/1 (3).jpeg',
            'january/1 (4).jpeg',
            'january/1 (5).jpeg'
        ],
        february: [
            'february/1 (1).jpeg',
            'february/1 (2).jpeg',
            'february/1 (3).jpeg',
            'february/1 (4).jpeg',
            'february/1 (5).jpeg'
        ],
        march: [
            'march/1 (1).jpeg',
            'march/1 (2).jpeg',
            'march/1 (3).jpeg',
            'march/1 (4).jpeg',
            'march/1 (5).jpeg'
        ]
    };

    // Function to shuffle the images for a given month
    function shuffleImages(month) {
        const images = monthImages[month];
        const randomIndex = Math.floor(Math.random() * images.length);
        const monthImageElement = document.getElementById(`${month}-image`);
        monthImageElement.src = images[randomIndex];
    }

    // Loop through all months and set up an interval to change images
    const months = Object.keys(monthImages);
    months.forEach(month => {
        setInterval(() => shuffleImages(month), 2000); // Change image every 2 seconds
        shuffleImages(month); // Optionally, call once on page load
    });
});
