let ar = [1, 30, 2, 3, 2, 4, 5, 1, , 45, 6, 4, 15, 18, 24, 75];

console.log(Fiz_Buz());

function Fiz_Buz() {
  for (let num of ar) {
    if (num % 3 == 0 && num % 5 == 0) {
      console.log(" Fiz Buz");
    } else if (num % 3 == 0) {
      console.log(" Fiz ");
    } else if (num % 5 == 0) {
      console.log(" Buz");
    }
  }
}
