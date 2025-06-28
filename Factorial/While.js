function factorial(num) {
  let factorial;
  if (num == 0) factorial = num;

  while (num > 0) {
    factorial = num * (factorial || 1);
    num--;
  }
  return factorial;
}

console.log(factorial(4));
