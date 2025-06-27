let ar = [1, 2, 3, 11, 21, 33, 35, 42, 43, 53, 55];
let prime = [];

isPrime = (num) => {
  if (num < 2) return false;
  if (num == 2) return true;
  if (num % 2 == 0) return false;

  for (let i = 3; i <= num / 2; i += 2) {
    if (num % i == 0) return false;
  }
  return true;
};

// let prime = ar.filter(isPrime)
for (let i = 0, k; i < ar.length; i++) isPrime(ar[i]) ? prime.push(ar[i]) : k++;

console.log(prime);
