const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let questions = [];
let badges = [];
let currentQuestionIndex = 0;
let score = 0;

async function loadQuizData() {
    try {
        const [questionsResponse, badgesResponse] = await Promise.all([
            fetch('data/quiz.json'),
            fetch('data/badges.json')
        ]);
        const questionsData = await questionsResponse.json();
        const badgesData = await badgesResponse.json();
        questions = questionsData.questions;
        badges = badgesData.badges;
        startQuiz();
    } catch (error) {
        console.error('Error loading quiz data:', error);
    }
}

function startQuiz() {
    startButton.classList.add('hidden');
    resultContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.innerText = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
    }

    Array.from(optionsContainer.children).forEach(button => {
        if (button.innerText === question.answer) {
            button.classList.add('correct');
        } else if (button.innerText === selectedOption) {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.innerText = `${score} / ${questions.length}`;
    saveScoreToFirebase(score);
    checkAndAwardBadges(score, questions.length);
}

async function saveScoreToFirebase(newScore) {
    const user = firebase.auth().currentUser;
    if (user) {
        const userRef = firebase.firestore().collection('users').doc(user.uid);
        try {
            const doc = await userRef.get();
            if (doc.exists) {
                const existingScore = doc.data().quizScore || 0;
                if (newScore > existingScore) {
                    await userRef.update({ quizScore: newScore });
                    console.log('Score updated successfully!');
                }
            } else {
                // This case should ideally not happen if users are created at signup
                await userRef.set({ quizScore: newScore }, { merge: true });
            }
        } catch (error) {
            console.error('Error saving score:', error);
        }
    }
}

startButton.addEventListener('click', loadQuizData);
async function checkAndAwardBadges(score, totalQuestions) {
    const user = firebase.auth().currentUser;
    if (user) {
        // Award 'First Quiz' badge
        awardBadge('first_quiz');

        // Award 'Quiz Master' badge for a perfect score
        if (score === totalQuestions) {
            awardBadge('quiz_master');
        }
    }
}

async function awardBadge(badgeId) {
    const user = firebase.auth().currentUser;
    if (user) {
        const userBadgeRef = firebase.firestore().collection('user_badges').doc(`${user.uid}_${badgeId}`);
        try {
            const doc = await userBadgeRef.get();
            if (!doc.exists) {
                await userBadgeRef.set({
                    userId: user.uid,
                    badgeId: badgeId,
                    awardedAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                console.log(`Badge ${badgeId} awarded!`);
            }
        } catch (error) {
            console.error(`Error awarding badge ${badgeId}:`, error);
        }
    }
}

restartButton.addEventListener('click', startQuiz);
