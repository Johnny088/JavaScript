let str =
  'lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, neque.';
function run_task1() {
  let count_space = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') count_space++;
  }
  console.log(`spaces in this sentence ${count_space} times.`);
}
function run_task2() {
  let temp = str[0].toUpperCase() + str.slice(1, str.length);
  console.log(`origin: ` + str);
  console.log(`copy: ` + temp);
}
function run_task3() {
  let temp3 = str.split(/[\s!?.]+/).filter(Boolean);
  console.log(temp3);
}
function run_task4() {
  let result = '';
  let test4 = prompt('enter the sentence for this task')
    .split(/[\s!?.]+/)
    .filter(Boolean);
  for (let i = 0; i < test4.length; i++) {
    result += test4[i][0].toUpperCase();
  }
  console.log(` abreveature is: ${result}`);
}
function run_task5() {
  let test5 = prompt(`type your sentence`)
    .split(/[\s!?.,]+/)
    .filter(Boolean);
  let result5 = '';
  let reverse = '';
  for (let i = 0; i < test5.length; i++) {
    result5 += test5[i].toUpperCase();
  }
  for (let i = result5.length - 1; i >= 0; i--) {
    reverse += result5[i];
  }
  if (result5 === reverse) {
    console.log(`the sentence is a palindrom`);
  } else {
    console.log(`it's not a palindrome`);
  }
}
function run_task6() {
  let protocol = '';
  let domen = '';
  // let path = '';
  let address = prompt('enter the adress');
  let splited_items = 4;
  result6 = address.split(/[:\/]/, splited_items).filter(Boolean);
  protocol = result6[0];
  domen = result6[1];
  let index = protocol.length + domen.length - 1;
  let path = address.slice(index + splited_items, address.length);
  // for (let i = index + splited_items; i < address.length; i++) {
  //   path += address[i];
  // }
  console.log(`protocol: ${protocol} \ndomen ${domen} \npath ${path}`);
  console.log(result6);
}
