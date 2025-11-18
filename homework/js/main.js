const current_year = 2025;
function fit_files() {
  let space = +prompt('enter the card capacity: ');
  let space_mb = space * 1024;
  let result2 = console.log(
    `your flash card can fit ${(space_mb / 820) | 0}  files`
  );
}
function runTask1() {
  let temp_year = +prompt('Enter your birth year: ');
  let result = console.log(
    `your age is: ${current_year - temp_year} years old`
  );
  fit_files();
}
function runTask2() {
  let symbol = +prompt(`enter the number from 0 to 9`);
  let result3;
  switch (symbol) {
    case 1:
      result3 = console.log(`your number is ${symbol} and symbol is !`);
      break;
    case 2:
      result3 = console.log(`your number is ${symbol} and  symbol is @`);
      break;
    case 3:
      result3 = console.log(`your number is ${symbol} and  symbol is #`);
      break;
    case 4:
      result3 = console.log(`your number is ${symbol} and  symbol is $`);
      break;
    case 5:
      result3 = console.log(`your number is ${symbol} and  symbol is %`);
      break;
    case 6:
      result3 = console.log(`your number is ${symbol} and  symbol is ^`);
      break;
    case 7:
      result3 = console.log(`your number is ${symbol} and  symbol is &`);
      break;
    case 8:
      result3 = console.log(`your number is ${symbol} and  symbol is *`);
      break;
    case 9:
      result3 = console.log(`your number is ${symbol} and  symbol is (`);
      break;
    case 0:
      result3 = console.log(`your number is ${symbol} and  symbol is )`);
      break;
    default:
      result3 = console.error(
        ` your number is ${symbol}... I think you should study math`
      );
      break;
  }
}
//--------------------------------------- task 3 -----------------------------
function runTask3() {
  let start = +prompt(`enter the first namber: `);
  let end = +prompt(`enter the second number`);
  let temp;
  let result4 = 0;
  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }
  for (let i = start; i <= end; i++) {
    result4 += i;
  }
  console.log(`the sum of the range from ${start} to ${end} is ${result4}`);
}

function runTask4() {
  alert('there can be your ads');
}
