const initialInvestmentInput = document.getElementById(
  "initialInvestmentInput",
);
const monthlyContributionInput = document.getElementById(
  "monthlyContributionInput",
);
const yearsInput = document.getElementById("yearsInput");
const interestRateInput = document.getElementById("interestRateInput");
const compoundFrequencyInput = document.getElementById(
  "compoundFrequencyInput",
);
const compoundButton = document.getElementById("compoundButton");

function calculate() {
  let initialInvestment = Number(initialInvestmentInput.value);
  let monthlyContribution = Number(monthlyContributionInput.value);
  let yearsLength = Number(yearsInput.value);
  let interestRate = Number(interestRateInput.value) / 100;
  let compoundFrequency = Number(compoundFrequencyInput.value);

  let total = initialInvestment;
  let everyYearWithCompound = [total.toFixed(2)];

  for (let year = 1; year <= yearsLength; year++) {
    if (compoundFrequency === 12) {
      total *= 1 + interestRate;
      total += monthlyContribution * 12;

      everyYearWithCompound.push(total.toFixed(2));
    }
    if (compoundFrequency === 6) {
      for (let i = 0; i < 2; i++) {
        total *= 1 + interestRate / 2;
        total += monthlyContribution * 6;
      }
      everyYearWithCompound.push(total.toFixed(2));
    }
    if (compoundFrequency === 4) {
      for (let i = 0; i < 4; i++) {
        total *= 1 + interestRate / 4;
        total += monthlyContribution * 3;
      }
      everyYearWithCompound.push(total.toFixed(2));
    }
    if (compoundFrequency === 1) {
      for (let i = 0; i < 12; i++) {
        total *= 1 + interestRate / 12;
        total += monthlyContribution;
      }
      everyYearWithCompound.push(total.toFixed(2));
    }
  }

  return total.toFixed(2);
}

compoundButton.addEventListener("click", (e) => {
  calculate();
});
