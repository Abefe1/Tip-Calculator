// this is used to add "onload" event
window.onload= () =>{
    //this is used to call the function for calculating the tip.

    document.querySelector('#solve').onclick=calTip;
    

}

function calTip() {

    // first get the value of input values from user with the queryselector method or getbyelementid
    let amount = document.querySelector('#amount').value;
    let percent=document.querySelector('#percentage').value;
    let people=document.querySelector('#people').value;
    let currency=document.querySelector('#select').value;

    // this is just to display our collected values to console to be sure that the user input was collected
    console.log(amount);
    console.log(percent);
    console.log(people);


    /* we don't want user to calculate with incomplete fields; thus,
    we set a condition to ascertain none of the fields is null.*/
    if (amount=== '' || percent === '' ||people ===''){
        alert("Enter valid value in all fields, field can't be null")
        return "Put a valid number";
    }



    /* the following lines is to calculate the desired output.
    and also parsing the output to float for flexibilty in calculation*/


    let amountf = parseFloat(amount); /* parsing the amount to float for flexibilty*/
    let tip= parseFloat((percent/100)*amount);/* calculating the percentage based on the input*/
    let totalAmountToPay= amountf + parseFloat(tip);
    let tipPerPerson = parseFloat(tip/people); /* line to determine share of each worker involved */

    
    /*Assign output to the appropriate out-box paragraph, fixing all to 2decimal places*/
    document.querySelector('#outAmount').innerHTML=currency+amountf.toFixed(2);
    document.querySelector('#tamount').innerHTML=currency+tip.toFixed(2);
    document.querySelector('#total').innerHTML=currency+totalAmountToPay.toFixed(2);
    document.querySelector('#per').innerHTML=currency+tipPerPerson.toFixed(2);
    
}

//function to refresh the page/form
function refresh() {
    let rset = document.querySelector('#inf');
    rset.reset()
}

// window.addEventListener("click", ()=> {
//     document.querySelector('#solve') =calTip;
// })