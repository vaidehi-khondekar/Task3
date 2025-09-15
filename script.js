// ===== Quiz Data =====
const questions = [
  { q: "Which language runs in a web browser?", options: ["Python", "C", "JavaScript", "Java"], answer: "JavaScript" },
  { q: "What does CSS stand for?", options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style System", "Code Style Sheets"], answer: "Cascading Style Sheets" }
];

let index = 0, score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

// ===== Load Quiz Question =====
function loadQuestion() {
  const q = questions[index];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function checkAnswer(selected) {
  if (selected === questions[index].answer) score++;
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    scoreEl.textContent = `score:${score}/${questions.length}`;
    nextBtn.style.display = "none";
  }
};

loadQuestion();

// ===== Fetch API Joke =====
document.getElementById("joke-btn").addEventListener("click", getJoke);

async function getJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  document.getElementById('joke').textContent = `${data.setup} - ${data.punchline}`;
}