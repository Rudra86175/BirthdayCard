 document.addEventListener('DOMContentLoaded', function() {
            // Memory cards data
            const memories = [
                {
                    img: "Pic1.png",
                    title: "Summer Beach Day",
                    description: "Remember that perfect day at the beach? The sun was shining, the waves were just right, and we built that incredible sand castle!",
                    date: "2023-07-15",
                    rotate: "-3deg"
                },
                {
                    img: "Pic2.png",
                    title: "Hiking Adventure",
                    description: "That mountain view was worth every step! I'll never forget how you insisted on carrying the extra water 'just in case' - and how we needed it!",
                    date: "2023-05-22",
                    rotate: "2deg"
                },
                {
                    img: "  Pic3.png",
                    title: "Cooking Experiment",
                    description: "Who knew making pasta from scratch could be so messy? Your kitchen looked like a flour explosion, but the dinner was absolutely delicious!",
                    date: "2023-09-03",
                    rotate: "-1deg"
                },
                {
                    img: "  Pic4.png",
                    title: "Game Night",
                    description: "Still can't believe you won three rounds in a row! Your victory dance is forever etched in my memory.",
                    date: "2024-01-12",
                    rotate: "1deg"
                },
                {
                    img: "  Pic5.png",
                    title: "Road Trip",
                    description: "5 hours, 3 wrong turns, and 1 amazing sunset later, we found the perfect spot. Sometimes getting lost leads to the best discoveries!",
                    date: "2023-08-17",
                    rotate: "-2deg"
                },
                {
                    img: "  Pic6.png",
                    title: "Concert Night",
                    description: "Front row seats and your favorite band! I don't think my ears have fully recovered, but seeing you so happy made it all worth it.",
                    date: "2023-11-30",
                    rotate: "3deg"
                },
                {
                    img: "  Pic7.png",
                    title: "Movie Marathon",
                    description: "12 hours, 5 movies, and way too much popcorn. You fell asleep during the last one but insisted you 'just rested your eyes'!",
                    date: "2024-02-05",
                    rotate: "0deg"
                },
                {
                    img: "  Pic8.png",
                    title: "Coffee Shop Study",
                    description: "You were so focused that you didn't notice your coffee getting cold. Your dedication has always been inspiring!",
                    date: "2023-10-09",
                    rotate: "-1.5deg"
                }
            ];
            
            // Generate confetti
            const confettiContainer = document.getElementById('confetti-container');
            const confettiColors = ['#FF3CAC', '#784BA0', '#2CD3E1', '#FBAB7E', '#FF9A8B', '#F7CE68'];
            
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = Math.random() * 10 + 5 + 'px';
                confetti.style.opacity = Math.random() * 0.8 + 0.2;
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                confetti.style.setProperty('--rotate-deg', `${Math.random() * 360}deg`);
                confetti.style.animation = `confettiFall ${Math.random() * 5 + 3}s linear infinite ${Math.random() * 5}s`;
                confettiContainer.appendChild(confetti);
            }
            
            // Generate cake bubbles
            const cakeBubbles = document.getElementById('cake-bubbles');
            
            for (let i = 0; i < 30; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                bubble.style.left = Math.random() * 100 + '%';
                bubble.style.width = Math.random() * 20 + 10 + 'px';
                bubble.style.height = bubble.style.width;
                bubble.style.opacity = Math.random() * 0.5 + 0.1;
                bubble.style.animationDuration = Math.random() * 5 + 3 + 's';
                bubble.style.animationDelay = Math.random() * 3 + 's';
                bubble.style.setProperty('--translate-x', `${Math.random() * 100 - 50}px`);
                cakeBubbles.appendChild(bubble);
            }
            
            // Generate memory cards
            const memoryGallery = document.getElementById('memories');
            
            function shuffleArray(array) {
                let currentIndex = array.length, randomIndex;
                
                while (currentIndex != 0) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;
                    
                    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
                }
                
                return array;
            }
            
            function renderMemories(memoriesArray) {
                memoryGallery.innerHTML = '';
                
                memoriesArray.forEach((memory, index) => {
                    const card = document.createElement('div');
                    card.className = 'memory-card';
                    card.style.setProperty('--rotate', memory.rotate);
                    
                    // Add a slight delay for each card for a staggered animation effect
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 200);
                    
                    card.innerHTML = `
                        <img src="${memory.img}" alt="${memory.title}" class="memory-img">
                        <div class="memory-caption">
                            <h3>${memory.title}</h3>
                            <p>${memory.description}</p>
                        </div>
                        <div class="card-decorations">
                            <div class="card-ribbon">
                                <span class="card-ribbon-text">Memory</span>
                            </div>
                            <div class="card-sticker card-sticker-top-right">
                                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#FFD700" />
                                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FF3CAC" font-weight="bold" font-size="12">✨</text>
                                </svg>
                            </div>
                            <div class="card-sticker card-sticker-bottom-left">
                                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#FF3CAC" />
                                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFD700" font-weight="bold" font-size="12">❤️</text>
                                </svg>
                            </div>
                        </div>
                    `;
                    
                    memoryGallery.appendChild(card);
                });
            }
            
            // Initial render of memories
            renderMemories(memories);
            
            // Add event listeners
            document.getElementById('shuffleButton').addEventListener('click', function() {
                const shuffledMemories = shuffleArray([...memories]);
                renderMemories(shuffledMemories);
            });
            
            document.getElementById('sortButton').addEventListener('click', function() {
                const sortedMemories = [...memories].sort((a, b) => new Date(a.date) - new Date(b.date));
                renderMemories(sortedMemories);
            });
            
            document.getElementById('nextButton').addEventListener('click', function() {
                  window.location.href = 'cake.html';
            });
            
            document.getElementById('backButton').addEventListener('click', function() {
                memoryGallery.scrollBy({
                    left: -600,
                    behavior: 'smooth'
                });
            });
            
            // Generate sparkles
            function createSparkle() {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkles';
                sparkle.style.left = Math.random() * 100 + 'vw';
                sparkle.style.top = Math.random() * 100 + 'vh';
                sparkle.style.animationDelay = Math.random() * 3 + 's';
                
                sparkle.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="10,0 13,7 20,10 13,13 10,20 7,13 0,10 7,7" fill="#FFD700" />
                    </svg>
                `;
                
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    document.body.removeChild(sparkle);
                }, 3000);
            }
            
            // Create sparkles at intervals
            setInterval(createSparkle, 300);
            
            // Add scroll functionality
            document.getElementById('nextButton').addEventListener('click', function() {
                memoryGallery.scrollBy({
                    left: 600,
                    behavior: 'smooth'
                });
            });
        });