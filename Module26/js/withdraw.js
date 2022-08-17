document.getElementById('btn-withdraw').addEventListener('click', function (event) {
    const withdrawField = document.getElementById('inp-withdraw');
    const newWithdrawAmountString = withdrawField.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalView = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalView.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    withdrawTotalView.innerText = currentWithdrawTotal;
    withdrawField.value = '';


    const previousTotalBalanceId = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(previousTotalBalanceId.innerText);
    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
    previousTotalBalanceId.innerText = currentTotalBalance;
})