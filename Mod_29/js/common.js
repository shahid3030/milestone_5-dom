function getElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhonetotalString = phoneTotalElement.innerText;
    const currentPhonetotal = parseInt(currentPhonetotalString);
    return currentPhonetotal;
}

function setTextElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}

function calculateSubtotal(){
        // calculate total
   const currentPhonetotal = getElementValueById('phone-total');
   const currentCaseTotal = getElementValueById('case-total');
   const currentSubTotal = currentCaseTotal + currentPhonetotal;
   setTextElementValueById('sub-total',currentSubTotal);


    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-total',taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total',finalAmount);

}