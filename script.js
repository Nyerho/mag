document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const mainContent = document.getElementById('main-content');
    const resultContent = document.getElementById('result-content');
    const resultMessage = document.getElementById('result-message');
    const resultGif = document.getElementById('result-gif');
    const resetBtn = document.getElementById('reset-btn');

    // Local Images
    const yesImage = "images/100.webp";
    const noImage = "images/no.webp";

    yesBtn.addEventListener('click', function() {
        // Hide main content
        mainContent.classList.add('d-none');
        
        // Show result content
        resultContent.classList.remove('d-none');
        
        // Update text and image
        resultMessage.innerText = "YAY! I love you Mageret! 💖😻";
        resultMessage.style.color = "#ff1493";
        resultGif.src = yesImage;
        
        // Add confetti effect
        createConfetti();
    });

    noBtn.addEventListener('click', function() {
        // Hide main content
        mainContent.classList.add('d-none');
        
        // Show result content
        resultContent.classList.remove('d-none');
        
        // Update text and image
        resultMessage.innerText = "Aww... Are you sure? 😿";
        resultMessage.style.color = "#666";
        resultGif.src = noImage;
    });

    resetBtn.addEventListener('click', function() {
        resultContent.classList.add('d-none');
        mainContent.classList.remove('d-none');
    });

    function createConfetti() {
        const colors = ['#ff69b4', '#ff1493', '#ffd700', '#87ceeb'];
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = -10 + 'px';
            confetti.style.zIndex = '1000';
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            document.body.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
});

// Add keyframes for confetti in JS to avoid complex CSS dependencies
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(720deg);
    }
}`;
document.head.appendChild(styleSheet);
