// Animate logo with rotation
const logo = document.getElementById('logo');
if (logo) {
  let angle = 0;
  setInterval(() => {
    angle = (angle + 2) % 360;
    logo.style.transform = `rotate(${angle}deg)`;
  }, 30);
}
// Add more interactivity as needed
