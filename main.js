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

// ------------------------------------------------------------------task2--------------------------------------------------------------------

let flag2 = 0;
const pictures = [
  './images/joker.jpg',
  './images/r3kl.png',
  './images/test1.jpeg',
  './images/test2.jpeg',
];
const carousel = document.getElementById('img__container');
const btn__forward = document.getElementById('btn__forward');
const btn__back = document.getElementById('btn__back');
function arrowMove(event) {
  const temp = event.target.closest('li').id;
  if (temp == 'btn__forward' && flag2 < 3) {
    if (flag2 == 0) {
      carousel.src = './images/r3kl.png';
      btn__back.style.fill = 'red';
      btn__back.style.stroke = 'orange';
      flag2 += 1;
    } else if (flag2 == 1) {
      carousel.src = './images/test1.jpeg';
      flag2 += 1;
    } else if (flag2 == 2) {
      carousel.src = './images/test2.jpeg';
      flag2 += 1;
      btn__forward.style.fill = 'gray';
      btn__forward.style.stroke = 'gray';
    }
  }
  if (temp == 'btn__back' && flag2 > 0) {
    if (flag2 == 3) {
      carousel.src = './images/test1.jpeg';
      btn__forward.style.fill = 'red';
      btn__forward.style.stroke = 'orange';
      flag2 -= 1;
    } else if (flag2 == 2) {
      carousel.src = './images/r3kl.png';
      flag2 -= 1;
    } else if (flag2 == 1) {
      carousel.src = './images/joker.jpg';
      flag2 -= 1;
      btn__back.style.fill = 'gray';
      btn__back.style.stroke = 'gray';
    }
  }
}

//---------------------------------------------------task3-----------------------------------------------
const color = document.getElementById('colorTest');
function setColor(event) {
  const temp = event.target.closest('li').id;
  if (temp == 'item1') {
    color.style.color = 'rgb(15, 21, 21)';
  } else if (temp == 'item2') {
    color.style.color = 'rgb(29, 13, 146)';
  } else if (temp == 'item3') {
    color.style.color = 'rgb(238, 111, 7)';
  } else if (temp == 'item4') {
    color.style.color = 'rgb(212, 18, 135)';
  } else if (temp == 'item5') {
    color.style.color = 'rgb(5, 93, 20)';
  } else if (temp == 'item6') {
    color.style.color = 'rgb(208, 214, 93)';
  } else if (temp == 'item7') {
    color.style.color = 'rgb(16, 5, 98)';
  } else if (temp == 'item8') {
    color.style.color = 'rgb(244, 126, 9)';
  } else if (temp == 'item9') {
    color.style.color = 'rgb(216, 214, 225)';
  } else if (temp == 'item10') {
    color.style.color = 'rgb(16, 15, 22)';
  } else if (temp == 'item11') {
    color.style.color = 'rgb(169, 21, 147)';
  } else if (temp == 'item12') {
    color.style.color = 'rgb(10, 227, 223)';
  } else if (temp == 'item13') {
    color.style.color = 'rgb(95, 8, 8)';
  } else if (temp == 'item14') {
    color.style.color = 'rgb(183, 108, 108)';
  } else if (temp == 'item15') {
    color.style.color = 'rgb(53, 64, 212)';
  } else if (temp == 'item16') {
    color.style.color = 'rgb(18, 175, 207)';
  } else if (temp == 'item17') {
    color.style.color = 'rgb(73, 94, 109)';
  } else if (temp == 'item18') {
    color.style.color = 'rgb(154, 14, 197)';
  }
}
