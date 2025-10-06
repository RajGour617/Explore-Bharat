// quiz.js (REPLACE ALL EXISTING CODE WITH THIS)
document.addEventListener('DOMContentLoaded', () => {
    const quizHeader = document.getElementById('quiz-header');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const feedbackArea = document.getElementById('feedback-area');

    const QUIZ_QUESTIONS = {
        "Madhya Pradesh": [
            { question: "Which city in MP is known as the 'City of Lakes'?", options: ["Indore", "Gwalior", "Bhopal", "Jabalpur"], answer: "Bhopal" },
            { question: "The famous Mahakaleshwar Jyotirlinga is located in which city?", options: ["Indore", "Ujjain", "Bhopal", "Omkareshwar"], answer: "Ujjain" },
            { question: "Which national park in MP is famous for its tigers?", options: ["Panna", "Satpura", "Kanha", "Bandhavgarh"], answer: "Bandhavgarh" },
            { question: "The Khajuraho temples are famous for their:", options: ["Rock-cut caves", "Intricate carvings", "Tall spires", "Golden domes"], answer: "Intricate carvings" },
            { question: "What is the traditional folk dance of the Malwa region of MP?", options: ["Ghoomar", "Bhangra", "Matki Dance", "Garba"], answer: "Matki Dance" },
            { question: "Which river is known as the lifeline of Madhya Pradesh?", options: ["Ganges", "Yamuna", "Narmada", "Tapti"], answer: "Narmada" },
            { question: "Sanchi Stupa, a UNESCO World Heritage site, is associated with which religion?", options: ["Hinduism", "Jainism", "Buddhism", "Sikhism"], answer: "Buddhism" },
            { question: "What is the famous street food of Indore?", options: ["Vada Pav", "Poha-Jalebi", "Dosa", "Chole Bhature"], answer: "Poha-Jalebi" }
        ],
        // Aap yahan aur states ke questions add kar sakte hain
        "Default": [
             { question: "Which monument is a symbol of love in India?", options: ["Qutub Minar", "Hawa Mahal", "Taj Mahal", "India Gate"], answer: "Taj Mahal" },
             { question: "Which is the festival of colors?", options: ["Diwali", "Holi", "Onam", "Eid"], answer: "Holi" },
             { question: "Ghoomar is a traditional folk dance of which state?", options: ["Gujarat", "Punjab", "Rajasthan", "Assam"], answer: "Rajasthan" },
             { question: "Kathakali is a classical dance form from which state?", options: ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Karnataka"], answer: "Kerala" },
             { question: "Which of these is a famous dish from Punjab?", options: ["Dal Baati", "Sarson da Saag", "Poha", "Dhokla"], answer: "Sarson da Saag" }
        ]
    };

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        const lastVisitedState = localStorage.getItem('lastVisitedState') || 'Default';
        quizHeader.textContent = `Cultural Quiz: ${lastVisitedState}`;

        let questionsForState = QUIZ_QUESTIONS[lastVisitedState] || QUIZ_QUESTIONS['Default'];

        // Shuffle and pick 5 questions
        currentQuestions = questionsForState.sort(() => 0.5 - Math.random()).slice(0, 5);

        currentQuestionIndex = 0;
        score = 0;
        nextBtn.style.display = 'none';
        showQuestion();
    }

    function showQuestion() {
        feedbackArea.textContent = '';
        const currentQuestion = currentQuestions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectAnswer(button, option, currentQuestion.answer));
            optionsContainer.appendChild(button);
        });
    }

    function selectAnswer(button, selectedOption, correctAnswer) {
        // Disable all option buttons
        document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

        if (selectedOption === correctAnswer) {
            button.classList.add('correct');
            feedbackArea.textContent = "Correct Answer!";
            score++;
        } else {
            button.classList.add('incorrect');
            feedbackArea.textContent = `Wrong! The correct answer is ${correctAnswer}.`;
        }
        nextBtn.style.display = 'block';
    }

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
            nextBtn.style.display = 'none';
        } else {
            endQuiz();
        }
    });
   function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    
    // Sunishchit karein ki yeh line bilkul aisi hai
    localStorage.setItem('quizScore', score); 
}
    function endQuiz() {
        questionText.textContent = `Quiz Finished! You scored ${score} out of ${currentQuestions.length}.`;
        optionsContainer.innerHTML = '';
        nextBtn.style.display = 'none';

        if (score >= 3) { // Example: 3 se zyada score par points milenge
            const pointsEarned = 5;
            feedbackArea.innerHTML = `Congratulations! You've earned <b>${pointsEarned} points</b>!`;
            // Yeh function main script.js se aayega
            if (window.addPoints) {
               window.addPoints(pointsEarned, `You earned ${pointsEarned} points from the quiz!`);
            }
        } else {
            feedbackArea.textContent = "Good try! Explore more to learn about India's culture.";
        }
    }

    startQuiz();
    
    
});