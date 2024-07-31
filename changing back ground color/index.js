// let colors=['red','blue','yellow','green','orange','pink','gray']

//  let index;

// setInterval(function () {
//     index=Math.trunc(Math.random()*colors.length )
//   document.body.style.backgroundColor = colors[index];
// }, 1000);

//////////////////////////////// second solution  //////////////////////////////////////

let redValue;
let greenValue;
let blueValue;

setInterval(function () {
  redValue = Math.trunc(Math.random() * 255);
  greenValue = Math.trunc(Math.random() * 255);
  blueValue = Math.trunc(Math.random() * 255);

  document.body.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
}, 1000);
