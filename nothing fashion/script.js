// Smooth scrolling effect for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const target = document.querySelector(this.getAttribute('href')); // Find the target element
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth' // Smooth scrolling effect
            });
        }

        // If on mobile, hide the nav menu after clicking a link
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active'); // Hide the nav menu
            backButton.style.display = 'none'; // Hide the back button
            toggleButton.style.display = 'block'; // Show the toggle button
        }
    });
});

// Mobile navigation toggle
const toggleButton = document.querySelector('.toggle-button');
const backButton = document.querySelector('.back-button');
const navLinks = document.querySelector('.nav-links');

// Show nav menu and back button, hide toggle button
toggleButton.addEventListener('click', () => {
    navLinks.classList.add('active'); // Show the nav menu
    toggleButton.style.display = 'none'; // Hide the toggle button
    backButton.style.display = 'block'; // Show the back button
});

// Hide nav menu and show toggle button, hide back button
backButton.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Hide the nav menu
    backButton.style.display = 'none'; // Hide the back button
    toggleButton.style.display = 'block'; // Show the toggle button
});
