function convertToRoman(num) {
  let romanNumeral = ""
  while (num > 0) {
    //console.log(romanNumeral, num);

    if (num < 4) {
      decrementAndAddNumeral("I", 1);
    } else if (num == 4) {
      decrementAndAddNumeral("IV", 4);
    } else if (num >= 5 && num < 9) {
      decrementAndAddNumeral("V", 5);
    } else if (num == 9) {
      decrementAndAddNumeral("IX", 9);
    } else if (num >= 10 && num < 40) {
      decrementAndAddNumeral("X", 10);
    } else if (num >= 40 && num < 50) {
      decrementAndAddNumeral("XL", 40);
    } else if (num >= 50 && num < 90) {
      decrementAndAddNumeral("L", 50);
    } else if (num >= 90 && num < 100) {
      decrementAndAddNumeral("XC", 90);
    } else if (num >= 100 && num < 400) {
      decrementAndAddNumeral("C", 100);
    } else if (num >= 400 && num < 500) {
      decrementAndAddNumeral("CD", 400);
    } else if (num >= 500 && num < 900) {
      decrementAndAddNumeral("D", 500);
    } else if (num >= 900 && num < 1000) {
      decrementAndAddNumeral("CM", 900);
    } else {
      decrementAndAddNumeral("M", 1000);
    } /*else {
      decrementAndAddNumeral("_", 1);
    }*/

  function decrementAndAddNumeral(letter, decrementAmount) {
    romanNumeral += letter;
    num -= decrementAmount;
  }

  }
  return romanNumeral;
}

let result = convertToRoman(3999);
console.log(result);