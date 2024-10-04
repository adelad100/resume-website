// Music player function
function playSong() {
    let audio = new Audio('your-song-file.mp3'); // Add the path to your audio file
    audio.play();
}

// Open the gallery
function openGallery(galleryId) {
    document.getElementById(galleryId).style.display = 'block';
}

// Close the gallery
function closeGallery(galleryId) {
    document.getElementById(galleryId).style.display = 'none';
}
