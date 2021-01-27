"use strict";

function findDifference(a, b) {
  let aVolume = 1;
  for (let i = 0; i < a.length; i++) {
    aVolume = aVolume * a[i];
  }
  let bVolume = 1;
  for (let i = 0; i < b.length; i++) {
    bVolume = bVolume * b[i];
  }
  return Math.abs(aVolume - bVolume);
}

console.log(findDifference([2, 2, 3], [5, 4, 1]));

const b = [1, 2, 3];
console.log(b.reduce((a, b) => a * b));
