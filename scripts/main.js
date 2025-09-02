import { calculate, compoundButton } from "./compoundMath.js";

compoundButton.addEventListener("click", (e) => {
  calculate();
  display();
});

import { display } from "./display.js";
