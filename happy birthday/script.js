document.addEventListener('DOMContentLoaded', function() {
    const musicBtn = document.getElementById('musicBtn');
    const music = document.getElementById('backgroundMusic');
    const menuToggle = document.querySelector('#menuToggle input');
    const quoteContainer = document.getElementById('quoteContainer');
    
    const quotes = [
        "In you, I've found the love of my life and my closest, truest friend.",
        "I love you not only for what you are, but for what I am when I am with you.",
        "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
        // Add more romantic quotes as desired
    ];

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteContainer.textContent = quotes[randomIndex];
    }

    musicBtn.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            musicBtn.textContent = 'Pause Music';
        } else {
            music.pause();
            musicBtn.textContent = 'Play Music';
        }
    });

    // Display a random romantic quote
    displayRandomQuote();

    // Toggle for the hamburger menu
    menuToggle.addEventListener('change', function() {
        const menu = document.getElementById('menu');
        if (this.checked) {
            // Open the menu
            menu.style.transform = 'translateX(0)';
        } else {
            // Close the menu
            menu.style.transform = 'translateX(-100%)';
        }
    });

    generateHearts(20); // Generate falling hearts
    startFireworks(); // Start fireworks animation
});

function generateHearts(heartCount) {
    for (let i = 0; i < heartCount; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        document.body.appendChild(heart);
        
        heart.style.left = `${Math.floor(Math.random() * 100)}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 3}s`;
        heart.style.fontSize = `${Math.random() * 20 + 20}px`; // Adjust size for visibility
    }
}

function startFireworks() {
    setInterval(() => {
        let firework = createFirework();
        document.body.appendChild(firework);
        animateFirework(firework);
    }, 1000); // Launch a firework every second
}
// Example adjustment for appending elements
function createFirework() {
    let firework = document.createElement('div');
    firework.className = 'firework';
    // Other styles remain the same
    document.getElementById('animationsContainer').appendChild(firework); // Append to the container
    return firework;
}

function animateFirework(firework) {
    let y = 0;
    let ascentSpeed = Math.random() * 20 + 20; // Speed of ascent
    let interval = setInterval(() => {
        if (y > window.innerHeight * 0.7) {
            clearInterval(interval);
            firework.remove(); // Cleanup after reaching a certain height
        } else {
            y += ascentSpeed;
            firework.style.bottom = `${y}px`;
        }
    }, 30);
}
