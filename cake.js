 const cake = document.querySelector('.cake-container');
        const candle = document.querySelector('.candle');
        const flame = document.querySelector('.flame');
        let isClicked = false;

        // Create background particles
        function createBackgroundParticles() {
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.top = `${Math.random() * 100}%`;
                    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
                    particle.style.opacity = '0.5';
                    particle.style.transform = 'scale(0)';
                    document.body.appendChild(particle);

                    gsap.to(particle, {
                        scale: 1,
                        duration: 1,
                        ease: 'power1.out'
                    });

                    gsap.to(particle, {
                        opacity: 0,
                        duration: 3,
                        delay: 2,
                        ease: 'power1.in',
                        onComplete: () => particle.remove()
                    });
                }, i * 100);
            }
        }

        // Create twinkling stars
        function createStars() {
            for (let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = `${Math.random() * 2}s`;
                document.body.appendChild(star);
            }
        }

        // Create initial stars
        createStars();

        // Balloon colors
        const balloonColors = [
            'linear-gradient(135deg, #FF9ECD, #FF71B6)',
            'linear-gradient(135deg, #FFB7E0, #FF8AC7)',
            'linear-gradient(135deg, #FFC4E6, #FFA3D4)',
            'linear-gradient(135deg, #E0C3FC, #BDE0FE)',
            'linear-gradient(135deg, #FFCAD4, #FFD1E3)',
            'linear-gradient(135deg, #B5EAD7, #C7F9CC)',
            'linear-gradient(135deg, #FF9AA2, #FFB7B2)',
            'linear-gradient(135deg, #FFDAC1, #FFE5D9)',
            'linear-gradient(135deg, #C7CEEA, #A1C4FD)',
            'linear-gradient(135deg, #FF9D6C, #BB4E75)'
        ];

        // Confetti shapes and colors
        const confettiColors = [
            '#ff71b6', '#ff9ecd', '#ffb7e0', '#ff8ac7', '#ffc4e6', 
            '#ffa3d4', '#e0c3fc', '#bde0fe', '#ffcad4', '#ffd1e3',
            '#b5ead7', '#c7f9cc', '#ff9aa2', '#ffb7b2', '#ffdac1', 
            '#ffe5d9', '#c7ceea', '#a1c4fd', '#ff9d6C', '#bb4e75'
        ];

        function createConfetti() {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * window.innerWidth}px`;
            
            // Randomly choose shape (square, rectangle, or circle)
            const shape = Math.floor(Math.random() * 3);
            if (shape === 0) {
                confetti.style.width = `${Math.random() * 10 + 5}px`;
                confetti.style.height = confetti.style.width;
                confetti.style.borderRadius = '0';
            } else if (shape === 1) {
                confetti.style.width = `${Math.random() * 15 + 5}px`;
                confetti.style.height = `${Math.random() * 10 + 5}px`;
                confetti.style.borderRadius = '0';
            } else {
                confetti.style.width = `${Math.random() * 10 + 5}px`;
                confetti.style.height = confetti.style.width;
                confetti.style.borderRadius = '50%';
            }
            
            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            document.body.appendChild(confetti);

            // Apply animation
            gsap.to(confetti, {
                y: window.innerHeight + 100,
                x: Math.random() * 200 - 100,
                rotation: Math.random() * 360,
                duration: Math.random() * 3 + 2,
                ease: "power1.out",
                onComplete: () => confetti.remove()
            });
        }

        function createBalloon() {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = `${Math.random() * window.innerWidth}px`;
            balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
            document.body.appendChild(balloon);

            // Random wobble animation
            gsap.to(balloon, {
                x: `${Math.random() * 100 - 50}px`,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            balloon.addEventListener('animationend', () => {
                balloon.remove();
            });
        }

        function createSmoke() {
            const smoke = document.createElement('div');
            smoke.className = 'smoke';
            smoke.style.left = `${candle.offsetLeft + candle.offsetWidth / 2}px`;
            smoke.style.top = `${candle.offsetTop - 10}px`;
            document.body.appendChild(smoke);

            gsap.to(smoke, {
                y: -30,
                x: Math.random() * 20 - 10,
                opacity: 0.3,
                scale: 2,
                duration: 2,
                onComplete: () => smoke.remove()
            });
        }

        // Add smoke animation before clicking
        setInterval(createSmoke, 500);

        function startCelebration() {
            if (isClicked) return;
            isClicked = true;

            // Create background particles
            createBackgroundParticles();

            // Make cake bounce
            gsap.to(cake, {
                y: -20,
                duration: 0.3,
                repeat: 1,
                yoyo: true,
                ease: "power2.out"
            });

            // Fade out candle with fancy effect
            gsap.to(flame, {
                scale: 2,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
            });

            gsap.to(candle, {
                opacity: 0,
                y: -30,
                duration: 1,
                delay: 0.2,
                ease: "back.in(1.7)",
                onComplete: () => candle.remove()
            });

            // Start balloon and confetti rain
            const balloonInterval = setInterval(() => {
                for (let i = 0; i < 2; i++) {
                    setTimeout(() => createBalloon(), i * 200);
                }
            }, 400);

            const confettiInterval = setInterval(() => {
                for (let i = 0; i < 10; i++) {
                    setTimeout(() => createConfetti(), i * 50);
                }
            }, 300);

            // Show next page button with fancy animation
            setTimeout(() => {
                const nextButton = document.querySelector('.next-page-button');
                nextButton.classList.add('show');
                
                gsap.fromTo(nextButton, 
                    { y: 50, opacity: 0 }, 
                    { y: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
                );
            }, 1500);

            // Stop particle effects after some time
            setTimeout(() => {
                clearInterval(balloonInterval);
                clearInterval(confettiInterval);
            }, 6000);
        }

        // Add button click handler
        document.querySelector('.next-page-button').addEventListener('click', () => {
            // Add transition effect
            document.body.style.opacity = 0;
            document.body.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                // You can replace this with your actual next page URL
                window.location.href = 'song.html';
            }, 500);
        });

        cake.addEventListener('click', startCelebration);