function iniciarCarousel(){
  let currentIndex = 0;
  const carousel = document.getElementById("carousel");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  document.getElementById("prevBtn").onclick = function () {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  };
  document.getElementById("nextBtn").onclick = function () {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  };

  updateCarousel();
};
window.iniciarCarousel = iniciarCarousel;
