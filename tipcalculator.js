// this is used to add "onload" event
window.onload = () => {
  //this is used to call the function for calculating the tip.
  document.querySelector("#solve").onclick = calculateTip;
};

function calculateTip() {
  // first get the value of input values from user with the querySelector method or getByElementId
  let amount = document.querySelector("#amount").value;
  let percentage = document.querySelector("#percentage").value;
  let people = document.querySelector("#people").value;
  let currency = document.querySelector("#selectCurrency").value;

  // this is just to display our collected values to console to be sure that the user input were collected
  console.log(amount);
  console.log(percentage);
  console.log(people);

  /* we don't want user to calculate with incomplete fields; thus, we set a condition to ascertain none of the fields is null.*/
  if (
    amount === "" ||
    percentage === "" ||
    people === "" ||
    currency === "Currency"
  ) {
    alert(
      "Select currency and enter valid value in all fields. Field can't be null."
    );
    return;
  }

  /* the following lines is to calculate the desired output.
    and also parsing the output to float for flexibilty in calculation*/

  let parseAmount =
    parseFloat(amount); /* parsing the amount to float for flexibilty*/

  let tipAmt = parseFloat(
    (percentage / 100) * amount
  ); /* calculating the percentage based on the input*/

  let totalAmountToPay = parseAmount + parseFloat(tipAmt);

  let tipPerPerson = parseFloat(
    tipAmt / people
  ); /* line to determine share of each worker involved */

  /*Assign output to the appropriate outputTag paragraph, fixing all to 2decimal places*/
  document.querySelector("#outputAmount").innerHTML =
    currency + parseAmount.toFixed(2);

  document.querySelector("#tipAmount").innerHTML = currency + tipAmt.toFixed(2);

  document.querySelector("#totalAmt").innerHTML =
    currency + totalAmountToPay.toFixed(2);

  document.querySelector("#perPerson").innerHTML =
    currency + tipPerPerson.toFixed(2);
}

//function to refresh the page/form
function refresh() {
  let resetBtn = document.querySelector("#formData");
  resetBtn.reset();
}
