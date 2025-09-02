import { calculate } from "./compoundMath.js";

const resultTextOne = document.getElementById("resultTextOne");
const resultTextThree = document.getElementById("resultTextThree");
const resultGraphScale = document.getElementById("resultGraphScale");
const scaleNumberMax = document.getElementById("scaleNumberMax");
const scaleNumberMin = document.getElementById("scaleNumberMin");

let percentage = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

function display() {
  let results = calculate();
  let withCompound = results.withCompound;
  let withoutCompound = results.withoutCompound;

  let firstNumber = withoutCompound[0];
  let lastNumber = withCompound[withCompound.length - 1];
  let listLength = withCompound.length - 1;

  resultTextOne.innerHTML = `In ${listLength} Years`;
  resultTextThree.innerHTML = `$${lastNumber}`;

  //GRAPH

  resultGraphScale.innerHTML = `<div class="scaleNumber" id="scaleNumberMax">$${lastNumber}</div>`;

  for (let i = 8; i >= 0; i--) {
    console.log(percentage[i]);
    resultGraphScale.innerHTML += `<div class="scaleNumber">$${(lastNumber * percentage[i]).toFixed(2)}</div>`;
  }

  resultGraphScale.innerHTML += `<div class="scaleNumber" id="scaleNumberMax">$${firstNumber}</div>`;
}

export { display };
