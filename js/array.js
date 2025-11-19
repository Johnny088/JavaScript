function run_task1() {
  let array1 = new Array(20);
  for (let i = 0; i < 20; i++) {
    array1[i] = Math.floor(Math.random() * 89 + 10);
  }
  console.log(`your array is: ${array1}`);
}
