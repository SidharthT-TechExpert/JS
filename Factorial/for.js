function factorial(num) {
  let factorial;
  for (let i = 1; i <= num; i++) {
    factorial = i * (factorial || 1);
  }
  return factorial;
}

console.log(factorial(5));