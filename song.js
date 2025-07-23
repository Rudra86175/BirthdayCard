document.addEventListener('DOMContentLoaded', function() {
            AOS.init();
            createParticles();
            initializeSongCards();
            initializeSearch();
        });
        
        // Create floating heart particles
        function createParticles() {
            const container = document.querySelector('.particles');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random positioning
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                
                // Random size
                const size = Math.random() * 15 + 10;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random animation duration
                const duration = Math.random() * 30 + 20;
                particle.style.animationDuration = duration + 's';
                
                // Random delay
                const delay = Math.random() * 20;
                particle.style.animationDelay = delay + 's';
                
                container.appendChild(particle);
            }
        }
        
        // Initialize song cards
        function initializeSongCards() {
            const songCards = document.querySelectorAll('.song-card');
            const nowPlayingBar = document.getElementById('now-playing');
            const currentSongElement = document.getElementById('current-song');
            let currentlyPlaying = null;
            
            songCards.forEach(card => {
                // Show memory message on hover
                card.addEventListener('mouseenter', function() {
                    const memory = this.querySelector('.memory');
                    memory.classList.remove('hidden');
                    setTimeout(() => {
                        memory.classList.remove('opacity-0');
                    }, 100);
                });
                
                card.addEventListener('mouseleave', function() {
                    const memory = this.querySelector('.memory');
                    memory.classList.add('opacity-0');
                    setTimeout(() => {
                        memory.classList.add('hidden');
                    }, 500);
                });
                
                // Play button functionality
                const playBtn = card.querySelector('.play-btn');
                const equalizer = card.querySelector('.equalizer');
                const songTitle = card.querySelector('h3').textContent;
                const artist = card.querySelector('p').textContent;
               // ...inside initializeSongCards()...
playBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // Stop previously playing song if any
    if (currentlyPlaying && currentlyPlaying !== card) {
        const prevPlayBtn = currentlyPlaying.querySelector('.play-btn');
        const prevEqualizer = currentlyPlaying.querySelector('.equalizer');
        const prevAudio = currentlyPlaying.querySelector('audio');
        prevPlayBtn.innerHTML = '<i class="fas fa-play text-lg"></i>';
        prevEqualizer.classList.add('hidden');
        if (prevAudio) prevAudio.pause();
        prevAudio.currentTime = 0;
    }

    const audio = card.querySelector('audio');

    // Toggle play/pause for this song
    if (currentlyPlaying === card) {
        // Pause
        playBtn.innerHTML = '<i class="fas fa-play text-lg"></i>';
        equalizer.classList.add('hidden');
        nowPlayingBar.classList.remove('translate-y-0');
        nowPlayingBar.classList.add('translate-y-full');
        if (audio) audio.pause();
        currentlyPlaying = null;
    } else {
        // Play
        playBtn.innerHTML = '<i class="fas fa-pause text-lg"></i>';
        equalizer.classList.remove('hidden');
        currentSongElement.textContent = `${songTitle} - ${artist}`;
        nowPlayingBar.classList.remove('translate-y-full');
        nowPlayingBar.classList.add('translate-y-0');
        if (audio) audio.play();
        currentlyPlaying = card;
    }
});
            });
        }
        
        // Initialize search functionality
        function initializeSearch() {
            const searchInput = document.getElementById('search');
            const songCards = document.querySelectorAll('.song-card');
            
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase().trim();
                
                songCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const artist = card.querySelector('p').textContent.toLowerCase();
                    const tags = card.querySelector('.text-pink-400').textContent.toLowerCase();
                    
                    // Check if card matches search term
                    if (title.includes(searchTerm) || artist.includes(searchTerm) || tags.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }
        
        // Add event listener for "Add Our New Song" button
        document.addEventListener('DOMContentLoaded', function() {
            const addButton = document.querySelector('button:contains("Add Our New Song")');
            if (addButton) {
                addButton.addEventListener('click', function() {
                    // You could implement modal display here
                    alert('Soon you can add your special songs here! 💕');
                });
            }
        });
        
        // Fix for button selector in the previous function
        document.addEventListener('DOMContentLoaded', function() {
            const addButton = document.querySelector('.bg-pink-500.hover\\:bg-pink-600');
            if (addButton) {
                addButton.addEventListener('click', function() {
                    alert('Soon you can add your special songs here! 💕');
                });
            }
        });
        
        // Handle now playing bar controls
        document.addEventListener('DOMContentLoaded', function() {
            const playPauseBtn = document.querySelector('#now-playing .fa-pause').parentElement;
            const prevBtn = document.querySelector('#now-playing .fa-step-backward').parentElement;
            const nextBtn = document.querySelector('#now-playing .fa-step-forward').parentElement;
            
            playPauseBtn.addEventListener('click', function() {
                const icon = this.querySelector('i');
                if (icon.classList.contains('fa-pause')) {
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                    
                    // Pause currently playing song
                    if (currentlyPlaying) {
                        const playBtn = currentlyPlaying.querySelector('.play-btn');
                        playBtn.innerHTML = '<i class="fas fa-play text-lg"></i>';
                    }
                } else {
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                    
                    // Resume playing
                    if (currentlyPlaying) {
                        const playBtn = currentlyPlaying.querySelector('.play-btn');
                        playBtn.innerHTML = '<i class="fas fa-pause text-lg"></i>';
                    }
                }
            });
            
            prevBtn.addEventListener('click', function() {
                // Go to previous song functionality
                alert('Previous song functionality coming soon!');
            });
            
            nextBtn.addEventListener('click', function() {
                // Go to next song functionality
                alert('Next song functionality coming soon!');
            });
        });
                window.onload = function () {
                // If the current page is loaded for the first time
                // Redirect to song.html permanently
                if (!sessionStorage.getItem("visitedOnce")) {
                    sessionStorage.setItem("visitedOnce", "true");
                    window.location.href = "song.html";
                }
            };