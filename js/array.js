let array1 = new Array(20);
function run_task1() {
  for (let i = 0; i < 20; i++) {
    array1[i] = Math.floor(Math.random() * 89 + 10);
  }
  console.log(`your array is: ${array1}`);
}

function run_task2() {
  for (let i = 0; i < 20; i++) {
    console.log(`index [${i}] - ${array1[i]}`);
  }
}
function run_task3() {
  let count = 0;
  console.log(`task 3 dividing by 7`);
  for (let i = 0; i < 20; i++) {
    if (array1[i] % 7 == 0) {
      count++;
      console.log(`index [${i}] - ${array1[i]}`);
    }
  }
  if (count == 0) {
    console.log(`there isn't any number divided by 7`);
  }
}

function run_task4() {
  console.log(`sort by desc`);
  array1.sort((a, b) => b - a);
  for (let i = 0; i < 20; i++) {
    console.log(`index [${i}] - ${array1[i]}`);
  }
}
