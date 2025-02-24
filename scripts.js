const questions = [
  {
    question: "1. What's your favorite ice cream flavor?",
  },
  {
    question: "2. What's your favorite color?",
  },
  {
    question: "3. Who is your favorite singer?",
  },
  {
    question: "4. Do you want to watch a live singing concert?",
  },
  {
    question: "5. What kind of music do you prefer to listen to?",
  },
  {
    question: "6. Do you have a boyfriend/girlfriend?",
  },
  {
    question: "7. What is your goal that you want to achieve?",
  },
  {
    question: "8. Tell me the one person you love the most in your family.",
  },
  {
    question:
      "9. Do you like/love someone? (You can mention their name/age if you want.)",
  },
  {
    question:
      "10. If yes, you like someone, then tell one thing you like about him/her. If no, type N/A.",
  },
  {
    question:
      "11. When you're feeling depressed, what things do you do to refresh your mood?",
  },
  {
    question:
      "12. Do you love traveling? If yes, tell me the place name where you want to go? (e.g., Kashmir, Manali, etc.)",
  },
  {
    question: "13. Tell me one thing you always regret when thinking about it.",
  },
  {
    question:
      "14. I know you're beautiful, so can you rate yourself out of 10 on how much you would rate your beauty?",
  },
  {
    question: "15. Tell me the thing you want to do after you get your job?",
  },
];

let currentQuestionIndex = 0;
const userAnswers = [];

function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById("question").textContent =
      questions[currentQuestionIndex].question;
    document.getElementById("user-input").value = "";
  } else {
    displayAnswers();
  }
}

function submitAnswer() {
  const answer = document.getElementById("user-input").value.trim();
  if (answer !== "") {
    userAnswers.push(answer);
    currentQuestionIndex++;
    loadQuestion();
  }
}

function displayAnswers() {
  document.getElementById("answers-table").style.display = "table";
  document.getElementById("clear-button-container").style.display = "block";

  const tableBody = document.getElementById("table-body");
  questions.forEach((question, index) => {
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = question.question;

    const cell2 = document.createElement("td");
    cell2.textContent = userAnswers[index];

    row.appendChild(cell1);
    row.appendChild(cell2);
    tableBody.appendChild(row);
  });
}

function clearAnswers() {
  userAnswers.length = 0;
  currentQuestionIndex = 0;
  document.getElementById("table-body").innerHTML = "";
  document.getElementById("answers-table").style.display = "none";
  document.getElementById("clear-button-container").style.display = "none";
  loadQuestion();
}

window.onload = loadQuestion;
