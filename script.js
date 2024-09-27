document.getElementById('playSong').addEventListener('click', function() {
    const audio = new Audio('https://www.example.com/happy-birthday-song.mp3'); // Replace with actual path to your MP3 file
    audio.play();
});
