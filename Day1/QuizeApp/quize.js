const quizzes = {
  dsa: {
    title: "DSA Quiz",
    questions: [
      { question: "What is the time complexity of binary search?", options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"], answer: "O(log n)" },
      { question: "Which data structure uses FIFO?", options: ["Stack", "Queue", "Tree", "Graph"], answer: "Queue" },
      { question: "Which is not a linear data structure?", options: ["Array", "Linked List", "Tree", "Queue"], answer: "Tree" },
      { question: "Which data structure is used in recursion?", options: ["Stack", "Queue", "Heap", "Array"], answer: "Stack" },
      { question: "Which sorting is best for small data?", options: ["Bubble", "Selection", "Insertion", "Merge"], answer: "Insertion" }
    ]
  },
  aptitude: {
    title: "Aptitude Quiz",
    questions: [
      { question: "What is 20% of 150?", options: ["25", "30", "35", "40"], answer: "30" },
      { question: "Ratio of 2:3 equals what percent?", options: ["60%", "66.6%", "50%", "40%"], answer: "66.6%" },
      { question: "Find the average of 5, 10, 15, 20, 25", options: ["15", "20", "12.5", "18"], answer: "15" },
      { question: "Simplify: (3x+2x)/5", options: ["x", "2x", "5x", "x^2"], answer: "x" },
      { question: "Next in 2, 4, 8, 16, ?", options: ["20", "24", "32", "30"], answer: "32" }
    ]
  },
  math: {
    title: "Math Quiz",
    questions: [
      { question: "What is 12 x 8?", options: ["96", "84", "108", "112"], answer: "96" },
      { question: "Square root of 144?", options: ["11", "13", "12", "14"], answer: "12" },
      { question: "What is 15% of 200?", options: ["30", "25", "35", "40"], answer: "30" },
      { question: "Simplify: 6 + 4 ÷ 2", options: ["5", "8", "10", "7"], answer: "8" },
      { question: "Value of π (pi)?", options: ["3.14", "2.71", "1.41", "1.73"], answer: "3.14" }
    ]
  },
  mental: {
    title: "Mental Ability Quiz",
    questions: [
      { question: "Which is odd one: Dog, Cat, Lion, Apple", options: ["Dog", "Lion", "Apple", "Cat"], answer: "Apple" },
      { question: "If A=1, B=2, what is J?", options: ["8", "10", "11", "12"], answer: "10" },
      { question: "What comes next: 1, 4, 9, 16, ?", options: ["25", "36", "20", "30"], answer: "25" },
      { question: "Mirror of 12:45?", options: ["11:15", "12:15", "1:15", "10:15"], answer: "11:15" },
      { question: "Opposite of North-East?", options: ["South-East", "South-West", "North-West", "West"], answer: "South-West" }
    ]
  },
  html: {
    title: "HTML Quiz",
    questions: [
      { question: "HTML stands for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Home Tool Markup Language", "None"], answer: "Hyper Text Markup Language" },
      { question: "<br> tag is used for?", options: ["Bold", "Break Line", "List", "Table"], answer: "Break Line" },
      { question: "Which tag is for images?", options: ["<img>", "<image>", "<src>", "<pic>"], answer: "<img>" },
      { question: "HTML files have extension?", options: [".htm", ".html", ".web", ".xml"], answer: ".html" },
      { question: "Correct HTML tag for paragraph?", options: ["<p>", "<para>", "<text>", "<pg>"], answer: "<p>" }
    ]
  },
  css: {
    title: "CSS Quiz",
    questions: [
      { question: "CSS stands for?", options: ["Cascading Style Sheets", "Colorful Style Syntax", "Computer Style Sheets", "None"], answer: "Cascading Style Sheets" },
      { question: "Which is correct for background color?", options: ["bgcolor", "color", "background-color", "back-color"], answer: "background-color" },
      { question: "Selector for class?", options: [".classname", "#idname", "<class>", "*"], answer: ".classname" },
      { question: "Inline CSS is written in?", options: ["style tag", "link tag", "style attribute", "css file"], answer: "style attribute" },
      { question: "Default position in CSS?", options: ["static", "absolute", "relative", "fixed"], answer: "static" }
    ]
  },
  js: {
    title: "JavaScript Quiz",
    questions: [
      { question: "Which is a JS keyword?", options: ["let", "const", "var", "All"], answer: "All" },
      { question: "JS file extension?", options: [".javascript", ".js", ".java", ".j"], answer: ".js" },
      { question: "To print on console?", options: ["console.print()", "log()", "console.log()", "print()"], answer: "console.log()" },
      { question: "Type of NaN?", options: ["string", "undefined", "object", "number"], answer: "number" },
      { question: "Function starts with?", options: ["func", "function", "method", "define"], answer: "function" }
    ]
  }
};

let currentQuiz = null;
let currentQuestion = 0;

function startQuiz(subject) {
  currentQuiz = quizzes[subject];
  currentQuestion = 0;

  document.querySelector('#quiz-title').innerText = currentQuiz.title;
  document.querySelector('#quizzes').classList.add('hidden');
  document.querySelector('#quiz-container').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const q = currentQuiz.questions[currentQuestion];
  document.getElementById('question').innerText = q.question;

  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = currentQuiz.questions[currentQuestion].answer;
  alert(selected === correct ? "Correct!" : `Wrong! Correct: ${correct}`);
  document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < currentQuiz.questions.length) {
    showQuestion();
    document.getElementById('next-btn').style.display = 'none';
  } else {
    alert("🎉 Quiz Completed!");
    location.reload();
  }
}
