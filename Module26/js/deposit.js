document.getElementById("btn-deposit").addEventListener("click", function (event) {
    const depositField = document.getElementById('inp-deposit');
    const newDepositAmountString = depositField.value
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);
    // console.log(typeof newDepositAmount);
    const depositTotalView = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalView.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(previousDepositTotal);
    // console.log(typeof previousDepositTotal);


    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    //console.log(typeof currentDepositTotal);
    // console.log(currentDepositTotal);
    depositTotalView.innerText = currentDepositTotal;
    depositField.value = '';

    const previousTotalBalanceId = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(previousTotalBalanceId.innerText);
    const currentTotalBalance = previousTotalBalance + newDepositAmount;
    previousTotalBalanceId.innerText = currentTotalBalance;
    //cons
    //console.log(newDepositAmount);
})