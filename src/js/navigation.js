// Function to toggle the navigation menu on mobile
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Event listener for the navigation toggle button
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = `
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    `;
    navToggle.addEventListener('click', toggleMenu);

    const navbar = document.querySelector('.navbar');
    navbar.appendChild(navToggle);
});
