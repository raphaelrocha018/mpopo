export default function initAnimaSlide() {
  document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.home-slide img');
    let currentSlide = 0;

    function showNextSlide() {
      const previousSlide = currentSlide;
      currentSlide = (currentSlide + 1) % slides.length;

      slides[previousSlide].classList.remove('active');
      slides[previousSlide].style.zIndex = 0;

      slides[currentSlide].classList.add('active');
      slides[currentSlide].style.zIndex = 1;
    }

    // Mostrar a primeira imagem
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.zIndex = 1;

    // Alterar a imagem a cada 10 segundos
    setInterval(showNextSlide, 15000);
  });
}
