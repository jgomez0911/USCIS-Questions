const AllQuestions = [
    // --- AMERICAN GOVERNMENT ---
    // A: Principles of American Democracy
    {
        id: 1,
        type: "short",
        question: "What is the supreme law of the land?",
        options: [],
        answer: "The Constitution"
    },
    {
        id: 2,
        type: "short",
        question: "What does the Constitution do?",
        options: [],
        answer: "Sets up the government"
    },
    {
        id: 3,
        type: "short",
        question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
        options: [],
        answer: "We the People"
    },
    {
        id: 4,
        type: "short",
        question: "What is an amendment?",
        options: [],
        answer: "A change or addition to the Constitution"
    },
    {
        id: 5,
        type: "short",
        question: "What do we call the first ten amendments to the Constitution?",
        options: [],
        answer: "The Bill of Rights"
    },
    {
        id: 6,
        type: "short",
        question: "What is one right or freedom from the First Amendment?",
        options: [],
        answer: "Speech"
    },
    {
        id: 7,
        type: "short",
        question: "How many amendments does the Constitution have?",
        options: [],
        answer: "27"
    },
    {
        id: 8,
        type: "short",
        question: "What did the Declaration of Independence do?",
        options: [],
        answer: "Announced our independence from Great Britain"
    },
    {
        id: 9,
        type: "short",
        question: "What are two rights in the Declaration of Independence?",
        options: [],
        answer: "Life and liberty"
    },
    {
        id: 10,
        type: "short",
        question: "What is freedom of religion?",
        options: [],
        answer: "practice any religion, or not"
    },
    {
        id: 11,
        type: "short",
        question: "What is the economic system in the United States?",
        options: [],
        answer: "Capitalist economy"
    },
    {
        id: 12,
        type: "short",
        question: "What is the 'rule of law'?",
        options: [],
        answer: "Everyone must follow the law."
    },
    // B: System of Government
    {
        id: 13,
        type: "short",
        question: "Name one branch or part of the government.",
        options: [],
        answer: "Congress"
    },
    {
        id: 14,
        type: "short",
        question: "What stops one branch of government from becoming too powerful?",
        options: [],
        answer: "Checks and balances"
    },
    {
        id: 15,
        type: "short",
        question: "Who is in charge of the executive branch?",
        options: [],
        answer: "The President"
    },
    {
        id: 16,
        type: "short",
        question: "Who makes federal laws?",
        options: [],
        answer: "Congress"
    },
    {
        id: 17,
        type: "short",
        question: "What are the two parts of the U.S. Congress?",
        options: [],
        answer: "The Senate and House of Representatives"
    },
    {
        id: 18,
        type: "short",
        question: "How many U.S. Senators are there?",
        options: [],
        answer: "100"
    },
    {
        id: 19,
        type: "short",
        question: "We elect a U.S. Senator for how many years?",
        options: [],
        answer: "6"
    },
    {
        id: 20,
        type: "short",
        question: "Who is one of your state's U.S. Senators now?",
        options: [],
        answer: "Amy Klobuchar"
    },
    {
        id: 21,
        type: "short",
        question: "The House of Representatives has how many voting members?",
        options: [],
        answer: "435"
    },
    {
        id: 22,
        type: "short",
        question: "We elect a U.S. Representative for how many years?",
        options: [],
        answer: "2"
    },
    {
        id: 23,
        type: "short",
        question: "Name your U.S. Representative.",
        options: [],
        answer: "Kelly Morrison"
    },
    {
        id: 24,
        type: "short",
        question: "Who does a U.S. Senator represent?",
        options: [],
        answer: "All people of the state"
    },
    {
        id: 25,
        type: "short",
        question: "Why do some states have more Representatives than other states?",
        options: [],
        answer: "Because of the state's population"
    },
    {
        id: 26,
        type: "short",
        question: "We elect a President for how many years?",
        options: [],
        answer: "4"
    },
    {
        id: 27,
        type: "short",
        question: "In what month do we vote for President?",
        options: [],
        answer: "November"
    },
    {
        id: 28,
        type: "short",
        question: "What is the name of the President of the United States now?",
        options: [],
        answer: "Donald Trump"
    },
    {
        id: 29,
        type: "short",
        question: "What is the name of the Vice President of the United States now?",
        options: [],
        answer: "J.D. Vance"
    },
    {
        id: 30,
        type: "short",
        question: "If the President can no longer serve, who becomes President?",
        options: [],
        answer: "The Vice President"
    },
    {
        id: 31,
        type: "short",
        question: "If both the President and the Vice President can no longer serve, who becomes President?",
        options: [],
        answer: "The Speaker of the House"
    },
    {
        id: 32,
        type: "short",
        question: "Who is the Commander in Chief of the military?",
        options: [],
        answer: "The President"
    },
    {
        id: 33,
        type: "short",
        question: "Who signs bills to become laws?",
        options: [],
        answer: "The President"
    },
    {
        id: 34,
        type: "short",
        question: "Who vetoes bills?",
        options: [],
        answer: "The President"
    },
    {
        id: 35,
        type: "short",
        question: "What does the President's Cabinet do?",
        options: [],
        answer: "Advises the President"
    },
    {
        id: 36,
        type: "short",
        question: "What are two Cabinet-level positions?",
        options: [],
        answer: "Secretary of State and Attorney General"
    },
    {
        id: 37,
        type: "short",
        question: "What does the judicial branch do?",
        options: [],
        answer: "Reviews laws and explains laws"
    },
    {
        id: 38,
        type: "short",
        question: "What is the highest court in the United States?",
        options: [],
        answer: "The Supreme Court"
    },
    {
        id: 39,
        type: "short",
        question: "How many justices are on the Supreme Court?",
        options: [],
        answer: "9"
    },
    {
        id: 40,
        type: "short",
        question: "Who is the Chief Justice of the United States now?",
        options: [],
        answer: "John Roberts"
    },
    {
        id: 41,
        type: "short",
        question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
        options: [],
        answer: "To print money"
    },
    {
        id: 42,
        type: "short",
        question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
        options: [],
        answer: "Provide schooling and education"
    },
    {
        id: 43,
        type: "short",
        question: "Who is the Governor of your state now?",
        options: [],
        answer: "Tim Walz"
    },
    {
        id: 44,
        type: "short",
        question: "What is the capital of your state?",
        options: [],
        answer: "St. Paul"
    },
    {
        id: 45,
        type: "short",
        question: "What are the two major political parties in the United States?",
        options: [],
        answer: "Democratic and Republican"
    },
    {
        id: 46,
        type: "short",
        question: "What is the political party of the President now?",
        options: [],
        answer: "Republican Party"
    },
    {
        id: 47,
        type: "short",
        question: "What is the name of the Speaker of the House of Representatives now?",
        options: [],
        answer: "Mike Johnson"
    },
    // C: Rights and Responsibilities
    {
        id: 48,
        type: "short",
        question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
        options: [],
        answer: "Any citizens can vote"
    },
    {
        id: 49,
        type: "short",
        question: "What is one responsibility that is only for United States citizens?",
        options: [],
        answer: "Vote in a federal election"
    },
    {
        id: 50,
        type: "short",
        question: "What are two rights only for United States citizens?",
        options: [],
        answer: "Apply for a federal job and vote"
    },
    {
        id: 51,
        type: "short",
        question: "What are two rights of everyone living in the United States?",
        options: [],
        answer: "Freedom of speech and freedom of worship"
    },
    {
        id: 52,
        type: "short",
        question: "What do we show loyalty to when we say the Pledge of Allegiance?",
        options: [],
        answer: "The United States"
    },
    {
        id: 53,
        type: "short",
        question: "What is one promise you make when you become a United States citizen?",
        options: [],
        answer: "Obey the laws of the United States"
    },
    {
        id: 54,
        type: "short",
        question: "How old do citizens have to be to vote for President?",
        options: [],
        answer: "Eighteen (18) and older"
    },
    {
        id: 55,
        type: "short",
        question: "What are two ways that Americans can participate in their democracy?",
        options: [],
        answer: "Vote and join a political party"
    },
    {
        id: 56,
        type: "short",
        question: "When is the last day you can send in federal income tax forms?",
        options: [],
        answer: "April 15"
    },
    {
        id: 57,
        type: "short",
        question: "When must all men register for the Selective Service?",
        options: [],
        answer: "At age eighteen (18)"
    },
    // --- AMERICAN HISTORY ---
    // A: Colonial Period and Independence
    {
        id: 58,
        type: "short",
        question: "What is one reason colonists came to America?",
        options: [],
        answer: "Freedom"
    },
    {
        id: 59,
        type: "short",
        question: "Who lived in America before the Europeans arrived?",
        options: [],
        answer: "Native Americans"
    },
    {
        id: 60,
        type: "short",
        question: "What group of people was taken to America and sold as slaves?",
        options: [],
        answer: "Africans"
    },
    {
        id: 61,
        type: "short",
        question: "Why did the colonists fight the British?",
        options: [],
        answer: "Because of high taxes (taxation without representation)"
    },
    {
        id: 62,
        type: "short",
        question: "Who wrote the Declaration of Independence?",
        options: [],
        answer: "Thomas Jefferson"
    },
    {
        id: 63,
        type: "short",
        question: "When was the Declaration of Independence adopted?",
        options: [],
        answer: "July 4, 1776"
    },
    {
        id: 64,
        type: "short",
        question: "There were 13 original states. Name three.",
        options: [],
        answer: "New Hampshire, New York, New Jersey"
    },
    {
        id: 65,
        type: "short",
        question: "What happened at the Constitutional Convention?",
        options: [],
        answer: "The Constitution was written"
    },
    {
        id: 66,
        type: "short",
        question: "When was the Constitution written?",
        options: [],
        answer: "1787"
    },
    {
        id: 67,
        type: "short",
        question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
        options: [],
        answer: "James Madison"
    },
    {
        id: 68,
        type: "short",
        question: "What is one thing Benjamin Franklin is famous for?",
        options: [],
        answer: "U.S. diplomat"
    },
    {
        id: 69,
        type: "short",
        question: "Who is the 'Father of Our Country'?",
        options: [],
        answer: "George Washington"
    },
    {
        id: 70,
        type: "short",
        question: "Who was the first President?",
        options: [],
        answer: "George Washington"
    },

    // B: 1800s
    {
        id: 71,
        type: "short",
        question: "What territory did the United States buy from France in 1803?",
        options: [],
        answer: "The Louisiana Territory"
    },
    {
        id: 72,
        type: "short",
        question: "Name one war fought by the United States in the 1800s.",
        options: [],
        answer: "Civil War"
    },
    {
        id: 73,
        type: "short",
        question: "Name the U.S. war between the North and the South.",
        options: [],
        answer: "The Civil War"
    },
    {
        id: 74,
        type: "short",
        question: "Name one problem that led to the Civil War.",
        options: [],
        answer: "Slavery"
    },
    {
        id: 75,
        type: "short",
        question: "What was one important thing that Abraham Lincoln did?",
        options: [],
        answer: "Freed the slaves (Emancipation Proclamation)"
    },
    {
        id: 76,
        type: "short",
        question: "What did the Emancipation Proclamation do?",
        options: [],
        answer: "Freed the slaves"
    },
    {
        id: 77,
        type: "short",
        question: "What did Susan B. Anthony do?",
        options: [],
        answer: "Fought for women's rights"
    },

    // C: Recent American History
    {
        id: 78,
        type: "short",
        question: "Name one war fought by the United States in the 1900s.",
        options: [],
        answer: "World War II"
    },
    {
        id: 79,
        type: "short",
        question: "Who was President during World War I?",
        options: [],
        answer: "Woodrow Wilson"
    },
    {
        id: 80,
        type: "short",
        question: "Who was President during the Great Depression and World War II?",
        options: [],
        answer: "Franklin Roosevelt"
    },
    {
        id: 81,
        type: "short",
        question: "Who did the United States fight in World War II?",
        options: [],
        answer: "Japan, Germany, and Italy"
    },
    {
        id: 82,
        type: "short",
        question: "Before he was President, Eisenhower was a general. What war was he in?",
        options: [],
        answer: "World War II"
    },
    {
        id: 83,
        type: "short",
        question: "During the Cold War, what was the main concern of the United States?",
        options: [],
        answer: "Communism"
    },
    {
        id: 84,
        type: "short",
        question: "What movement tried to end racial discrimination?",
        options: [],
        answer: "Civil rights movement"
    },
    {
        id: 85,
        type: "short",
        question: "What did Martin Luther King, Jr. do?",
        options: [],
        answer: "Fought for civil rights"
    },
    {
        id: 86,
        type: "short",
        question: "What major event happened on September 11, 2001, in the United States?",
        options: [],
        answer: "Terrorists attacked the United States"
    },
    {
        id: 87,
        type: "short",
        question: "Name one American Indian tribe in the United States.",
        options: [],
        answer: "Cherokee"
    },

    // --- INTEGRATED CIVICS ---
    // A: Geography
    {
        id: 88,
        type: "short",
        question: "Name one of the two longest rivers in the United States.",
        options: [],
        answer: "Mississippi River"
    },
    {
        id: 89,
        type: "short",
        question: "What ocean is on the West Coast of the United States?",
        options: [],
        answer: "Pacific Ocean"
    },
    {
        id: 90,
        type: "short",
        question: "What ocean is on the East Coast of the United States?",
        options: [],
        answer: "Atlantic Ocean"
    },
    {
        id: 91,
        type: "short",
        question: "Name one U.S. territory.",
        options: [],
        answer: "Puerto Rico"
    },
    {
        id: 92,
        type: "short",
        question: "Name one state that borders Canada.",
        options: [],
        answer: "Minnesota"
    },
    {
        id: 93,
        type: "short",
        question: "Name one state that borders Mexico.",
        options: [],
        answer: "Texas"
    },
    {
        id: 94,
        type: "short",
        question: "What is the capital of the United States?",
        options: [],
        answer: "Washington, D.C."
    },
    {
        id: 95,
        type: "short",
        question: "Where is the Statue of Liberty?",
        options: [],
        answer: "New York (Harbor)"
    },

    // B: Symbols
    {
        id: 96,
        type: "short",
        question: "Why does the flag have 13 stripes?",
        options: [],
        answer: "Because there were 13 original colonies"
    },
    {
        id: 97,
        type: "short",
        question: "Why does the flag have 50 stars?",
        options: [],
        answer: "Because there is one star for each state"
    },
    {
        id: 98,
        type: "short",
        question: "What is the name of the national anthem?",
        options: [],
        answer: "The Star-Spangled Banner"
    },

    // C: Holidays
    {
        id: 99,
        type: "short",
        question: "When do we celebrate Independence Day?",
        options: [],
        answer: "July 4"
    },
    {
        id: 100,
        type: "short",
        question: "Name two national U.S. holidays.",
        options: [],
        answer: "Thanksgiving and Christmas"
    }
];