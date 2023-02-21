document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueByid('withdraw-field');
    if (isNaN(newWithdrawAmount)) {
        alert('please provide valid amount');
        return;
    }
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    setTextElementValueById('withdraw-total', currentWithdrawAmount);
    const previousBalanceTotal = getElementValueById('balance-total');
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('baap er eto tk nai');
        return;
    }
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})