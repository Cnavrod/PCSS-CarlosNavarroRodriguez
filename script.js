const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const profilePic = document.getElementById('profile-pic');
let clickCount = 0;
let navClickCount = 0;

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
    navClickCount++;
    if (navClickCount === 10) {
      showFullScreenImage('img/fali.jpg'); // Asegúrate de tener esta imagen en la carpeta img
      navClickCount = 0;
    }
    const target = link.getAttribute('href').substring(1);
    sections.forEach(sec => sec.classList.remove('active-section'));
    const targetSection = document.getElementById(target);
    targetSection.classList.add('active-section');
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