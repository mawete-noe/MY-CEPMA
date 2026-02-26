// Dados de cada tópico
const topics = {
  tic: {
    title: "TIC - Tecnologias de Informação e Comunicação",
    text: "TIC são todas as tecnologias usadas para comunicação e processamento de informação...",
    pdf: "pdfs/tic.pdf",
    videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"],
    recommendations: ["https://pt.wikipedia.org/wiki/TIC", "https://www.techtudo.com.br/"]
  },
  programacao: {
    title: "Programação",
    text: "Programação é a arte de escrever códigos que instruem o computador...",
    pdf: "pdfs/programacao.pdf",
    videos: ["https://www.youtube.com/embed/VIDEO_ID"],
    recommendations: ["https://developer.mozilla.org/pt-BR/", "https://www.w3schools.com/"]
  },
  redes: {
    title: "Redes",
    text: "Redes de computadores são sistemas que conectam dispositivos para trocar dados...",
    pdf: "pdfs/redes.pdf",
    videos: ["https://www.youtube.com/embed/VIDEO_ID"],
    recommendations: ["https://pt.wikipedia.org/wiki/Rede_de_computadores"]
  }
};

// Elementos do HTML
const topicButtons = document.querySelectorAll(".topics-menu button");
const topicTitle = document.querySelector(".topic-title");
const topicText = document.querySelector(".topic-text");
const pdfLink = document.querySelector(".download-pdf");
const videoSection = document.querySelector(".video-section");
const recommendationList = document.querySelector(".recommendation-list");

// Função para carregar conteúdo do tópico
function loadTopic(topicKey) {
  const topic = topics[topicKey];
  topicTitle.textContent = topic.title;
  topicText.textContent = topic.text;
  pdfLink.href = topic.pdf;

  // Carregar vídeos
  videoSection.innerHTML = "";
  topic.videos.forEach(url => {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    videoSection.appendChild(iframe);
  });

  // Carregar recomendações
  recommendationList.innerHTML = "";
  topic.recommendations.forEach(link => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
    recommendationList.appendChild(li);
  });
}

// Eventos dos botões
topicButtons.forEach(btn => {
  btn.addEventListener("click", () => loadTopic(btn.dataset.topic));
});