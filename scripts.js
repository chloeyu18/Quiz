const questions = [{
        question: "What is 10 + 10?",
        options: ["8", "20", "28", "30"],
        answer: "20"
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
}