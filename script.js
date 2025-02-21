const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const profilePic = document.getElementById('profile-pic');
let clickCount = 0;

// Objeto para contar los clics por cada botón de navegación
let navClickCounts = {};

// Mapeo de id de sección a imagen completa
const fullImages = {
  about: 'img/fali.jpg',
  habilidades: 'img/ontiveros.jpg',
  aptitudes: 'img/churumbel.jpg',
  experiencia: 'img/brian.jpg',
  educacion: 'img/chris.jpg',
  voluntariado: 'img/diak.jpg'
};

// Función para mostrar imagen en pantalla completa
function showFullScreenImage(src) {
  const img = document.createElement('img');
  img.src = src;
  img.style.position = 'fixed';
  img.style.top = '0';
  img.style.left = '0';
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';
  img.style.zIndex = '10000';
  img.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  img.style.cursor = 'pointer';
  
  let imgClickCount = 0;
  img.addEventListener('click', () => {
    imgClickCount++;
    if (imgClickCount === 5) {
      document.body.removeChild(img);
    }
  });
  
  document.body.appendChild(img);
}

// Manejo de clics en los enlaces de navegación
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);
    
    // Inicializamos el contador para esta sección si no existe
    if (!navClickCounts[target]) {
      navClickCounts[target] = 0;
    }
    navClickCounts[target]++;
    if (navClickCounts[target] === 10) {
      // Si existe una imagen para esta sección se muestra en pantalla completa
      if (fullImages[target]) {
        showFullScreenImage(fullImages[target]);
      }
      navClickCounts[target] = 0;
    }
    
    // Realizamos el scroll hacia la sección sin ocultar nada
    const targetSection = document.getElementById(target);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Manejo de clics en la imagen de perfil
profilePic.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 5) {
    profilePic.src = 'img/ontiveros.jpg'; // Asegúrate de tener esta imagen en la carpeta img
    clickCount = 0;
  }
});

// Intersection Observer para mostrar secciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active-section');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});