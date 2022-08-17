
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDeposit = getInputValueById('inp-deposit')
    //console.log(newDeposit);
    const previousDeposit = getInnerTextValueById('deposit-total')
    //console.log(previousDeposit);
    const depositTotal = newDeposit + previousDeposit;
    setInnerTextValueById('deposit-total', depositTotal);

    const previousTotalBalance = getInnerTextValueById('total-balance')
    const newTotalBalance = previousTotalBalance + newDeposit;
    setInnerTextValueById('total-balance', newTotalBalance);

    //console.log(totalBalance);
})