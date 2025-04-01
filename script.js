document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us. we will reach to you as soon as possible');
});
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Show current slide
    slides[slideIndex].style.display = "block";
}

// Function to move to the next or previous slide
function plusSlides(n) {
    let slides = document.querySelectorAll(".slide");
    slideIndex += n;

    // Loop back to the first slide if reached the end
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Go to the first slide
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Go to the last slide
    }

    showSlides(); // Show updated slide
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", () => {
    showSlides(); // Initial display
    setInterval(() => plusSlides(1), 3000); // Auto-slide every 3 seconds
});

// Smooth scroll for anchor links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); // Get the section ID
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjusted to avoid navbar overlap
            behavior: 'smooth'
        });
    });
});