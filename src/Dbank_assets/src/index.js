import { Dbank } from "../../declarations/Dbank";

window.addEventListener("load" , async function() {
  const currentValue = await Dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentValue *100) / 100;
});