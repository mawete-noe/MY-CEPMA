 /* ========================
   SONS
======================== */
const soundCorrect = new Audio("sons/certa.mp3");
const soundWrong = new Audio("sons/errada.mp3");

/* ========================
   PERGUNTAS (completas)*/
 
const questions = [
  {
    question: "O que é programação?",
    options: [
      { text: "Dar instruções ao computador", correct: true },
      { text: "Montar hardware", correct: false },
      { text: "Usar internet", correct: false },
      { text: "Criar textos", correct: false }
    ],
    hint: "O computador obedece comandos"
  },
  {
    question: "O que é um algoritmo?",
    options: [
      { text: "Sequência de passos", correct: true },
      { text: "Erro no código", correct: false },
      { text: "Um site", correct: false },
      { text: "Um hardware", correct: false }
    ],
    hint: "Resolve problemas"
  },
  {
    question: "Qual destas é uma linguagem de programação?",
    options: [
      { text: "JavaScript", correct: true },
      { text: "HTML Página", correct: false },
      { text: "Windows", correct: false },
      { text: "Monitor", correct: false }
    ],
    hint: "Muito usada na web"
  },
  {
    question: "Para que serve uma variável?",
    options: [
      { text: "Guardar valores", correct: true },
      { text: "Criar imagens", correct: false },
      { text: "Executar vírus", correct: false },
      { text: "Aumentar memória", correct: false }
    ],
    hint: "Armazena dados"
  },
  {
    question: "Qual palavra cria uma variável que muda?",
    options: [
      { text: "let", correct: true },
      { text: "const", correct: false },
      { text: "if", correct: false },
      { text: "for", correct: false }
    ],
    hint: "Variável moderna"
  },
  {
    question: "O que é const?",
    options: [
      { text: "Variável que não muda", correct: true },
      { text: "Loop", correct: false },
      { text: "Função", correct: false },
      { text: "Erro", correct: false }
    ],
    hint: "Valor fixo"
  },
  {
    question: "O que significa === ?",
    options: [
      { text: "Compara valor e tipo", correct: true },
      { text: "Atribui valor", correct: false },
      { text: "Soma", correct: false },
      { text: "Comentário", correct: false }
    ],
    hint: "Comparação rigorosa"
  },
  {
    question: "O que faz o if?",
    options: [
      { text: "Cria condição", correct: true },
      { text: "Repete código", correct: false },
      { text: "Cria variável", correct: false },
      { text: "Finaliza programa", correct: false }
    ],
    hint: "Decisão"
  },
  {
    question: "O que é um loop?",
    options: [
      { text: "Repetição de código", correct: true },
      { text: "Erro", correct: false },
      { text: "Variável", correct: false },
      { text: "Comentário", correct: false }
    ],
    hint: "Executa várias vezes"
  },
  {
    question: "Qual estrutura repete código?",
    options: [
      { text: "for", correct: true },
      { text: "if", correct: false },
      { text: "else", correct: false },
      { text: "const", correct: false }
    ],
    hint: "Laço"
  },

  // 10
  {
    question: "O que é um bug?",
    options: [
      { text: "Erro no código", correct: true },
      { text: "Função", correct: false },
      { text: "Variável", correct: false },
      { text: "Linguagem", correct: false }
    ],
    hint: "Algo errado"
  },
  {
    question: "O que é debug?",
    options: [
      { text: "Corrigir erros", correct: true },
      { text: "Criar layout", correct: false },
      { text: "Executar código", correct: false },
      { text: "Apagar ficheiros", correct: false }
    ],
    hint: "Remover bugs"
  },
  {
    question: "O que é uma função?",
    options: [
      { text: "Bloco reutilizável de código", correct: true },
      { text: "Erro", correct: false },
      { text: "Texto", correct: false },
      { text: "Comentário", correct: false }
    ],
    hint: "Reutilização"
  },
  {
    question: "Como se cria uma função?",
    options: [
      { text: "function nome()", correct: true },
      { text: "var nome", correct: false },
      { text: "if nome", correct: false },
      { text: "for nome", correct: false }
    ],
    hint: "Palavra-chave function"
  },
  {
    question: "O que é um array?",
    options: [
      { text: "Lista de valores", correct: true },
      { text: "Texto", correct: false },
      { text: "Número", correct: false },
      { text: "Erro", correct: false }
    ],
    hint: "Usa []"
  },
  {
    question: "Como acessar o primeiro item do array?",
    options: [
      { text: "array[0]", correct: true },
      { text: "array[1]", correct: false },
      { text: "array.first()", correct: false },
      { text: "array()", correct: false }
    ],
    hint: "Índice zero"
  },
  {
    question: "O que faz push()?",
    options: [
      { text: "Adiciona item no array", correct: true },
      { text: "Remove item", correct: false },
      { text: "Ordena", correct: false },
      { text: "Copia array", correct: false }
    ],
    hint: "Final da lista"
  },
  {
    question: "O que é boolean?",
    options: [
      { text: "Verdadeiro ou falso", correct: true },
      { text: "Texto", correct: false },
      { text: "Número", correct: false },
      { text: "Imagem", correct: false }
    ],
    hint: "true / false"
  },
  {
    question: "O que é uma string?",
    options: [
      { text: "Texto", correct: true },
      { text: "Número", correct: false },
      { text: "Loop", correct: false },
      { text: "Função", correct: false }
    ],
    hint: "Entre aspas"
  },
  {
    question: "Qual operador significa E lógico?",
    options: [
      { text: "&&", correct: true },
      { text: "||", correct: false },
      { text: "==", correct: false },
      { text: "!", correct: false }
    ],
    hint: "Duas condições verdadeiras"
  },

  // 20
  {
    question: "Qual operador significa OU lógico?",
    options: [
      { text: "||", correct: true },
      { text: "&&", correct: false },
      { text: "==", correct: false },
      { text: "!", correct: false }
    ],
    hint: "Uma condição verdadeira"
  },
  {
    question: "O que faz o operador !?",
    options: [
      { text: "Nega condição", correct: true },
      { text: "Soma", correct: false },
      { text: "Divide", correct: false },
      { text: "Concatena", correct: false }
    ],
    hint: "Negação"
  },
  {
    question: "O que é HTML?",
    options: [
      { text: "Linguagem de marcação", correct: true },
      { text: "Linguagem de programação", correct: false },
      { text: "Sistema operativo", correct: false },
      { text: "Banco de dados", correct: false }
    ],
    hint: "Estrutura da página"
  },
  {
    question: "O que é CSS?",
    options: [
      { text: "Estilo da página", correct: true },
      { text: "Lógica", correct: false },
      { text: "Servidor", correct: false },
      { text: "Banco de dados", correct: false }
    ],
    hint: "Cores e layout"
  },
  {
    question: "O que é JavaScript?",
    options: [
      { text: "Linguagem de programação", correct: true },
      { text: "Editor", correct: false },
      { text: "Sistema", correct: false },
      { text: "Hardware", correct: false }
    ],
    hint: "Interatividade"
  },

  // ...  
  // 🔥 Para não estourar o limite de mensagem, já te explico abaixo
];

