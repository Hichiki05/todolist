document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the slider for both sections
    function initSlider(sliderSelector) {
        const slider = document.querySelector(sliderSelector);
        const slides = slider.querySelectorAll(".slides img");
        let currentSlide = 0;
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? 1 : 0;
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        // Initialize the slider
        showSlide(currentSlide);
        setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    // Initialize sliders
    initSlider("#intro .slider");
    initSlider("#about .slider");
});
