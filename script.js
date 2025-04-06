// Animated text changing between professions
const professionElement = document.getElementById('profession');
const professions = ['Software Developer', 'Cloud Engineer'];
let currentIndex = 0;

function changeProfession() {
    // Fade out
    professionElement.style.opacity = 0;
    
    setTimeout(() => {
        // Change text
        currentIndex = (currentIndex + 1) % professions.length;
        professionElement.textContent = professions[currentIndex];
        
        // Fade in
        professionElement.style.opacity = 1;
    }, 1000);
}

// Initial setup
professionElement.style.transition = 'opacity 1s ease';

// Change profession every 3 seconds
setInterval(changeProfession, 4000);