/* ========================
   ESTADO DO JOGO
======================== */
let index = 0;
let answered = false;

let score = 0;
let correctCount = 0;
let wrongCount = 0;

let helps = {
  fifty: true,
  hint: true,
  time: true
};

/* ========================
   TIMER DE PERGUNTA
======================== */
const TOTAL_TIME = 15; // 60s por pergunta
let timeLeft = TOTAL_TIME;
let timerInterval = null;

/* ========================
   ELEMENTOS HTML
======================== */
const questionText = document.querySelector(".question-text");
const optionsContainer = document.querySelector(".options-container");
const progressBar = document.querySelector(".progress-bar-fill");

const btn50 = document.getElementById("help-50");
const btnHint = document.getElementById("help-hint");
const btnTime = document.getElementById("help-time");

const scoreText = document.getElementById("score");
const correctText = document.getElementById("correct");
const wrongText = document.getElementById("wrong");

const endScreen = document.getElementById("endScreen");
const finalScore = document.getElementById("finalScore");
const finalCorrect = document.getElementById("finalCorrect");
const finalWrong = document.getElementById("finalWrong");
const finalPercent = document.getElementById("finalPercent");
const restartBtn = document.getElementById("restartBtn");

/* ========================
   FUNÇÕES AUXILIARES
======================== */
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

