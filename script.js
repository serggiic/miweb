// MENÚ MÓVIL
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.enlaces');

// abrir/cerrar
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('is-active'); 
});

//Cerrar el menú automáticamente
document.querySelectorAll('.enlaces a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('is-active');
    });
});

// BOTÓN VOLVER ARRIBA

const volverArribaButton = document.getElementById("volver-arriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    volverArribaButton.classList.add("active");
  } else {
    volverArribaButton.classList.remove("active");
  }
});

volverArribaButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
});