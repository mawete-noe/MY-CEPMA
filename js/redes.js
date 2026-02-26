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
    question: "O que é uma rede de computadores?",
    options: [
      { text: "Conjunto de computadores conectados", correct: true },
      { text: "Um software", correct: false },
      { text: "Um computador único", correct: false },
      { text: "Um sistema operacional", correct: false }
    ],
    hint: "Conexão entre dispositivos"
  },
  {
    question: "Qual dispositivo conecta redes diferentes?",
    options: [
      { text: "Roteador", correct: true },
      { text: "Switch", correct: false },
      { text: "Cabo", correct: false },
      { text: "Monitor", correct: false }
    ],
    hint: "Encaminha dados"
  },
  {
    question: "O que é um switch?",
    options: [
      { text: "Conecta dispositivos na rede", correct: true },
      { text: "Cria internet", correct: false },
      { text: "Protege vírus", correct: false },
      { text: "Armazena dados", correct: false }
    ],
    hint: "Rede local"
  },
  {
    question: "O que é um modem?",
    options: [
      { text: "Conecta à internet", correct: true },
      { text: "Armazena arquivos", correct: false },
      { text: "Cria rede local", correct: false },
      { text: "Processa dados", correct: false }
    ],
    hint: "ISP"
  },
  {
    question: "O que significa LAN?",
    options: [
      { text: "Rede local", correct: true },
      { text: "Rede mundial", correct: false },
      { text: "Rede sem fio", correct: false },
      { text: "Rede pública", correct: false }
    ],
    hint: "Área pequena"
  },
  {
    question: "O que significa WAN?",
    options: [
      { text: "Rede de longa distância", correct: true },
      { text: "Rede local", correct: false },
      { text: "Rede doméstica", correct: false },
      { text: "Rede privada", correct: false }
    ],
    hint: "Área grande"
  },
  {
    question: "O que é endereço IP?",
    options: [
      { text: "Identificação do dispositivo", correct: true },
      { text: "Nome do computador", correct: false },
      { text: "Tipo de cabo", correct: false },
      { text: "Programa", correct: false }
    ],
    hint: "Número único"
  },
  {
    question: "Qual IP é privado?",
    options: [
      { text: "192.168.1.1", correct: true },
      { text: "8.8.8.8", correct: false },
      { text: "1.1.1.1", correct: false },
      { text: "200.10.5.2", correct: false }
    ],
    hint: "Rede interna"
  },
  {
    question: "O que é DNS?",
    options: [
      { text: "Converte nomes em IP", correct: true },
      { text: "Bloqueia internet", correct: false },
      { text: "Cria rede", correct: false },
      { text: "Armazena dados", correct: false }
    ],
    hint: "Nome → IP"
  },
  {
    question: "O que é DHCP?",
    options: [
      { text: "Distribui IP automaticamente", correct: true },
      { text: "Protege rede", correct: false },
      { text: "Cria cabos", correct: false },
      { text: "Bloqueia sites", correct: false }
    ],
    hint: "IP automático"
  },

  {
    question: "O que é Wi-Fi?",
    options: [
      { text: "Rede sem fio", correct: true },
      { text: "Cabo de rede", correct: false },
      { text: "Servidor", correct: false },
      { text: "Protocolo", correct: false }
    ],
    hint: "Wireless"
  },
  {
    question: "O que é Ethernet?",
    options: [
      { text: "Rede cabeada", correct: true },
      { text: "Rede sem fio", correct: false },
      { text: "Servidor", correct: false },
      { text: "Firewall", correct: false }
    ],
    hint: "Cabo"
  },
  {
    question: "O que é firewall?",
    options: [
      { text: "Proteção da rede", correct: true },
      { text: "Cabo", correct: false },
      { text: "IP", correct: false },
      { text: "Servidor", correct: false }
    ],
    hint: "Segurança"
  },
  {
    question: "O que é ping?",
    options: [
      { text: "Teste de conexão", correct: true },
      { text: "Erro de rede", correct: false },
      { text: "Ataque", correct: false },
      { text: "Cabo defeituoso", correct: false }
    ],
    hint: "Resposta do host"
  },
  {
    question: "O que é servidor?",
    options: [
      { text: "Fornece serviços", correct: true },
      { text: "Recebe apenas dados", correct: false },
      { text: "É um cabo", correct: false },
      { text: "É um IP", correct: false }
    ],
    hint: "Atende clientes"
  },
  {
    question: "O que é cliente?",
    options: [
      { text: "Solicita serviços", correct: true },
      { text: "Armazena rede", correct: false },
      { text: "Bloqueia acesso", correct: false },
      { text: "Gerencia IP", correct: false }
    ],
    hint: "Usuário da rede"
  },
  {
    question: "O que é protocolo?",
    options: [
      { text: "Conjunto de regras", correct: true },
      { text: "Dispositivo", correct: false },
      { text: "Cabo", correct: false },
      { text: "IP", correct: false }
    ],
    hint: "Comunicação"
  },
  {
    question: "Qual protocolo da web?",
    options: [
      { text: "HTTP", correct: true },
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false },
      { text: "IP", correct: false }
    ],
    hint: "Sites"
  },
  {
    question: "O que é HTTPS?",
    options: [
      { text: "HTTP seguro", correct: true },
      { text: "HTTP lento", correct: false },
      { text: "Servidor", correct: false },
      { text: "Firewall", correct: false }
    ],
    hint: "Criptografia"
  },
  {
    question: "O que é FTP?",
    options: [
      { text: "Transferência de arquivos", correct: true },
      { text: "Navegação web", correct: false },
      { text: "E-mail", correct: false },
      { text: "Streaming", correct: false }
    ],
    hint: "Arquivos"
  },

  // 50
  {
    question: "O que é SMTP?",
    options: [
      { text: "Envio de e-mails", correct: true },
      { text: "Download", correct: false },
      { text: "Web", correct: false },
      { text: "Segurança", correct: false }
    ],
    hint: "Correio eletrônico"
  },
  {
    question: "O que é POP3?",
    options: [
      { text: "Receber e-mails", correct: true },
      { text: "Enviar e-mails", correct: false },
      { text: "Criar rede", correct: false },
      { text: "Bloquear spam", correct: false }
    ],
    hint: "Download de emails"
  },
  {
    question: "O que é IMAP?",
    options: [
      { text: "Sincroniza e-mails", correct: true },
      { text: "Apaga mensagens", correct: false },
      { text: "Envia spam", correct: false },
      { text: "Cria IP", correct: false }
    ],
    hint: "Servidor"
  },
  {
    question: "O que é largura de banda?",
    options: [
      { text: "Capacidade de transmissão", correct: true },
      { text: "Cabo físico", correct: false },
      { text: "Endereço IP", correct: false },
      { text: "Servidor", correct: false }
    ],
    hint: "Velocidade"
  },
  {
    question: "O que é latência?",
    options: [
      { text: "Tempo de resposta", correct: true },
      { text: "Velocidade máxima", correct: false },
      { text: "Erro", correct: false },
      { text: "Firewall", correct: false }
    ],
    hint: "Atraso"
  },
  {
    question: "O que é topologia de rede?",
    options: [
      { text: "Forma da rede", correct: true },
      { text: "Velocidade", correct: false },
      { text: "Segurança", correct: false },
      { text: "IP", correct: false }
    ],
    hint: "Estrutura"
  },
  {
    question: "Topologia em estrela usa:",
    options: [
      { text: "Switch central", correct: true },
      { text: "Apenas cabos", correct: false },
      { text: "Internet direta", correct: false },
      { text: "Antivírus", correct: false }
    ],
    hint: "Centro"
  },
  {
    question: "O que é rede peer-to-peer?",
    options: [
      { text: "Sem servidor central", correct: true },
      { text: "Com servidor", correct: false },
      { text: "Somente internet", correct: false },
      { text: "Somente Wi-Fi", correct: false }
    ],
    hint: "P2P"
  },
  {
    question: "O que é VPN?",
    options: [
      { text: "Rede privada virtual", correct: true },
      { text: "Rede pública", correct: false },
      { text: "Antivírus", correct: false },
      { text: "Servidor web", correct: false }
    ],
    hint: "Conexão segura"
  },
  {
    question: "O que é MAC Address?",
    options: [
      { text: "Endereço físico", correct: true },
      { text: "Endereço IP", correct: false },
      { text: "Nome do PC", correct: false },
      { text: "Protocolo", correct: false }
    ],
    hint: "Placa de rede"
  },

  // 100
  {
    question: "Qual camada do modelo OSI é a física?",
    options: [
      { text: "Camada 1", correct: true },
      { text: "Camada 3", correct: false },
      { text: "Camada 5", correct: false },
      { text: "Camada 7", correct: false }
    ],
    hint: "Cabo e sinais"
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
 
