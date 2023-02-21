document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldValueByid('deposit-field');
    if (isNaN(newDepositAmount)) {
        alert('please provide valid num');
        return;
    }
    const previousDepositAmount = getElementValueById('deposit-total');
    const currentDepositTotal = previousDepositAmount + newDepositAmount;
    setTextElementValueById('deposit-total',currentDepositTotal);
    const previousBalanceTotal = getElementValueById('balance-total');
    const currentBlanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',currentBlanceTotal);
})