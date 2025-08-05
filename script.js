// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Section navigation
const navItems = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show selected section
        const sectionId = item.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');

        // Close mobile menu if open
        navLinks.classList.remove('active');

        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Form submission
const form = document.getElementById('volunteerForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will contact you soon.');
    form.reset();
});