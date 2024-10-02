// Open Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}


// Function to open a project modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close a project modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Function to open the expanded image modal
function expandImage(img) {
    var modal = document.getElementById("image-modal");
    var expandedImage = document.getElementById("expanded-image");
    modal.style.display = "block";
    expandedImage.src = img.src;
}

// Function to close the expanded image modal
function closeImageModal() {
    document.getElementById("image-modal").style.display = "none";
}


const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

