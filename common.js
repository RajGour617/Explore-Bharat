// common.js

// Function to read score from localStorage and update the display
function updateScoreDisplay() {
    const userScore = localStorage.getItem('quizScore') || 0; // Agar score nahi hai to 0 maanein
    const scoreElement = document.getElementById('user-score'); 
    if (scoreElement) {
        scoreElement.textContent = userScore;
    }
}

// 1. Jab page pehli baar load ho, tab score update karein
document.addEventListener('DOMContentLoaded', updateScoreDisplay);

// यह कोड सुनिश्चित करता है कि HTML पूरी तरह लोड हो चुका है
document.addEventListener('DOMContentLoaded', () => {

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    // अगर पेज पर hamburger बटन और nav-links मौजूद हैं, तभी यह कोड चलेगा
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            // nav-links और hamburger पर 'active' क्लास को जोड़ें/हटाएँ
            navLinks.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });
    }

});

// 2. Jab user is browser tab par waapas aaye, tab bhi score update karein
window.addEventListener('focus', updateScoreDisplay);

