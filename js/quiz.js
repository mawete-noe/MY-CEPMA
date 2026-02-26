/* ========================
   SONS
======================== */
const soundCorrect = new Audio("sons/certa.mp3");
const soundWrong = new Audio("sons/errada.mp3");

/* ========================
   PERGUNTAS (completas)
======================== */
const questions = [
  {
    question: "O que significa TIC?",
    options: [
      { text: "Tecnologias de Informação e Comunicação", correct: true },
      { text: "Tecnologia Integrada de Computadores", correct: false },
      { text: "Técnicas de Internet e Código", correct: false },
      { text: "Tecnologia Industrial de Cabos", correct: false }
    ],
    hint: "Está ligado à informação e comunicação"
  },
  {
    question: "Qual é um dispositivo de entrada?",
    options: [
      { text: "Monitor", correct: false },
      { text: "Teclado", correct: true },
      { text: "Impressora", correct: false },
      { text: "Coluna", correct: false }
    ],
    hint: "Serve para inserir dados"
  },
  {
    question: "Qual é um dispositivo de saída?",
    options: [
      { text: "Rato", correct: false },
      { text: "Teclado", correct: false },
      { text: "Monitor", correct: true },
      { text: "Scanner", correct: false }
    ],
    hint: "Mostra informações"
  },
  {
    question: "O que é hardware?",
    options: [
      { text: "Parte física do computador", correct: true },
      { text: "Programas do computador", correct: false },
      { text: "Internet", correct: false },
      { text: "Sistema operativo", correct: false }
    ],
    hint: "Pode ser tocado"
  },
  {
    question: "O que é software?",
    options: [
      { text: "Peças físicas", correct: false },
      { text: "Programas e aplicações", correct: true },
      { text: "Cabos", correct: false },
      { text: "Monitor", correct: false }
    ],
    hint: "Não é físico"
  },
  {
    question: "Qual destes é um sistema operativo?",
    options: [
      { text: "Windows", correct: true },
      { text: "Google", correct: false },
      { text: "Teclado", correct: false },
      { text: "CPU", correct: false }
    ],
    hint: "Controla o computador"
  },
  {
    question: "Para que serve a CPU?",
    options: [
      { text: "Processar informações", correct: true },
      { text: "Guardar ficheiros", correct: false },
      { text: "Mostrar imagens", correct: false },
      { text: "Imprimir documentos", correct: false }
    ],
    hint: "É o cérebro do computador"
  },
  {
    question: "Qual é a função do rato?",
    options: [
      { text: "Mover o cursor", correct: true },
      { text: "Imprimir", correct: false },
      { text: "Guardar dados", correct: false },
      { text: "Ligar à internet", correct: false }
    ],
    hint: "Aponta na tela"
  },
  {
    question: "O que é a Internet?",
    options: [
      { text: "Uma rede mundial de computadores", correct: true },
      { text: "Um programa", correct: false },
      { text: "Um dispositivo", correct: false },
      { text: "Um ficheiro", correct: false }
    ],
    hint: "Liga pessoas no mundo"
  },
  {
    question: "Qual destes é um navegador?",
    options: [
      { text: "Chrome", correct: true },
      { text: "Windows", correct: false },
      { text: "CPU", correct: false },
      { text: "Excel", correct: false }
    ],
    hint: "Usado para aceder a sites"
  },
  {
    question: "Para que serve o Word?",
    options: [
      { text: "Criar textos", correct: true },
      { text: "Criar vídeos", correct: false },
      { text: "Navegar na internet", correct: false },
      { text: "Editar imagens", correct: false }
    ],
    hint: "Editor de texto"
  },
  {
    question: "O que é um ficheiro?",
    options: [
      { text: "Conjunto de dados guardados", correct: true },
      { text: "Um cabo", correct: false },
      { text: "Um programa obrigatório", correct: false },
      { text: "Um site", correct: false }
    ],
    hint: "Pode ser guardado"
  },
  {
    question: "Qual é a função da impressora?",
    options: [
      { text: "Imprimir documentos", correct: true },
      { text: "Guardar dados", correct: false },
      { text: "Editar texto", correct: false },
      { text: "Aumentar memória", correct: false }
    ],
    hint: "Passa do digital para o papel"
  },
  {
    question: "O que é um email?",
    options: [
      { text: "Correio eletrónico", correct: true },
      { text: "Rede social", correct: false },
      { text: "Programa de edição", correct: false },
      { text: "Dispositivo", correct: false }
    ],
    hint: "Serve para enviar mensagens"
  },
  {
    question: "Qual destes é um dispositivo de armazenamento?",
    options: [
      { text: "Pen drive", correct: true },
      { text: "Monitor", correct: false },
      { text: "Rato", correct: false },
      { text: "Teclado", correct: false }
    ],
    hint: "Guarda dados"
  },
  {
    question: "O que significa WWW?",
    options: [
      { text: "World Wide Web", correct: true },
      { text: "Web World Wide", correct: false },
      { text: "World Web Work", correct: false },
      { text: "Wide Web World", correct: false }
    ],
    hint: "Ligado a sites"
  },
  {
    question: "Qual é a função do Excel?",
    options: [
      { text: "Criar folhas de cálculo", correct: true },
      { text: "Editar imagens", correct: false },
      { text: "Criar textos", correct: false },
      { text: "Navegar na internet", correct: false }
    ],
    hint: "Usa tabelas"
  },
  {
    question: "O que é um vírus informático?",
    options: [
      { text: "Programa malicioso", correct: true },
      { text: "Programa de proteção", correct: false },
      { text: "Componente físico", correct: false },
      { text: "Sistema operativo", correct: false }
    ],
    hint: "Pode danificar o computador"
  },
  {
    question: "Qual é a função do antivírus?",
    options: [
      { text: "Proteger o computador", correct: true },
      { text: "Criar documentos", correct: false },
      { text: "Imprimir ficheiros", correct: false },
      { text: "Aumentar internet", correct: false }
    ],
    hint: "Combate vírus"
  },
  {
    question: "O que é um login?",
    options: [
      { text: "Acesso a uma conta", correct: true },
      { text: "Um dispositivo", correct: false },
      { text: "Um ficheiro", correct: false },
      { text: "Um vírus", correct: false }
    ],
    hint: "Usa utilizador e senha"
  },
  {
    question: "Qual destes é um motor de busca?",
    options: [
      { text: "Google", correct: true },
      { text: "Word", correct: false },
      { text: "Windows", correct: false },
      { text: "CPU", correct: false }
    ],
    hint: "Serve para pesquisar"
  },
  {
    question: "O que é a cloud?",
    options: [
      { text: "Armazenamento online", correct: true },
      { text: "Dispositivo físico", correct: false },
      { text: "Programa de edição", correct: false },
      { text: "Vírus", correct: false }
    ],
    hint: "Fica na internet"
  },
  
  {
    question: "O que significa HTTP?",
    options: [
      { text: "HyperText Transfer Protocol", correct: true },
      { text: "High Transfer Text Protocol", correct: false },
      { text: "HyperText Transmission Program", correct: false },
      { text: "High Tech Transfer Process", correct: false }
    ],
    hint: "Protocolo da web"
  },
  {
    question: "Qual destes é um sistema operativo móvel?",
    options: [
      { text: "Android", correct: true },
      { text: "Linux", correct: false },
      { text: "Windows", correct: false },
      { text: "Chrome", correct: false }
    ],
    hint: "Usado em smartphones"
  },
  {
    question: "O que é um firewall?",
    options: [
      { text: "Proteção de rede", correct: true },
      { text: "Um vírus", correct: false },
      { text: "Dispositivo de armazenamento", correct: false },
      { text: "Programa de edição", correct: false }
    ],
    hint: "Segurança digital"
  },
  {
    question: "Qual é a função de um SSD?",
    options: [
      { text: "Armazenamento rápido", correct: true },
      { text: "Exibir gráficos", correct: false },
      { text: "Conectar à internet", correct: false },
      { text: "Processar dados", correct: false }
    ],
    hint: "Substitui HDD"
  },
  {
    question: "O que é um IP?",
    options: [
      { text: "Endereço de internet", correct: true },
      { text: "Programa de software", correct: false },
      { text: "Sistema operativo", correct: false },
      { text: "Cabo de rede", correct: false }
    ],
    hint: "Identifica dispositivos online"
  },
  {
    question: "Qual destes é um programa de edição de imagem?",
    options: [
      { text: "Photoshop", correct: true },
      { text: "Word", correct: false },
      { text: "Excel", correct: false },
      { text: "Chrome", correct: false }
    ],
    hint: "Usado para imagens"
  },
  {
    question: "O que significa AI?",
    options: [
      { text: "Inteligência Artificial", correct: true },
      { text: "Interface Avançada", correct: false },
      { text: "Aplicação Interna", correct: false },
      { text: "Arquivo Inteligente", correct: false }
    ],
    hint: "Relacionado a máquinas inteligentes"
  },
  {
    question: "Qual é a função da RAM?",
    options: [
      { text: "Memória temporária", correct: true },
      { text: "Armazenamento permanente", correct: false },
      { text: "Mostrar imagens", correct: false },
      { text: "Proteger o PC", correct: false }
    ],
    hint: "Volátil, usada pelo processador"
  },
  {
    question: "O que significa URL?",
    options: [
      { text: "Uniform Resource Locator", correct: true },
      { text: "Universal Resource Link", correct: false },
      { text: "Uniform Random Link", correct: false },
      { text: "User Resource Locator", correct: false }
    ],
    hint: "Endereço de páginas web"
  },
  {
    question: "Qual é a função do teclado numérico?",
    options: [
      { text: "Digitar números rapidamente", correct: true },
      { text: "Mover o cursor", correct: false },
      { text: "Imprimir documentos", correct: false },
      { text: "Navegar na web", correct: false }
    ],
    hint: "Parte do teclado para números"
  }
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
