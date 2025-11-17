console.log('Task1 ==> which number is bigger');
let a = +prompt('enter the first number: ');
let b = +prompt('enter the second number: ');
function bigger(a, b) {
  if (a > b) return a;
  else return b;
}
let result = console.log(`the bigger number is ${bigger(a, b)}`);

console.log('task2 ==> calculator');
function calculator(a, b, key) {
  switch (key) {
    case '+': {
      return `${a} + ${b} = ${a + b}`;
    }
    case '-': {
      return `${a} - ${b} = ${a - b}`;
    }
    case '*': {
      return `${a} * ${b} = ${a * b}`;
    }
    case '/': {
      return `${a} / ${b} = ${a / b}`;
    }
    default:
      break;
  }
}

a = +prompt('enter the first number (calculator): ');
b = +prompt('enter the second number (calculator): ');
let key = prompt('enter the operator (+/-/*/ /): ');
result = console.log(calculator(a, b, key));

console.log('task3 find the module');
function module(a) {
  if (a > 0) return a;
  else return a * -1;
}
a = +prompt('enter the number (module): ');
result = console.log(` module from ${a} is ${module(a)}`);

console.log('task 4  how many days in given year');
function numberOfDays(a) {
  if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
    return `the ${a} has 366 days`;
  } else return `the ${a} has 365 days`;
}
a = +prompt('enter the year you need to figure out: ');
result = console.log(numberOfDays(a));
