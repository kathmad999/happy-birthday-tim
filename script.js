// Play the birthday song
document.getElementById('playSong').addEventListener('click', function() {
    const audio = new Audio('happy-birthday-song.mp3'); // Replace with the correct path to your mp3 file
    audio.play();
});

// Create 35 balloons
const balloonContainer = document.getElementById('balloonContainer');
for (let i = 0; i < 35; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * 100}%`; // Random horizontal position
    balloon.style.animationDuration = `${5 + Math.random() * 5}s`; // Random duration for rise
    balloonContainer.appendChild(balloon);
}
