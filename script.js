// Seleção de elementos
const slideElements = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const backToTopButton = document.querySelector('.back-to-top');

// Índice do slide atual
let currentSlideIndex = 0;

// Atualiza a posição do slide com base no índice atual
function updateSlidePosition() {
    const offsetPercentage = -currentSlideIndex * 100;
    slidesContainer.style.transform = `translateX(${offsetPercentage}%)`;
}

// Mostra o slide no índice especificado
function showSlide(index) {
    if (index >= slideElements.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slideElements.length - 1;
    } else {
        currentSlideIndex = index;
    }
    updateSlidePosition();
}

// Navega para o slide anterior
function goToPreviousSlide() {
    showSlide(currentSlideIndex - 1);
}

// Navega para o próximo slide
function goToNextSlide() {
    showSlide(currentSlideIndex + 1);
}

// Inicializa o primeiro slide
function initializeSlider() {
    showSlide(currentSlideIndex);
}

// Alterna a visibilidade do botão "Voltar ao topo" com base na rolagem da página
function handleScroll() {
    if (window.pageYOffset > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

// Configuração dos ouvintes de eventos
function setupEventListeners() {
    prevButton.addEventListener('click', goToPreviousSlide);
    nextButton.addEventListener('click', goToNextSlide);
    window.addEventListener('scroll', handleScroll);
}

// Inicializa o slider e os ouvintes de eventos
function initialize() {
    initializeSlider();
    setupEventListeners();
}

// Executa a inicialização quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', initialize);
