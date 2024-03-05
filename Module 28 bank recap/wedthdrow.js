
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('wedthdrow-field');

    const proviousWithdrowTotal = getElementValueById('withdrow-total');
    const newWithdrowTotal = proviousWithdrowTotal + newWithdrawAmount;
    
    const proviousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal =proviousBalanceTotal - newWithdrawAmount;

    if(proviousBalanceTotal < newWithdrawAmount){
       alert('insufficient balance')
    }
    else{
        setTextElemantValue('withdrow-total', newWithdrowTotal);
        setTextElemantValue('balance-total', newBalanceTotal);
    }
})