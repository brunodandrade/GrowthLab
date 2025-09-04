import { calculate, compoundButton } from "./compoundMath.js";
const initialInvestmentInput = document.getElementById(
  "initialInvestmentInput",
);
const yearsInput = document.getElementById("yearsInput");
let results = calculate();
const interestRateInput = document.getElementById("interestRateInput");

compoundButton.addEventListener("click", () => {
  if (initialInvestmentInput.value === "") {
    window.alert("Please enter Initial Investment");
  } else if (yearsInput.value <= 1) {
    window.alert("Enter the period in years, greater than 1");
  } else if (yearsInput.value >= 100) {
    window.alert("The period of time in years must be less than 100");
  } else if (interestRateInput.value <= 0) {
    window.alert("Enter a valid Interest Rate");
  } else {
    calculate();
    display();
    scrollToResult();
  }
});

import { display } from "./display.js";

function scrollToResult() {
  const el = document.getElementById("resultContainer");
  const y = el.getBoundingClientRect().top + window.scrollY - 20;
  window.scrollTo({ top: y, behavior: "smooth" });
}
