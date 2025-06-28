let ar = [1, 2, 3, 2, 4, 5, 1, 6, 4];
let duplicat = [];

let seen = new Set();

function duplicate() {
  for (let i = 0; i < ar.length; i++) {
    seen.has(ar[i])
      ? !duplicat.includes(ar[i])
        ? duplicat.push(ar[i])
        : null
      : seen.add(ar[i]);
  }

  return duplicat;
}

console.log(duplicate().length);
