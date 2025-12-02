// --- 1. Get DOM Elements ---
const questionEl = document.getElementById("question-el");
const optionsUl = document.getElementById("options-ul");
const quizContainer = document.getElementById("quiz-container");
const shortAnswerContainer = document.getElementById("short-answer-container");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-answer");
const feedbackEl = document.getElementById("feedback-el");

// ** NEW **: Get the new explanation elements
const explanationContainer = document.getElementById("explanation-container");
const explanationInput = document.getElementById("explanation-input");
const submitExplanationBtn = document.getElementById("submit-explanation");

// Map 'li' elements (A, B, C, D)
const optionElements = {
    A: document.getElementById("A"),
    B: document.getElementById("B"),
    C: document.getElementById("C"),
    D: document.getElementById("D"),
};
const optionKeys = ['A', 'B', 'C', 'D'];


// --- 2. Refactored Questions Array ---
// Use the 'explanation' field for "FALSE" answers


// --- 3. Global State ---
const validQuestions = AllQuestions.filter(q => q.question);
let currentQuestionIndex = 0;
let score = 0;

// --- 4. loadQuestion() Function (MODIFIED) ---
function loadQuestion() {
    if (currentQuestionIndex >= validQuestions.length) {
        quizContainer.innerHTML = `<h2>Quiz Complete!</h2><p>Your final score is ${score} out of ${validQuestions.length}.</p>`;
        return;
    }

    const currentQuestion = validQuestions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    feedbackEl.textContent = '';

    // ** MODIFIED **: Hide all special containers
    shortAnswerContainer.style.display = 'none';
    explanationContainer.style.display = 'none';
    explanationInput.value = '';

    switch (currentQuestion.type) {
        case 'short':
            optionsUl.style.display = 'none';
            shortAnswerContainer.style.display = 'block';
            answerInput.value = '';
            answerInput.focus();
            break;

        case 'mcq':
        case 'tf':
            optionsUl.style.display = 'block';
            Object.values(optionElements).forEach(el => el.style.display = 'none');
            currentQuestion.options.forEach((optionText, index) => {
                const optionKey = optionKeys[index];
                const optionEl = optionElements[optionKey];
                if (optionEl) {
                    optionEl.textContent = optionText;
                    optionEl.style.display = 'block';
                }
            });
            break;
    }
}

// --- 5. checkAnswer() Function (HEAVILY MODIFIED) ---
function checkAnswer(userAnswer) {
    const currentQuestion = validQuestions[currentQuestionIndex];
    let selectedOptionEl = null;
    let selectedText = "";
    let isCorrect = false;

    // Determine what was selected and if it's correct
    if (currentQuestion.type === 'short') {
        selectedText = userAnswer.trim();
        isCorrect = selectedText.toLowerCase() === currentQuestion.answer.toLowerCase();
    } else {
        selectedOptionEl = optionElements[userAnswer];
        if (selectedOptionEl) {
            selectedText = selectedOptionEl.textContent;
            isCorrect = selectedText === currentQuestion.answer;
        }
    }

    // --- ** NEW **: Special Path for "Correct False" Answers ---
    // If it's a T/F, the answer is "FALSE", the user CHOSE "FALSE",
    // and it requires an explanation...
    if (currentQuestion.type === 'tf' &&
        isCorrect && // This means they correctly chose "FALSE"
        currentQuestion.explanation) {

        // 1. Give partial feedback
        feedbackEl.textContent = "Correct, it's false. Now, provide the correction.";
        feedbackEl.style.color = 'blue';

        // 2. Show the explanation input field
        explanationContainer.style.display = 'block';
        explanationInput.focus();

        // 3. Disable all other inputs
        optionsUl.style.pointerEvents = 'none';
        submitBtn.disabled = true;

        // 4. STOP here. Do not proceed to the next question.
        // We wait for the user to click "submit-explanation".
        return;
    }
    // --- End of Special Path ---

    // --- Normal Feedback Path (for all other answers) ---
    if (isCorrect) {
        score++;
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = 'green';
        if (selectedOptionEl) {
            selectedOptionEl.style.backgroundColor = 'lightgreen';
        }
    } else {
        // Build the feedback message
        let feedback = `Incorrect. The correct answer is: ${currentQuestion.answer}`;
        // Note: We don't show the explanation here, as it's part of the check
        feedbackEl.textContent = feedback;
        feedbackEl.style.color = 'darkred';

        if (selectedOptionEl) {
            selectedOptionEl.style.backgroundColor = 'lightcoral';
            const correctOptionKey = optionKeys.find(key => {
                const el = optionElements[key];
                return el && el.textContent === currentQuestion.answer;
            });
            if (correctOptionKey) {
                optionElements[correctOptionKey].style.backgroundColor = 'lightgreen';
            }
        }
    }

    // Move to the next question
    proceedToNextQuestion();
}

// --- 6. ** NEW **: Explanation Check Function ---
function checkExplanation() {
    const currentQuestion = validQuestions[currentQuestionIndex];
    const userExplanation = explanationInput.value.trim().toLowerCase();
    const correctExplanation = currentQuestion.explanation.toLowerCase();

    // Check if the explanation matches
    if (userExplanation === correctExplanation) {
        // Correct! Add to score.
        score++;
        feedbackEl.textContent = "Correct! That's exactly why.";
        feedbackEl.style.color = 'green';
    } else {
        // Incorrect explanation. No point, but give feedback.
        feedbackEl.textContent = `Incorrect. The correct explanation is: ${currentQuestion.explanation}`;
        feedbackEl.style.color = 'darkred';
    }

    // Now, move to the next question
    proceedToNextQuestion();
}

// --- 7. ** NEW **: proceedToNextQuestion() Function ---
// This logic was extracted from checkAnswer so it can be reused.
function proceedToNextQuestion() {
    // Disable all inputs
    optionsUl.style.pointerEvents = 'none';
    submitBtn.disabled = true;
    answerInput.disabled = true;
    submitExplanationBtn.disabled = true; // Disable new button too

    setTimeout(() => {
        currentQuestionIndex++;

        // Reset styles
        Object.values(optionElements).forEach(el => {
            el.style.backgroundColor = '';
        });

        // Re-enable inputs
        optionsUl.style.pointerEvents = 'auto';
        submitBtn.disabled = false;
        answerInput.disabled = false;
        submitExplanationBtn.disabled = false;

        // Load the next question
        loadQuestion();
    }, 3000); // 3 second delay
}

// --- 8. Event Listeners ---
optionsUl.addEventListener('click', (event) => {
    const clickedLi = event.target.closest('li');
    if (clickedLi) {
        checkAnswer(clickedLi.id);
    }
});

submitBtn.addEventListener('click', () => {
    checkAnswer(answerInput.value);
});

// Allow pressing "Enter" key to submit the answer
answerInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents accidental page refresh
        submitBtn.click();      // Simulates clicking the submit button
    }
});

// Add listener for the new explanation button
submitExplanationBtn.addEventListener('click', checkExplanation);

// --- 9. Initial Load ---
loadQuestion();