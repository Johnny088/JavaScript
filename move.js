const moving = document.getElementById('move_act');
// const btnInfo = document.getElementById('button__info');
function info() {
  move_act.innerHTML += '<br> new';
}
function move(event) {
  const x = event.pageX;
  const y = event.pageY;
  move_act.innerHTML = `x: ${x} y: ${y}`;
  console.log(`x:${event.x} y:${event.y}`);
}
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', move);
});
//document.addEventListener('mousemove', move);
