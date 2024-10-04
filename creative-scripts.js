// Music player function
function playSong() {
    let audio = new Audio('your-song-file.mp3'); // Add the path to your audio file
    audio.play();
}

// Open the lightbox gallery
function openGallery(section) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');

    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => lightbox.remove(); // Close lightbox on click

    lightbox.appendChild(closeButton);

    // Dynamically add images based on the section
    for (let i = 1; i <= 5; i++) {
        const img = document.createElement('img');
        img.src = `img/${section}-image${i}.png`; // Ensure images are named properly
        img.alt = `${section} Image ${i}`;
        lightbox.appendChild(img);
    }

    document.body.appendChild(lightbox);
    lightbox.style.display = 'block'; // Show lightbox
}
