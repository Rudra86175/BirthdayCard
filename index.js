 document.addEventListener('DOMContentLoaded', function() {
            // Background music control
            const bgMusic = document.getElementById('bgMusic');
            const soundControl = document.getElementById('soundControl');
            const soundIcon = document.querySelector('.sound-icon');
            const muteIcon = document.querySelector('.mute-icon');
            
            // Create stars
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 150; i++) { // Increased number of stars
                createStar(starsContainer);
            }
            
            // Create balloons
            for (let i = 0; i < 15; i++) { // Increased number of balloons
                createBalloon();
            }
            
            // Create confetti
            for (let i = 0; i < 50; i++) { // Increased number of confetti
                createConfetti();
            }
            
            // Try to autoplay (might be blocked by browser)
            bgMusic.volume = 0.4;
            let playPromise = bgMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Autoplay started
                }).catch(error => {
                    // Auto-play was prevented
                    soundIcon.style.display = 'none';
                    muteIcon.style.display = 'block';
                });
            }
            
            soundControl.addEventListener('click', function() {
                if (bgMusic.paused) {
                    bgMusic.play();
                    soundIcon.style.display = 'block';
                    muteIcon.style.display = 'none';
                } else {
                    bgMusic.pause();
                    soundIcon.style.display = 'none';
                    muteIcon.style.display = 'block';
                }
            });

            // Start button click event
            const startButton = document.getElementById('startButton');
            const welcomeCard = document.getElementById('welcomeCard');
            
            startButton.addEventListener('click', function() {
                // Add celebration effect on click
                for (let i = 0; i < 80; i++) { // Increased confetti on click
                    createConfetti();
                }
                
                // Scale and rotate the card before fade out
                welcomeCard.style.transform = 'scale(1.1) rotate(5deg)';
                
                // Fade out welcome card after brief scale effect
                setTimeout(() => {
                    welcomeCard.style.opacity = '0';
                    welcomeCard.style.transform = 'scale(0.8) rotate(-10deg)';
                }, 300);
                
                // After fade-out, redirect to next page
                setTimeout(function() {
                    // Uncomment and update with your next page
                     window.location.href = 'memory.html';
                    
                    // For now, we'll just alert
                   
                    
                    // Reset card for demo purposes
                    welcomeCard.style.opacity = '1';
                    welcomeCard.style.transform = 'scale(1) rotate(0)';
                }, 1500);
            });
            
            // Start rose petals animation
            setInterval(createRosePetal, 150); // More frequent rose petals
        });

        // Function to create stars
        function createStar(container) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Random sizing
            const size = Math.random() * 0.7 + 0.5; // Varied star sizes
            star.style.transform = `scale(${size})`;
            
            // Random positioning
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Random animation duration
            const duration = Math.random() * 3 + 1;
            star.style.animationDuration = `${duration}s`;
            
            // Random animation delay
            star.style.animationDelay = `${Math.random() * 3}s`;
            
            container.appendChild(star);
        }

        // Function to create balloons
        function createBalloon() {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            
            // Random sizing
            const size = Math.random() * 30 + 30;
            balloon.style.width = `${size}px`;
            balloon.style.height = `${size * 1.25}px`;
            
            // Random colors - updated with brighter celebration colors
            const colors = ['#ff0051', '#00d2ff', '#ffdd00', '#ff9100', '#9d00ff', '#00ff9d', '#ff00f7'];
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Random positioning
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.top = `${Math.random() * 50 + 50}%`;
            
            // Animation duration and delay
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;
            balloon.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
            
            document.body.appendChild(balloon);
        }

        // Function to create confetti
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Random sizing
    const size = Math.random() * 12 + 5;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    
    // Random shapes
    const shapes = ['square', 'circle', 'triangle'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    if (shape === 'circle') {
        confetti.style.borderRadius = '50%';
    } else if (shape === 'triangle') {
        confetti.style.width = '0';
        confetti.style.height = '0';
        confetti.style.borderLeft = `${size/2}px solid transparent`;
        confetti.style.borderRight = `${size/2}px solid transparent`;
        confetti.style.borderBottom = `${size}px solid`;
        confetti.style.backgroundColor = 'transparent';
    }
    
    // Brighter celebration colors
    const colors = ['#ff0051', '#00d2ff', '#ffdd00', '#ff9100', '#9d00ff', '#00ff9d', '#ff00f7', 
                   '#ffd700', '#f44336', '#4CAF50', '#2196F3', '#FF5722', '#9C27B0', '#3F51B5'];
    
    if (shape === 'triangle') {
        confetti.style.borderBottomColor = colors[Math.floor(Math.random() * colors.length)];
    } else {
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Random positioning
    confetti.style.left = `${Math.random() * 100}%`;
    
    // Animation duration and delay
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 5;
    confetti.style.animation = `confettiFall ${duration}s ease-in-out ${delay}s forwards`;
    
    document.body.appendChild(confetti);
    
    // Remove confetti after animation completes to prevent memory build-up
    setTimeout(() => {
        confetti.remove();
    }, (duration + delay) * 1000);
}

// Function to create rose petals
function createRosePetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Random sizing
    const size = Math.random() * 15 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.4}px`;
    
    // Random colors - soft pinks and reds for rose theme
    const colors = ['#ff3d8c', '#ff0051', '#ff6b8b', '#ff9eb5', '#ff2471'];
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random positioning
    petal.style.left = `${Math.random() * 100}%`;
    
    // Random rotation
    const rotation = Math.random() * 360;
    petal.style.transform = `rotate(${rotation}deg)`;
    
    // Animation
    const duration = Math.random() * 4 + 6;
    petal.style.animation = `fall ${duration}s linear forwards`;
    
    document.body.appendChild(petal);
    
    // Remove petal after animation completes
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Additional memory path page redirect logic (placeholder function - to be implemented with actual memory page)
function navigateToMemories() {
    // This function would handle navigation to the memories page
    console.log("Navigating to memories page");
    // Actual implementation would redirect to memory.html
    // window.location.href = 'memory.html';
}

// Extra hover effects for heart button
document.addEventListener('DOMContentLoaded', function() {
    const heartButton = document.getElementById('startButton');
    
    if (heartButton) {
        heartButton.addEventListener('mouseover', function() {
            // Add extra particles on hover
            for (let i = 0; i < 5; i++) {
                createConfetti();
            }
        });
    }
});

// Handle browser back button or page refresh
window.addEventListener('beforeunload', function() {
    // Optional - could save progress or state here
    console.log("Page is being refreshed or closed");
});

// Add accessibility features
document.addEventListener('DOMContentLoaded', function() {
    // Set ARIA attributes for better accessibility
    const startButton = document.getElementById('startButton');
    if (startButton) {
        startButton.setAttribute('role', 'button');
        startButton.setAttribute('aria-label', 'Begin the birthday celebration journey');
        startButton.setAttribute('tabindex', '0');
        
        // Allow keyboard activation
        startButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                startButton.click();
            }
        });
    }
    
    const soundControl = document.getElementById('soundControl');
    if (soundControl) {
        soundControl.setAttribute('role', 'button');
        soundControl.setAttribute('aria-label', 'Toggle background music');
        soundControl.setAttribute('tabindex', '0');
        
        // Allow keyboard activation
        soundControl.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                soundControl.click();
            }
        });
    }
});

// Optional: Add preloader to ensure all assets are loaded before showing content
window.addEventListener('load', function() {
    // Remove a preloader if implemented
    console.log("Page fully loaded");
    // Any final initialization can go here
    
    // Optional - trigger initial animation or effect once everything is loaded
    const welcomeCard = document.getElementById('welcomeCard');
    if (welcomeCard) {
        welcomeCard.style.opacity = '0';
        setTimeout(() => {
            welcomeCard.style.opacity = '1';
        }, 300);
    }
});