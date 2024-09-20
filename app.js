// app.js

// Function to toggle visibility of content sections
function toggleContent(id) {
    const element = document.getElementById(id);

    // Toggle the 'visible' class to show/hide content
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
    } else {
        element.classList.add('visible');
    }
}

// Simulate navigation to portfolio pages
function navigateToPage(event) {
    const link = event.target.getAttribute('data-link');
    alert(`Navigating to: ${link}`);
    // In the future, replace this with actual navigation logic
    // window.location.href = `portfolio/${link}.html`; // Example for linking to portfolio pages
}
