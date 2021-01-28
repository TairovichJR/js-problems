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
  /*
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
  */
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
}

//L1: Bartender, drinks!
const drinks = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  rapper: "Cristal",
};

function getDrinkByProfession(param) {
  //   let output = "Beer";
  //   switch (param.toLowerCase()) {
  //     case "jabroni":
  //       output = "Patron Tequila";
  //       break;
  //     case "school counselor":
  //       output = "Anything with Alcohol";
  //       break;
  //     case "programmer":
  //       output = "Hipster Craft Beer";
  //       break;
  //     case "bike gang member":
  //       output = "Moonshine";
  //       break;
  //     case "politician":
  //       output = "Your tax dollars";
  //       break;
  //     case "rapper":
  //       output = "Cristal";
  //       break;
  //   }
  //   return output;
  return drinks[param.toLowerCase()] || "Beer";
}

//Gravity Flip
const flip = (d, a) => {
  if (d === "R") return a.sort((a, b) => a - b);
  if (d === "L") return a.sort((a, b) => b - a);

  /*
  if (d === "R") {
    return a.sort(function (a, b) {
      return a - b;
    });
  } else if (d === "L") {
    return a.sort(function (a, b) {
      return b - a;
    });
  } else {
    return "Invalid Direction";
  }
  */
};

// Sum of positive
function positiveSum(arr) {
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i] >= 0 ? arr[i] : 0;
  //   }
  //   return sum;
  return arr.filter((x) => x >= 0).reduce((acc, cur) => acc + cur);
}

//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

//Smallest unused ID

function nextId(ids) {
  for (let i = 0; i < ids.length; i++) {
    if (ids.indexOf(i) == -1) {
      return i;
    }
  }
  return ids.length;
}
