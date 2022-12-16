const path = document.getElementById('path');
const fire = document.getElementById('fire-should-be-here');

function update() {
  const d = document.body.offsetHeight / path.getTotalLength();
  const offset = Math.floor(window.pageYOffset / d) + 450;
  const firePoint = path.getPointAtLength(1704 + 500 - offset);

  path.style.strokeDashoffset = offset;
  fire.setAttribute('cx', firePoint.x);
  fire.setAttribute('cy', firePoint.y);
}

update();

window.addEventListener('scroll', update);