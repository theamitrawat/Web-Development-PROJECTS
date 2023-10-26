let questions = [
  {
    ques_no: 1,
    ques_text: "Which of the following is not a data type in JavaScript?",
    answer: [
      "Integer",
      "String",
      "Boolean",
      "Undefined"
    ],
    correct_ans: "Integer"
  },
  {
    ques_no: 2,
    ques_text: "What does JavaScript stand for?",
    answer: [
      "JustStyleText",
      "JavaStyleText",
      "JustScriptText",
      "JavaScript"
    ],
    correct_ans: "JavaScript"
  },
  {
    ques_no: 3,
    ques_text: "How do you declare a variable in JavaScript?",
    answer: [
      "var myVar;",
      "let myVar;",
      "const myVar;",
      "All of the above"
    ],
    correct_ans: "All of the above"
  },
  {
    ques_no: 4,
    ques_text: "Which operator is used to compare two values for equality in JavaScript?",
    answer: [
      "==",
      "===",
      "=",
      "><"
    ],
    correct_ans: "==="
  },
  {
    ques_no: 5,
    ques_text: "What is the result of the following expression: 5 + '5'?",
    answer: [
      "10",
      "'55'",
      "55",
      "NaN"
    ],
    correct_ans: "'55'"
  }
];

let startQuiz = document.querySelector(".start-btn");
let quizBox = document.querySelector(".quiz-box");
let quizQuestion = quizBox.querySelector("#ques");
let nextBtn = quizBox.querySelector(".next-btn");
let optionBox = quizBox.querySelector('.option-box');
let quesTracer = quizBox.querySelector('#quest-tracer');
let resultBox = document.querySelector('.result-box');
let totalQuest = resultBox.querySelector("#total-quest")
let rightAnswer = resultBox.querySelector("#right-answer")
let wrongAnswer = resultBox.querySelector("#wrong-answer")
let totalScore = resultBox.querySelector("#total-score")

startQuiz.addEventListener("click", function () {
  startQuiz.classList.add("inactive");
  quizBox.classList.remove("inactive");
});

let currentQuestIndex = 0;
let right_answer = 0;

function showQuestion() {
  nextBtn.classList.add("inactive");
  if (currentQuestIndex == questions.length - 1) {
    nextBtn.innerHTML = "Finish";
    nextBtn.addEventListener("click", function () {
      quizBox.classList.add("inactive");
      resultBox.classList.remove("inactive");
      showResutl();
    });
  }
  questionDetails = questions[currentQuestIndex];
  quizQuestion.innerText = questionDetails.ques_no + ". " + questionDetails.ques_text;

  optionBox.innerHTML = '';
  for (let i in questionDetails.answer) {
    currentChoice = questionDetails.answer[i];
    let optionBtn = document.createElement("button");
    optionBtn.textContent = currentChoice;
    optionBox.appendChild(optionBtn);
    optionBtn.classList.add('btn');
    optionBtn.setAttribute('data-choice', currentChoice);
    optionBtn.addEventListener("click", checkAnswer);
  }
  quesTracer.textContent = questionDetails.ques_no + " - " + questions.length;
}

function checkAnswer() {
  const selectedChoice = this.getAttribute('data-choice');
  const correctChoice = questionDetails.correct_ans;
  
  if (selectedChoice === correctChoice) {
    this.classList.add("correct-ans");
    this.innerHTML = this.getAttribute('data-choice') + '<i class="fa-solid fa-check"></i>';
    right_answer++
  } else {
    this.classList.add("wrong-ans");
    this.innerHTML = this.getAttribute('data-choice') + '<i class="fa-solid fa-xmark"></i>';
    const correctButton = optionBox.querySelector(`[data-choice="${correctChoice}"]`);
    correctButton.classList.add("correct-ans");
    correctButton.innerHTML = correctButton.getAttribute('data-choice') + '<i class="fa-solid fa-check"></i>';
  }

  const optionButtons = optionBox.querySelectorAll('.btn');
  optionButtons.forEach(button => {
    button.style.pointerEvents = "none";
  });

  nextBtn.classList.remove("inactive");
}


showQuestion();

nextBtn.addEventListener('click', () => {
  if (currentQuestIndex <= questions.length - 1) {
    currentQuestIndex++;
    showQuestion();
  } else {
    alert("No more question")
  }
});

function showResutl() {
  totalQuest.innerHTML = questions.length;
  totalQuest.style.color = 'aqua';
  rightAnswer.innerHTML = right_answer;
  rightAnswer.style.color = 'aqua';
  wrongAnswer.innerHTML = questions.length - right_answer;
  wrongAnswer.style.color = 'aqua';
  totalScore.innerHTML = (right_answer / questions.length) * 100 + "%";
  totalScore.style.color = 'aqua';
}