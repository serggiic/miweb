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

// BOTÓN VOLVER ARRIBA + NAVBAR SCROLL

const volverArribaButton = document.getElementById("volver-arriba");
const navBar = document.querySelector('.contenedor-navegacion');

window.addEventListener("scroll", () => {
  // Botón volver arriba
  if (window.scrollY > 300) {
    volverArribaButton.classList.add("active");
  } else {
    volverArribaButton.classList.remove("active");
  }

  // Navbar shrink
  if (window.scrollY > 50) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

volverArribaButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ELEMENTOS ANIMACIÓN
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animar-scroll').forEach((el) => {
  observer.observe(el);
});