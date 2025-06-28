function checkEven(num) {

if (num === '' || num === null || num === undefined || isNaN(num)) {
    console.log("Invalid Number");
    return;
  }

  let value = Number(num); // Convert to number

  switch (value % 2) {
    case 0:
      console.log(value, "is Even Number");
      break;
    case 1:
    case -1:
      console.log(value, "is Odd Number");
      break;
    default:
      console.log("Invalid Number");
  }
}

checkEven("");       // Invalid Number
checkEven("10");     // 10 is Even Number
checkEven("7");      // 7 is Odd Number
checkEven("abc");    // Invalid Number
checkEven(true);     // 1 is Odd Number
checkEven(null);     // 0 is Even Number
