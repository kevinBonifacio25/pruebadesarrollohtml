
const track = document.querySelector('.carousel__track');
const slides = document.querySelectorAll('.carousel__track img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index++;
    if (index >= slides.length) {
        index = 0; // vuelve al inicio
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = slides.length - 1; // va al final
    }
    updateCarousel();
});



//<!-- javaScript del menú hamburguesa -->//
document.addEventListener("DOMContentLoaded", () => { 

    const navList = document.querySelector(".nav__list"); //<!--selecciona el elemento de la lista de navegación-->//
    const toggle = document.querySelector(".menu-toggle"); //<!--selecciona el elemento del botón de menú-->//

    toggle.addEventListener("click", () => {

        navList.classList.toggle("active");

        toggle.textContent = navList.classList.contains("active")
            ? "✖"
            : "☰";
    });

});


//<!-- cierra el menú al hacer click en un enlace -->//
document.querySelectorAll(".nav__list a").forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("active"); //<!--remueve el estado activo del menú y lo cierra-->//
        toggle.textContent = "☰";
    });
});