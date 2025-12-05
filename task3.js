const textState = document.getElementById('text');
//
//
//
let flag = false;
function visibility() {
  if (!flag) {
    textState.style.opacity = 0;
    flag = true;
  } else {
    textState.style.opacity = 1;
    flag = false;
  }
}

// -------------------------------------task 4----------------------------------------------------
const textInfo = document.getElementById('task4_info');

const htmlInfo = `const htmlInf = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              incidunt ullam perspiciatis facilis? Expedita hic vel ex corporis!
              Assumenda laborum eaque eius reprehenderit soluta dignissimos
              fugit nobis id illum, mollitia quam dicta rerum, perspiciatis
              reiciendis architecto porro consequuntur non fuga.";
`;
const cssInfo = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque eveniet quod temporibus, et alias dolorum provident rem delectus quidem sequi.`;
const jsInfo = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              laboriosam iusto suscipit! Sit, obcaecati. Praesentium id vero
              nesciunt eaque ipsum cum, laboriosam deserunt qui veritatis rem,
              tempore beatae odio at!`;
function html() {
  textInfo.innerHTML = htmlInfo;
}
function css() {
  textInfo.innerHTML = cssInfo;
}
function js() {
  textInfo.innerHTML = jsInfo;
}

//---------------------------------------------------------------------------------task5----------------------------
let newsBox = document.getElementById('news__list');
function removeId(event) {
  let temp = event.target.closest('li').id;
  const id = document.getElementById(temp);
  console.log(id);
  id.remove();
}

// -[-------------------------------------------task6----------------------------------------------]-
let lightFlag = 0;
let defaulColor = 'rgb(83, 74, 74)';
let greenColor = 'rgba(23, 124, 40, 1)';
let yellowColor = 'rgba(221, 196, 51, 1)';
let redColor = 'rgba(219, 27, 43, 1)';
let firstItem = document.getElementById('item1');
let secondItem = document.getElementById('item2');
let thirdItem = document.getElementById('item3');
function next() {
  if (lightFlag === 0) {
    firstItem.style.background = greenColor;
    secondItem.style.background = defaulColor;
    thirdItem.style.background = defaulColor;
    console.log(lightFlag);
    lightFlag += 1;
  } else if (lightFlag === 1) {
    firstItem.style.background = defaulColor;
    secondItem.style.background = yellowColor;
    thirdItem.style.background = defaulColor;
    console.log(lightFlag);
    lightFlag += 1;
  } else if (lightFlag === 2) {
    firstItem.style.background = defaulColor;
    secondItem.style.background = defaulColor;
    thirdItem.style.background = redColor;
    console.log(lightFlag);
    lightFlag = 0;
  }
}

// ------------------------------------------------------task7---------------------------------------------
let active = 'rgba(233, 120, 14, 1)';
let passive = 'rgb(240, 217, 186)';
activeItem = null;
let idBook;
function spotlight(event) {
  if (activeItem) {
    console.log(activeItem);
    activeItem.style.background = passive;
  }
  let temp = event.target.closest('li').id;
  idBook = document.getElementById(temp);
  console.log(idBook);
  activeItem = idBook;
  activeItem.style.background = active;
}
