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
const AllQuestions = [
    // --- Multiple Choice ---
    {
        id: 1,
        type: "mcq",
        question: "What is the form of government of the United States?",
        options: ["Direct Democracy", "Autocracy", "Parliamentary Republic", "Federal Republic"],
        answer: "Federal Republic"
    },
    {
        id: 2,
        type: "mcq",
        question: "What is the supreme law of the land?",
        options: ["Declaration of Independence", "Amendment", "The constitution", "Articles of confederation"],
        answer: "The constitution"
    },
    {
        id: 3,
        type: "mcq",
        question: "The U.S. Constitution does not",
        options: ["Explain the functios of Government", "Protect the Citizens of the US", "Define the powers of government", "Include any amendments"],
        answer: "Include any amendments"
    },
    {
        id: 4,
        type: "mcq",
        question: "The U.S. Constitution starts with the words 'We the People.' what does 'We the People' not mean",
        options: ["The consent of the governed", "Only the people born in America", "Popular sovereignty", "people should govern themselves"],
        answer: "Only the people born in America"
    },
    {
        id: 5,
        type: "mcq",
        question: "How are changes made to the U.S Constitution",
        options: ["Popular vote", "Amendments", "26 State vote", "51 votes in the Senate"],
        answer: "Amendments"
    },
    {
        id: 6,
        type: "mcq",
        question: "Which answer best explains whom the Bill of Rights protect?",
        options: ["Right of Americans", "Right of the President", "Right of Senators", "Right of those in power"],
        answer: "Right of Americans"
    },
    {
        id: 7,
        type: "mcq",
        question: "How many amendments does the U.S Constitution have?",
        options: ["10", "23", "27", "19"],
        answer: "27"
    },
    {
        id: 8,
        type: "mcq",
        question: "What founding document said the Amwerican colonies were free from Britain",
        options: ["Declaration of Independence", "Magna Carta", "Mayflower Compact", "the Constitution"],
        answer: "Declaration of Independence"
    },

    // --- Short Answers ---
    {
        id: 9,
        type: "short",
        question: "Why is the Declaration of Independence important?",
        options: [],
        answer: "sets America free from British control"
    },
    {
        id: 10,
        type: "short",
        question: "Name two important ideas from the Declaration of Independence and the U.S Constitution",
        options: [],
        answer: "Equality, Liberty"
    },
    {
        id: 11,
        type: "short",
        question: "The words 'Life,Liberty and the pursui of Happiness' are in what founding document?",
        options: [],
        answer: "Declaration of Independence"
    },
    {
        id: 12,
        type: "short",
        question: "What is the Economic system of the United States?",
        options: [],
        answer: "Capitalism"
    },
    {
        id: 13,
        type: "short",
        question: "What is the rule of law?",
        options: [],
        answer: "Everyone must follow the law"
    },
    // --- True or False ---
    {
        id: 14,
        type: "tf",
        question: "Many documents influenced the U.S. Constitution including the 'The Iroquois Great Law of Peace.'",
        options: ["TRUE", "FALSE"],
        answer: "TRUE"
    },
    {
        id: 15,
        type: "tf",
        question: "There are three branches of goverment because even numbers would be a tie",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "checks and balances"
    },
    {
        id: 16,
        type: "tf",
        question: "One of the three branches of government is the Constitution",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "Executive"
    },
    {
        id: 17,
        type: "tf",
        question: "The President of the United States is in charge of the Executive branch of Government",
        options: ["TRUE", "FALSE"],
        answer: "TRUE"
    },
    {
        id: 18,
        type: "tf",
        question: "The part of the federal government that writes laws is the Judicial Branch",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "Congress"
    },
    {
        id: 19,
        type: "tf",
        question: "The two parts of the U.S Congress are the House of Commons and the Senate",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "Senate and House"
    },
    {
        id: 20,
        type: "tf",
        question: "One power of the Executive Branch is to enforce the law",
        options: ["TRUE", "FALSE"],
        answer: "TRUE"
    },
    // --- Fill-in-the-Blank (as 'short') ---
    {
        id: 21,
        type: "short",
        question: "There are ____ U.S senators",
        options: [],
        answer: "100"
    },
    {
        id: 22,
        type: "short",
        question: "A term for a U.S senator lasts ____ years",
        options: [],
        answer: "6"
    },
    {
        id: 23,
        type: "short",
        question: "_____ is one of your state's U.S. Senators now",
        options: [],
        answer: "Tina Smith"
    },
    {
        id: 24,
        type: "short",
        question: "There are ____ voting members in the House of Representatives",
        options: [],
        answer: "435"
    },
    {
        id: 25,
        type: "short",
        question: "A term for a member of the House of Representatives is ____ years",
        options: [],
        answer: "2"
    },
    // --- Short Answers ---
    {
        id: 26,
        type: "short",
        question: "Why do U.S representatives serve shorter terms than U.S senators?",
        options: [],
        answer: "To more closely follow pulic opinion"
    },
    {
        id: 27,
        type: "short",
        question: "How many senators does each state have?",
        options: [],
        answer: "2"
    },
    {
        id: 28,
        type: "short",
        question: "Why does each state have two senators?",
        options: [],
        answer: "Equal representation"
    },
    {
        id: 29,
        type: "short",
        question: "Name your U.S representative",
        options: [],
        answer: "Kelly Morrison"
    },
    {
        id: 30,
        type: "short",
        question: "What is the name of the Speaker of the House of Representatives now?",
        options: [],
        answer: "Mike Johnson"
    },
    {
        id: 31,
        type: "short",
        question: "Who does a U.S. Senator represent?",
        options: [],
        answer: "Citizens of their state"
    },
    {
        id: 32,
        type: "short",
        question: "Who elects U.S. senators?",
        options: [],
        answer: "Citizens from their state"
    },
    {
        id: 33,
        type: "short",
        question: "Who does a member of the House of Representatives represent?",
        options: [],
        answer: "Citizens in their district"
    },
    // --true or false
    {
        id: 34,
        type: "tf",
        question: "The President elects members of the house of Representatives",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "Citizens from their district elect representatives"
    },
    {
        id: 35,
        type: "tf",
        question: "Some states have more representatives than other staes because of higher populations",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "Citizens from their district"
    },
    {
        id: 36,
        type: "tf",
        question: "The President of the United States is elected for six years",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "4 years"
    },
    {
        id: 37,
        type: "tf",
        question: "The President of the Unites States can serve only two terms so he/she doesnt get too powerful",
        options: ["TRUE", "FALSE"],
        answer: "TRUE",
    },
    {
        id: 38,
        type: "tf",
        question: "Mike Pence is the name of the President of the United States now",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "Donald Trump"
    },
    {
        id: 39,
        type: "tf",
        question: "Kamala Harris is the name of the Vice President of the United States now",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "JD Vance"
    },
    // --- Multiple Choice ---
    {
        id: 40,
        type: "mcq",
        question: "If the president can no longer serve, who becomes president",
        options: ["Vice President", "Secretary of State", "Speacker of the House", "Secretary of Defense"],
        answer: "Vice President"
    },
    {
        id: 41,
        type: "mcq",
        question: "Which is not one power of the president",
        options: ["Sign laws", "Enforce laws", "Chief diplomat", "Makes laws"],
        answer: "Makes laws"
    },
    {
        id: 42,
        type: "mcq",
        question: "Who is Commander in Chief of the U.S. military?",
        options: ["Secretary of Defense", "President", "Vice President", "Secreatary of State"],
        answer: "President"
    },
    {
        id: 43,
        type: "mcq",
        question: "Who signs bills to become laws",
        options: ["Senators", "Congressmen", "President", "Vice President"],
        answer: "President"
    },
    {
        id: 44,
        type: "mcq",
        question: "Who vetoes bills?",
        options: ["Senators", "Congressmen", "President", "Vice President"],
        answer: "President"
    },
    {
        id: 45,
        type: "mcq",
        question: "Who appoints federal judges",
        options: ["Senators", "Congressmen", "President", "Vice President"],
        answer: "President"
    },
    {
        id: 46,
        type: "mcq",
        question: "The executive branch has many parts. Which is not one?",
        options: ["President", "Cabinet", "Senate", "Federal Agencies"],
        answer: "Senate"
    },
    // short answer
    {id: 47,
        type: "short",
        question: "What does the President's Cabinet do?",
        options: [],
        answer: "Advises the President"
    },
    {id: 48,
        type: "short",
        question: "What are two Cabinet-level positions?",
        options: [],
        answer: "Secretary of State and Vice President"
    },
    {id: 49,
        type: "short",
        question: "Why is the Electoral College important?",
        options: [],
        answer: "It decides who is elected president"
    },
    {id: 50,
        type: "short",
        question: "What is one part of the judicial branch?",
        options: [],
        answer: "Supreme Court"
    },
    {id: 51,
        type: "short",
        question: "What does the judicial branch do?",
        options: [],
        answer: "Reviews laws"
    },
    {id: 52,
        type: "short",
        question: "What is the highest court in the United States?",
        options: [],
        answer: "Supreme Court"
    },
    // multiple choice
    {
        id: 53,
        type: "mcq",
        question: "How many seats are on the Supreme Court?",
        options: ["5", "9", "12", "15"],
        answer: "9"
    },
    {
        id: 54,
        type: "mcq",
        question: "How many Supreme Court Justices are usually needed ot decide a case?",
        options: ["5", "9", "12", "15"],
        answer: "5"
    },
    {
        id: 55,
        type: "mcq",
        question: "How long do Supreme Courts justices serve",
        options: ["Three terms", "Four terms", "Five terms", "For life"],
        answer: "For life"
    },
    // true or false
    {
        id: 56,
        type: "tf",
        question: "Supreme Court justices serve for life to limit political influence",
        options: ["TRUE", "FALSE"],
        answer: "TRUE",
    },
    {
        id: 57,
        type: "tf",
        question: "The Chief Justice of the United states is Clarence Thomas",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "John Roberts"
    },
    {
        id: 58,
        type: "tf",
        question: "Education policy is only for the federal government",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "Print paper money"
    },
    {
        id: 59,
        type: "tf",
        question: "Printing money is only for the states",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "Provide education"
    },
    {
        id: 60,
        type: "tf",
        question: "The purpose of the 10th Amendment is freedom of speech",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
        explanation: "power not given to federal, belongs to the states or the people"
    },
    // fill in the blank
    {
        id: 61,
        type: "short",
        question: "_____ is the governor of your state now",
        options: [],
        answer: "Tim Walz"
    },
    {
        id: 62,
        type: "short",
        question: "_____ is the captial of your state",
        options: [],
        answer: "Saint Paul"
    },
    // short
    {
        id: 63,
        type: "short",
        question: "There are four amendments to the U.S Constitution about who can vote. describe one of them.",
        options: [],
        answer: "Any citizen can vote"
    },
    {
        id: 64,
        type: "short",
        question: "Who can vote in federal elections, run for federal office, and serve on a jury in the United States",
        options: [],
        answer: "U.S citizens"
    },
    {
        id: 65,
        type: "short",
        question: "What are three rights o everyone living in hte United States",
        options: [],
        answer: "Freedom of speech, assembly and religion"
    },
    {
        id: 66,
        type: "short",
        question: "What do we show loyalty to when we say the Pledge of Allegiance?",
        options: [],
        answer: "teh U.S flag"
    },
    {
        id: 67,
        type: "short",
        question: "Name two promises that new citizens make in the Oath of Allegiance",
        options: [],
        answer: "loyalty to the U.S, defend teh constitution"
    },
    {
        id: 68,
        type: "short",
        question: "How can people become United States citizens?",
        options: [],
        answer: "Naturalize"
    },
    {
        id: 69,
        type: "short",
        question: "What are two examples of civic participation in the United States?",
        options: [],
        answer: "Run for office, join a civic group"
    },
    {
        id: 70,
        type: "short",
        question: "What is one way Americans can serve their country?",
        options: [],
        answer: "Pay taxes"
    },
    {
        id: 71,
        type: "short",
        question: "Why is it important to pay fereal taxes?",
        options: [],
        answer: "Required by law"
    },
    {
        id: 72,
        type: "short",
        question: "it is important for all men age 18 through 25 to register for the selective Service. Name one reason why",
        options: [],
        answer: "Required by law"
    },
    // True or False
    {
        id: 73,
        type: "tf",
        question: "The colonist came to America for economic opportunity",
        options: ["TRUE","FALSE"],
        answer: "TRUE"
    },
    {
        id: 74,
        type: "tf",
        question: "Africans lived in America before the Europeans arrived",
        options: ["TRUE","FALSE"],
        answer: "FALSE",
        explanation: "Native Americans"
    },
    {
        id: 75,
        type: "tf",
        question: "Africans were taken and sold as slaves",
        options: ["TRUE","FALSE"],
        answer: "TRUE"
    },
    // multiple choice
    {
        id: 76,
        type: "mcq",
        question: "What war did the Americans Fight to win independence from Britain?",
        options: ["American Revolution", "War of 1812", "Civil War", "Vietnam War"],
        answer: "American Revolution"
    },
    {
        id: 77,
        type: "mcq",
        question: "Which was not a reason why the Americans declared independence from Britain",
        options: ["Taxation", "Quartering", "Religious Freedom", "Stamp Act"],
        answer: "Religious Freedom"
    },
    {
        id: 78,
        type: "mcq",
        question: "Who wrote the Declaration of Independence?",
        options: ["Thomas Jefferson", "George Washington", "James Madison", "Alexander Hamilton"],
        answer: "Thomas Jefferson"
    },
    {
        id: 79,
        type: "mcq",
        question: "When was the Declaration of Independence adopted",
        options: ["07/02/1776", "07/04/1776", "07/04/1796", "07/04/1619"],
        answer: "07/04/1776"
    },
    // short
    {
        id: 80,
        type: "short",
        question: "The American Revolution had many important events. Name one.",
        options: [],
        answer: ""
    },
    {
        id: 81,
        type: "short",
        question: "There were 13 original states. Name five",
        options: [],
        answer: ""
    },
    {
        id: 82,
        type: "short",
        question: "What founding documetn was written in 1787",
        options: [],
        answer: ""
    },
    {
        id: 83,
        type: "short",
        question: "The Federalist Papers supported the passage of the U.S Constitution. Name one of the writers",
        options: [],
        answer: ""
    },
    {
        id: 84,
        type: "short",
        question: "Why were the Federalist Papers important?",
        options: [],
        answer: ""
    },
    {
        id: 85,
        type: "short",
        question: "Benjamin Franklin is famous for many things. Name one.",
        options: [],
        answer: ""
    },
    {
        id: 86,
        type: "short",
        question: "George Washington is famous for many things. Name one.",
        options: [],
        answer: ""
    },
    {
        id: 87,
        type: "short",
        question: "Thomas Jefferson is famous for many things. Name one.",
        options: [],
        answer: ""
    },
    {
        id: 88,
        type: "short",
        question: "James Madison is famous for many things. Name one.",
        options: [],
        answer: ""
    },
    {
        id: 89,
        type: "short",
        question: "Alexander Hamilton is famous for many things. Name one.",
        options: [],
        answer: ""
    },
    // true or false
    {
        id: 90,
        type: "tf",
        question: "The Unites States bought Florida from France in 1803",
        options: ["TRUE","FALSE"],
        answer: ""
    },
    {
        id: 91,
        type: "tf",
        question: "The Civil War was fought by hte United States in 1800s",
        options: ["TRUE","FALSE"],
        answer: ""
    },
    {
        id: 92,
        type: "tf",
        question: "The War of 1812 was between the North and the South.",
        options: ["TRUE","FALSE"],
        answer: ""
    },
    {
        id: 93,
        type: "tf",
        question: "The Civil War included the Battle of Gettysburg",
        options: ["TRUE","FALSE"],
        answer: ""
    },
    {
        id: 94,
        type: "tf",
        question: "Abraham Lincoln is famous for preserving the Union",
        options: ["TRUE","FALSE"],
        answer: ""
    },
    // short
    {
        id: 95,
        type: "short",
        question: "What did the Emancipation Proclamation do?",
        options: [],
        answer: ""
    },
    {
        id: 96,
        type: "short",
        question: "what U.S war ended slavery?",
        options: [],
        answer: ""
    },
    {
        id: 97,
        type: "short",
        question: "What amendment gives citizenship to all persons born in the United States?",
        options: [],
        answer: ""
    },
    {
        id: 98,
        type: "short",
        question: "when did all men get the right to vote?",
        options: [],
        answer: ""
    },
    {
        id: 99,
        type: "short",
        question: "Name on leader of the Women's right movement in the 1800s",
        options: [],
        answer: ""
    },
    // multiple choice
    {
        id: 100,
        type: "mcq",
        question: "Name one war fought by the United States in the 1900s",
        options: ["Civil War", "World War II", "French and Indian War", "Revolutionary War"],
        answer: "World War II"
    },
    {
        id: 101,
        type: "mcq",
        question: "Why did tHe United States enter World War I?",
        options: ["Impressment of sailors", "Pearl Harbor", "Germans sinking US ships", "Taxation"],
        answer: "Germans sinking US ships"
    },
    {
        id: 102,
        type: "mcq",
        question: "when did all women get the right to vote?",
        options: ["1918", "1919", "1920", "1933"],
        answer: "1920"
    },
    {
        id: 103,
        type: "mcq",
        question: "What was the longest economic recession in modern history",
        options: ["Great Recession", "The Great Migration", "Great Depression", "The Great Decline"],
        answer: "Great Depression"
    },
    {
        id: 104,
        type: "mcq",
        question: "When did the Great Depression start?",
        options: ["1922", "1929", "1933", "1941"],
        answer: "1929"
    },
    {
        id: 105,
        type: "mcq",
        question: "Who was president during the Great Depression and World War II?",
        options: ["Roosevelt", "Eisenhower", "Washington", "Truman"],
        answer: "Roosevelt"
    },
    {
        id: 106,
        type: "mcq",
        question: "Why did the United States enter World War II?",
        options: ["Impressment of sailors", "Pearl Harbor", "Germanssinking US ships", "Taxation"],
        answer: "Pearl Harbor"
    },
    // short
    {
        id: 107,
        type: "short",
        question: "Dwight Eisnhower is famous for many things. Name one.",
        options: [],
        answer: ""
    },
    {
        id: 108,
        type: "short",
        question: "Who was the United States' main rival duing the Cold War?",
        options: [],
        answer: ""
    },
    {
        id: 109,
        type: "short",
        question: "During the Cold War, what was the main concern of the United States?",
        options: [],
        answer: ""
    },
    {
        id: 110,
        type: "short",
        question: "Why did the United States enter the Korean war?",
        options: [],
        answer: ""
    },
    {
        id: 111,
        type: "short",
        question: "Why did the United States enter the vietnams war?",
        options: [],
        answer: ""
    },
    {
        id: 112,
        type: "short",
        question: "What did the Civil Rights movement do?",
        options: [],
        answer: ""
    },
    {
        id: 113,
        type: "short",
        question: "Martin Luther King Jr. is famous for many things. Name one?",
        options: [],
        answer: ""
    },
    {
        id: 114,
        type: "short",
        question: "Why did the United States enter the Persian Gulf War?",
        options: [],
        answer: ""
    },
    // true or false
    {
        id: 115,
        type: "tf",
        question: "Terrorist bombing the World Trade Center happened on September 11, 2001",
        options: ["TRUE","FALSE"],
        answer: "TRUE"
    },
    {
        id: 116,
        type: "tf",
        question: "The Iraq War was after the September 11, 2001 attack",
        options: ["TRUE","FALSE"],
        answer: ""
    },
    {
        id: 117,
        type: "tf",
        question: "The Zulu is one American Indian tribe in the United States",
        options: ["TRUE","FALSE"],
        answer: ""
    },
    {
        id: 118,
        type: "tf",
        question: "The airplane is an example of an American Innovation",
        options: ["TRUE","FALSE"],
        answer: ""
    },
    {
        id: 119,
        type: "tf",
        question: "New York City is the Capital of the United States",
        options: ["TRUE","FALSE"],
        answer: ""
    },
    {
        id: 120,
        type: "tf",
        question: "The Statue of Liberty is located in New York City?",
        options: ["TRUE","FALSE"],
        answer: ""
    },
    {
        id: 121,
        type: "tf",
        question: "The flag has 13 stripes for each state that seceded from the Union?",
        options: ["TRUE","FALSE"],
        answer: ""
    },
    // short
    {
        id: 122,
        type: "short",
        question: "Why does the flag have 50 stars?",
        options: [],
        answer: ""
    },
    {
        id: 123,
        type: "short",
        question: "What is the name of the national anthem?",
        options: [],
        answer: ""
    },
    {
        id: 124,
        type: "short",
        question: "the Nation's first motto was 'E Pluribus unum.' what does that mean?",
        options: [],
        answer: ""
    },
    {
        id: 125,
        type: "short",
        question: "What is Independence Day?",
        options: [],
        answer: ""
    },
    {
        id: 126,
        type: "short",
        question: "Name three national U.S holidays",
        options: [],
        answer: ""
    },
    {
        id: 127,
        type: "short",
        question: "What is Memorial day?",
        options: [],
        answer: ""
    },
    {
        id: 128,
        type: "short",
        question: "What is Veterans Day?",
        options: [],
        answer: ""
    },
];

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
    }, 2500); // 2.5 second delay
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

// ** NEW **: Add listener for the new explanation button
submitExplanationBtn.addEventListener('click', checkExplanation);

// --- 9. Initial Load ---
loadQuestion();