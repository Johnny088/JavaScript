const counter = document.getElementById('counter');
counter.innerText = 0;
function move(event) {
  let temp = event.target.id;

  if (temp == 'up') {
    counter.innerText = parseInt(counter.innerText) + 1;
  } else {
    counter.innerText -= 1;
  }
}
