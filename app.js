let obj = {
  name: "sidh",
  age: 323,
  gender: () => {
    console.log(this);
  },
};

let a = [2];
let b = "2 she has";

// console.log(
//   b
//     .split(" ")
//     .filter((word) => isNaN(word))
//     .map((word, index) => {
//       word.toLowerCase();
//       word[0].toUpperCase();
//       return word;
//     })
// );

let ar = [
  2, 1, 4, 5, 6, 7, 8, 9, 9, 9, 10, 11, 12, 33, 21, 34, 545, 56, 134, 54, 13,
  31,
];

let seen = new Set();

let Duplicate = () => {
  let duplicat = [];

  for (let i = 0; i < ar.length; i++) {
    if (seen.has(ar[i])) {
      if (!duplicat.includes(ar[i])) {
        duplicat.push(ar[i]);
      }
    } else {
      seen.add(ar[i]);
    }
  }
  return duplicat;
};

let namE = "Hello World";

let newnamE = namE
  .split(" ")
  .map((word) => {
    return word
      .split("")
      .map((ltr, index) => {
        return index === word.length - 1 ? ltr.toUpperCase() : ltr;
      })
      .join("");
  })
  .join(" ");
console.log(newnamE);
