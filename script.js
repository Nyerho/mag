import { db } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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

    async function saveResponse(response) {
        try {
            await addDoc(collection(db, "responses"), {
                response: response,
                timestamp: new Date(),
                userAgent: navigator.userAgent
            });
            console.log("Response saved!");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    yesBtn.addEventListener('click', function() {
        saveResponse('Yes');

        // Fade out main content
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            mainContent.classList.add('d-none');
            resultContent.classList.remove('d-none');
            
            // Update text and image
            resultMessage.innerText = "YAY! I love you Mageret! 💖😻";
            resultMessage.style.color = "#ff1493";
            resultGif.src = yesImage;
            
            // Trigger animation for result
            resultContent.classList.add('fade-in-up');
            
            // Trigger confetti
            triggerConfetti();
        }, 500);
    });

    noBtn.addEventListener('click', function() {
        saveResponse('No');

        // Fade out main content
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            mainContent.classList.add('d-none');
            resultContent.classList.remove('d-none');
            
            // Update text and image
            resultMessage.innerText = "Aww... Are you sure? 😿";
            resultMessage.style.color = "#666";
            resultGif.src = noImage;
            
            // Trigger animation for result
            resultContent.classList.add('fade-in-up');
        }, 500);
    });

    resetBtn.addEventListener('click', function() {
        resultContent.classList.add('d-none');
        resultContent.classList.remove('fade-in-up');
        
        mainContent.classList.remove('d-none');
        // Small timeout to allow display:block to apply before opacity transition
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 50);
    });

    function triggerConfetti() {
        // Using canvas-confetti library
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#ff69b4', '#ff1493', '#ffd700', '#87ceeb']
            }));
            confetti(Object.assign({}, defaults, { 
                particleCount, 
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#ff69b4', '#ff1493', '#ffd700', '#87ceeb']
            }));
        }, 250);
        
        // Also fire a burst immediately
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff69b4', '#ff1493', '#ffd700', '#87ceeb']
        });
    }
});
