import { calculate } from "./compoundMath.js";

const resultTextOne = document.getElementById("resultTextOne");
const resultTextThree = document.getElementById("resultTextThree");
const resultGraphScale = document.getElementById("resultGraphScale");
const resultContainer = document.getElementById("resultContainer");
const graph = document.getElementById("graph");
const resultTableBody = document.getElementById("resultTableBody");

let percentage = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function display() {
  let results = calculate();
  let withCompound = results.withCompound;
  let withoutCompound = results.withoutCompound;

  let firstNumber = withoutCompound[0];
  let lastNumber = withCompound[withCompound.length - 1];
  let listLength = withCompound.length - 1;

  resultTextOne.innerHTML = `In ${listLength} Years`;
  resultTextThree.innerHTML = `$${formatter.format(lastNumber)}`;

  //GRAPH NUMBERS

  resultGraphScale.innerHTML = `<div class="scaleNumber" id="scaleNumberMax">$${formatter.format(lastNumber)}</div>`;

  for (let i = 8; i >= 0; i--) {
    resultGraphScale.innerHTML += `<div class="scaleNumber">$${formatter.format((lastNumber * percentage[i]).toFixed(2))}</div>`;
  }

  resultGraphScale.innerHTML += `<div class="scaleNumber" id="scaleNumberMax">$${formatter.format(firstNumber)}</div>`;
  resultContainer.style.display = "flex";

  //GRAPH LINE

  graph.innerHTML = "";
  let htmlContent = `<div class="graphHeight first" data-value="Year 0"></div>`;

  for (let i = 0; i < listLength - 2; i++) {
    const isMiddle = i === Math.floor(listLength / 2);
    const midClass = isMiddle ? " mid" : "";
    const midYear = isMiddle
      ? `data-value="Year ${Math.floor(listLength / 2)}"`
      : "";
    htmlContent += `<div class="graphHeight${midClass}" ${midYear} style="height: calc(${(withCompound[i] * 100) / lastNumber}%)"></div>`;
  }

  htmlContent += `<div class="graphHeight last" data-value="Year ${listLength}"></div>`;
  graph.innerHTML = htmlContent;

  //TABLE
  resultTableBody.innerHTML = "";
  resultTableBody.innerHTML = `<tr class="tableHeader">
                  <td>YEAR</td>
                  <td>INVESTED</td>
                  <td>PROFIT</td>
                </tr>`;

  for (let i = 0; i < listLength + 1; i++) {
    resultTableBody.innerHTML += `<tr>
  <td>${i}</td>
  <td>$${formatter.format(withoutCompound[i])}</td>
  <td>$${formatter.format(withCompound[i] - withoutCompound[i])}</td>
</tr>`;
  }
}

export { display };
