function factorial(num) {
 let factorial ;
  do{
   factorial = num * (factorial || 1)
   num --;
  }while(num > 0)
return factorial
}

console.log(factorial(2));