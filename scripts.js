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
        options: ["jellyfish", "penguins", "otters", "frogs"],
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
        question: "When is Martin Luther King Jr. Day?",
        options: ["January 21", "March 22", "September 13", "August 14"],
        answer: "January 21"
    },
    {
        question: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
        options: ["A woodchuck would chuck as much wood as it could chuck if a woodchuck could chuck wood",
            "Sally sells seashells by the sea shore", "Peter piper picked a peck of pickeled peppers", "Some wood"
        ],
        answer: "A woodchuck would chuck as much wood as it could chuck if a woodchuck could chuck wood"
    },
    {
        question: "Where is Harvard?",
        options: ["Massachusetts", "New York", "California", "North Dakota"],
        answer: "Massachusetts"
    },
    {
        question: "Which of these is not an animal",
        options: ["Bird", "Cat", "Dog", "Tomato"],
        answer: "Tomato"
    },
    {
        question: "Where am I?",
        options: ["Yenching Auditorium", "Quincy", "North Dakota", "No where"],
        answer: "Yenching Auditorium"
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

            if (question_number < 10) {
                load_question();
            } else {
                document.querySelector("body").innerHTML = "You completed the Quiz! You got " +
                    correct + " questions correct!";
            }
        }
    });
}