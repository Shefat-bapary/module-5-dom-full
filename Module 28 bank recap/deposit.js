document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputValueById('deposit-field');

    const proviousDepositTotal = getElementValueById('deposit-total');
    const newDepositTotal = proviousDepositTotal + newDepositAmount;
    setTextElemantValue('deposit-total', newDepositTotal);

    const proviousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = newDepositAmount + proviousBalanceTotal;
    setTextElemantValue('balance-total', newBalanceTotal);
})

