/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

// EXERCISE #1
// Write a program that sums all the numbers divisible by 3 or 5 below 1000. For example: All the numbers divisible by 3 or 5 below 10 are: 3,5,6,9 and their sum is 23.

// window.onload = function() {
//   //For Loop
//   var i;
//   let sum = 0;
//   for (i = 0; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0);
//     {
//       sum = sum + i;
//       console.log(i);
//     }
//     console.log(sum);
//   }
// };

window.onload = function() {
  //While Loop
  var i;
  let sum = 0;
  while (i < 1000) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i;
      console.log(i);
    }
    console.log(sum);
  }
};
