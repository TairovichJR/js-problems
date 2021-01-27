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
