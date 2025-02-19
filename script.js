const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const profilePic = document.getElementById('profile-pic');
let clickCount = 0;
let navClickCount = 0;

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

profilePic.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 5) {
    profilePic.src = 'img/newphoto.jpg'; // Asegúrate de tener esta imagen en la carpeta img
    clickCount = 0;
  }
});

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