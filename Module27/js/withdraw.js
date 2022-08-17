document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdraw = getInputValueById('inp-withdraw')
    //console.log(newWithdraw);
    const previousWithdraw = getInnerTextValueById('withdraw-total')
    //console.log(previousWithdraw);
    const withdrawTotal = newWithdraw + previousWithdraw;
    setInnerTextValueById('withdraw-total', withdrawTotal);

    const previousTotalBalance = getInnerTextValueById('total-balance')
    const newTotalBalance = previousTotalBalance - newWithdraw;
    setInnerTextValueById('total-balance', newTotalBalance);
})