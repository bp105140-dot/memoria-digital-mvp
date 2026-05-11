const typewriterMessage = "Crie uma pagina-presente com fotos, musica, linha do tempo, retrospectiva animada, link publico e QR Code em uma experiencia pronta para compartilhar.";

const builderContent = [
  {
    title: "Dados basicos",
    text: "O usuario define quem presenteia, quem recebe, a relacao, a data especial, o titulo do presente e a mensagem principal."
  },
  {
    title: "Fotos",
    text: "Upload multiplo com reorganizacao, escolha de foto de capa, remocao e preparacao para paginas leves e bonitas."
  },
  {
    title: "Musica",
    text: "Entrada por link do Spotify ou YouTube no MVP, com fallback visual caso o embed nao carregue corretamente."
  },
  {
    title: "Timeline",
    text: "Marcos emocionais com data, titulo, descricao e foto opcional para contar a historia em ordem cronologica."
  },
  {
    title: "Preview e pagamento",
    text: "Preview mobile-first, checkout com Pix e publicacao automatica do link e do QR Code apos aprovacao."
  }
];

const typewriterTarget = document.getElementById("typewriter-text");
const backToTopButton = document.getElementById("back-to-top");
const builderSteps = document.querySelectorAll(".builder-step");
const builderPreview = document.getElementById("builder-preview");
const faqItems = document.querySelectorAll(".faq-item");
const demoModal = document.getElementById("demo-modal");
const openDemoButton = document.getElementById("open-demo");
const closeDemoButton = document.getElementById("close-demo");

function typeWriterEffect(text, target, speed = 20) {
  let index = 0;

  function writeCharacter() {
    if (index <= text.length) {
      target.textContent = text.slice(0, index);
      index += 1;
      window.setTimeout(writeCharacter, speed);
    }
  }

  writeCharacter();
}

function observeRevealElements() {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealElements.forEach((element) => observer.observe(element));
}

function updateBuilderStep(index) {
  const content = builderContent[index];

  builderSteps.forEach((step, stepIndex) => {
    step.classList.toggle("active", stepIndex === index);
  });

  builderPreview.innerHTML = `
    <h3>${content.title}</h3>
    <p>${content.text}</p>
  `;
}

function bindBuilderSteps() {
  builderSteps.forEach((step, index) => {
    step.addEventListener("click", () => updateBuilderStep(index));
  });
}

function bindFaq() {
  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-question");
    button.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}

function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function bindDemoModal() {
  openDemoButton.addEventListener("click", () => openModal(demoModal));
  closeDemoButton.addEventListener("click", () => closeModal(demoModal));

  demoModal.querySelectorAll("[data-close='true']").forEach((overlay) => {
    overlay.addEventListener("click", () => closeModal(demoModal));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal(demoModal);
    }
  });
}

function bindBackToTop() {
  window.addEventListener("scroll", () => {
    backToTopButton.classList.toggle("visible", window.scrollY > 480);
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

typeWriterEffect(typewriterMessage, typewriterTarget);
observeRevealElements();
updateBuilderStep(0);
bindBuilderSteps();
bindFaq();
bindDemoModal();
bindBackToTop();
