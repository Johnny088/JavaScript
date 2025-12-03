const bnt_click = document.getElementById('btn_random');
const number = document.getElementById('random');
function random() {
  number.innerHTML = Math.floor(Math.random() * 101);
}
bnt_click.onclick = random;
function move(event) {
  console.log(event.x);
  //   const x = movementX;
  //   const y = movementY;
}
document.addEventListener('mousemove', move);
