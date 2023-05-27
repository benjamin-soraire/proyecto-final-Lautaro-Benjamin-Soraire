document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;

  function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[index].style.display = 'block';
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  showSlide(currentSlide);

  setInterval(nextSlide, 5000);
});