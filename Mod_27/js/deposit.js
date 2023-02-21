// Step-1:add the event handler with deposit btn
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step-3:get the current deposit total amount
    // for non-input(element other than input,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previouDepositTotalString = depositTotalElement.innerText;
    const previouDepositTotal = parseFloat(previouDepositTotalString);

    // Step-4: add numbers to te set the total deposit
    const currentDepositTotal = previouDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previouBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: get the balance total
    const currentBalanceTotal = previouBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // Step-7:Clear the deposit field
    depositField.value = '';

})

