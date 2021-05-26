// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const measureKelvin = function () {
//   const measure = {
//     type: "temp",
//     unit: "celsius",
//     value: prompt("Type in degrees celsius"),
//   };

//   const kelvin = Number(measure.value) + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const data = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let tempData = "";

  for (let i = 0; i < arr.length; i++) {
    tempData = tempData.concat(
      `... ${arr[i]}C in ${i + 1 > 1 ? `${i + 1} days` : `${i + 1} day`}`
    );
  }
  return tempData;
}

console.log(printForecast(data));
