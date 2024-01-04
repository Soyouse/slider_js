document.addEventListener('DOMContentLoaded', (event) => {
  // Sélectionner spécifiquement l'icône du menu burger
  var burgerIcon = document.getElementById('burger-icon');

  // Attacher le gestionnaire d'événement de clic à l'icône du menu burger
  burgerIcon.addEventListener('click', toggleMenu);
});

function toggleMenu() {
  var menu = document.getElementById("menuItems");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
// Slider
var slideIndex = 1; // Commencez à partir du premier slide
var slides = document.getElementsByClassName("slide");
var slideInterval = setInterval(showSlides, 2000); // Change image every 2 seconds

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    slides[slideIndex - 1].style.opacity = "1";
    slideIndex++;
}

function changeSlide(n) {
    clearInterval(slideInterval); // Annuler le timer précédent
    slideIndex += n - 1;
    showSlides();
    slideInterval = setInterval(showSlides, 2000); // Redémarrer le timer
}

// Démarrer le slider
showSlides();