/* ========================
   FUNÇÕES PRINCIPAIS
======================== */
function startQuiz() {
  shuffle(questions);
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  optionsContainer.innerHTML = "";
  resetTimer(); // reinicia timer da pergunta
  updateProgress();

  const q = questions[index];
  questionText.textContent = q.question;

  shuffle(q.options).forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt.text;
    btn.onclick = () => checkAnswer(btn, opt.correct);
    optionsContainer.appendChild(btn);
  });

  startTimer(); // inicia timer da pergunta
}

function checkAnswer(btn, correct) {
  if (answered) return;
  answered = true;

  stopTimer(); // para timer da pergunta
  document.querySelectorAll(".option").forEach(b => b.disabled = true);

  if (correct) {
    btn.classList.add("correct");
    soundCorrect.play();
    score += 10;
    correctCount++;
  } else {
    btn.classList.add("wrong");
    soundWrong.play();
    wrongCount++;
    showCorrect();
  }

  updateScoreboard();
  setTimeout(nextQuestion, 1500);
}

function showCorrect() {
  const correctTextOption = questions[index].options.find(o => o.correct).text;
  document.querySelectorAll(".option").forEach(b => {
    if (b.textContent === correctTextOption) b.classList.add("correct");
  });
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function updateProgress() {
  progressBar.style.width = (timeLeft / TOTAL_TIME) * 100 + "%";
}

function updateScoreboard() {
  scoreText.textContent = score;
  correctText.textContent = correctCount;
  wrongText.textContent = wrongCount;
}

function endQuiz() {
  stopTimer();

  const percent = Math.round((correctCount / questions.length) * 100);

  finalScore.textContent = score;
  finalCorrect.textContent = correctCount;
  finalWrong.textContent = wrongCount;
  finalPercent.textContent = percent + "%";

  endScreen.classList.remove("hidden");
}

/* ========================
   TIMER DE PERGUNTA
======================== */
function startTimer() {
  timeLeft = TOTAL_TIME;
  timerInterval = setInterval(() => {
    timeLeft--;
    updateProgress();

    if (timeLeft <= 0) {
      stopTimer();
      terminateQuizOnTimeout(); // termina o quiz se o tempo acabar
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  timeLeft = TOTAL_TIME;
  updateProgress();
}

// Quando o tempo acabar, o quiz termina imediatamente
function terminateQuizOnTimeout() {
  answered = true;
  soundWrong.play();
  alert("⏱️ Tempo da pergunta esgotado! O quiz terminou.");
  endQuiz();
}

/* ========================
   AJUDAS
======================== */
btn50.onclick = () => {
  if (!helps.fifty || answered) return;
  helps.fifty = false;
  btn50.disabled = true;

  const wrongs = questions[index].options.filter(o => !o.correct);
  shuffle(wrongs).slice(0, 2).forEach(w => {
    document.querySelectorAll(".option").forEach(b => {
      if (b.textContent === w.text) b.style.visibility = "hidden";
    });
  });
};

btnHint.onclick = () => {
  if (!helps.hint || answered) return;
  helps.hint = false;
  btnHint.disabled = true;
  alert("💡 " + questions[index].hint);
};

btnTime.onclick = () => {
  if (!helps.time || answered) return;
  helps.time = false;
  btnTime.disabled = true;

  timeLeft += 15;
  if (timeLeft > TOTAL_TIME) timeLeft = TOTAL_TIME;
  updateProgress();

  alert("⏱️ Tempo extra +15s ativado!");
};

/* ========================
   REINICIAR QUIZ
======================== */
restartBtn.onclick = () => {
  index = 0;
  score = 0;
  correctCount = 0;
  wrongCount = 0;
  helps = { fifty: true, hint: true, time: true };

  btn50.disabled = false;
  btnHint.disabled = false;
  btnTime.disabled = false;

  endScreen.classList.add("hidden");
  updateScoreboard();

  startQuiz();
};

/* ========================
   INÍCIO DO QUIZ
======================== */
startQuiz();
