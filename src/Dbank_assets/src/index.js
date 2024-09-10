import { Dbank } from "../../declarations/Dbank";

window.addEventListener("load" , async function() {
 update();
});

document.querySelector("form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");
  
  const  inputAmount = parseFloat(document.getElementById("input-amount").value);
  const  outputAmount = parseFloat(document.getElementById("withdraw-amount").value);
  
  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.lenght != 0) {
    await Dbank.topUp(inputAmount);
  }

  if (document.getElementById("withdraw-amount").value.lenght != 0) {
    await Dbank.withdraw(outputAmount);
  }
  await Dbank.compound();

  document.getElementById("withdraw-amount").value = "";
  document.getElementById("input-amount").value = "";
  
  update();
  
  button.removeAttribute("disabled");
});

async function update() {
  const currentValue = await Dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentValue *100) / 100;
}