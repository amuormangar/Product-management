document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-button');
    const reviews = document.querySelectorAll('.reviews');
    let currentIndex = 0;
    
    reviews[currentIndex].classList.add('active');
    
    nextButton.addEventListener('click', () => {
        reviews[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % reviews.length;
        reviews[currentIndex].classList.add('active');
        updateButtonStates();
    });
    
    prevButton.addEventListener('click', () => {
        reviews[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        reviews[currentIndex].classList.add('active');
        updateButtonStates();
    });
    
    function updateButtonStates() {
    }
    
    updateButtonStates();
});