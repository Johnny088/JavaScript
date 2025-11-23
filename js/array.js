let array1 = new Array(20);
let array_copy = new Array();
function run_task1() {
  for (let i = 0; i < array1.length; i++) {
    array1[i] = Math.floor(Math.random() * 89 + 10);
  }
  console.log(`your array is: ${array1}`);
}

function run_task2() {
  for (let i = 0; i < array1.length; i++) {
    console.log(`index [${i}] - ${array1[i]}`);
  }
}
function run_task3() {
  let count = 0;
  console.log(`task 3 dividing by 7`);
  for (let i = 0; i < array1.length; i++) {
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
  for (let i = 0; i < array1.length; i++) {
    console.log(`index [${i}] - ${array1[i]}`);
  }
}

function run_task5() {
  console.log(`task 5 need to fill the second part of  array by 0`);
  for (let i = 0; i < array1.length; i++) {
    if (i > array1.length / 2) {
      array1[i] = 0;
    }
  }
}
function run_task6() {}
function run_task6() {
  console.log(`dropping  tree elements from the begining`);
  array1.splice(0, 3);
  run_task2();
}
function run_task7() {
  let count_same = 0;
  for (let i = 0; i < array1.length - 1; i++)
    for (let j = i + 1; j < array1.length; j++) {
      if (array1[i] === array1[j]) {
        count_same++;
      }
    }
  console.log(`Count of similar numbers is: ${count_same}`);
}
function run_task8() {
  console.log(`making the copy without the last element`);
  array_copy = array1.slice(0, array1.length - 1);
  for (let i = 0; i < array_copy.length; i++) {
    console.log(`index [${i}] - ${array_copy[i]}`);
  }
}
function run_task9() {
  console.log(`task 9 count the number of even numbers`);
  let count_even = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 == 0) {
      count_even++;
    }
  }
  console.log(`the number of even numbers in this array is: ${count_even}`);
}
