"use strict";

//Difference of Volumes of
function findDifference(a, b) {
  /*
  let aVolume = 1;
  for (let i = 0; i < a.length; i++) {
    aVolume = aVolume * a[i];
  }
  let bVolume = 1;
  for (let i = 0; i < b.length; i++) {
    bVolume = bVolume * b[i];
  }
  return Math.abs(aVolume - bVolume);
 */
  //optimizing the code
  return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));
}

console.log(findDifference([2, 2, 3], [5, 4, 1]));

// FIXME: Replace all dots
var replaceDots = function (str) {
  return str.replace(/\./g, "-");
};

// Quarter of the year
const quarterOf = (month) => {
  // Your code here
  /*
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else if (month >= 10 && month <= 12) {
    return 4;
  }
*/
  return Math.ceil(month / 3);
};

//Grasshopper - Grade book
function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  if (avg >= 90 && avg <= 100) {
    return "A";
  } else if (avg >= 80 && avg < 90) {
    return "B";
  } else if (avg >= 70 && avg < 80) {
    return "C";
  } else if (avg >= 60 && avg < 70) {
    return "D";
  } else if (avg >= 0 && avg < 60) {
    return "F";
  } else {
    return "invalid number";
  }
}
