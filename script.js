const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const profilePic = document.getElementById('profile-pic');
let clickCount = 0;

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
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
    profilePic.src = 'img/ontiveros.jpg'; // Asegúrate de tener esta imagen en la carpeta img
    clickCount = 0;
  }
});