const questions = [{
        question: "What is 1 + 1?",
        options: ["2", "20", "28", "30"],
        answer: "2"
    },
    {
        question: "What is 10 + 10?",
        options: ["2", "20", "28", "30"],
        answer: "20"
    },
    {
        question: "What is Athena's favorite animal",
        options: ["jellyfish", "penguins", "otters"],
        answer: "otters"
    },
    {
        question: "What color is the sky",
        options: ["red", "blue", "green", "purple"],
        answer: "blue"
    },
    {
        question: "Who was the first president",
        options: ["Washington", "Adams", "Jefferson", "Madison"],
        answer: "Washington"
    },
    {
        question: "When is my birthday?",
        options: ["February 18", "March 22", "September 13", "August 14"],
        answer: "February 18"
    },
    {
        question: "How hungry are you",
        options: ["not", "sorta", "very", "extremely"],
        answer: "very"
    },
    {
        question: "Where is Trenton?",
        options: ["New Jersey", "New York", "California", "North Dakota"],
        answer: "New Jersey"
    },
    {
        question: "Knock knock",
        options: ["Who's there", "What", "Why", "No"],
        answer: "Who's There"
    },
    {
        question: "What is Athena's favorite animal",
        options: ["jellyfish", "penguins", "otters"],
        answer: "otters"
    }
];

// An array of JavaScript Objects, which each have keys/values associated

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {
    document.querySelector("#question").innerHTML = questions[question_number].question
        //questions is the array of questions/ options/ answers
        // [question_number] is the number of the element you are accessing
        //.question is the part of the object that you want to access
    const options = document.querySelector("#options");
    options.innerHTML = "";

    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }
    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            if (option.textContent == questions[question_number].answer) {
                correct++;
                question_number++;
                document.querySelector("#correct").innerHTML = correct + " of " + question_number;
            } else {
                question_number++;
                document.querySelector("#correct").innerHTML = correct + " of " + question_number;
            }
            load_question();
            // while (question_number < 11) {
            //     load_question();
            // }
        }
    });
}