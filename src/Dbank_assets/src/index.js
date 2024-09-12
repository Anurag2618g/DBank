import { Dbank } from "../../declarations/Dbank";

async function update() {
  const currentValue = await Dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentValue *100) / 100;
}

window.addEventListener("load" , async function() {
 await update();
});

document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");
  
  const  inputAmount = parseFloat(document.getElementById("input-amount").value);
  const  outputAmount = parseFloat(document.getElementById("withdraw-amount").value);
  
  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await Dbank.topUp(inputAmount);
  }

  if (document.getElementById("withdraw-amount").value.length != 0) {
    await Dbank.withdraw(outputAmount);
  }

  await Dbank.compound();

  document.getElementById("withdraw-amount").value = "";
  document.getElementById("input-amount").value = "";
  
  await update();
  
  button.removeAttribute("disabled");
});