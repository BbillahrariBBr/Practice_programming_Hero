document.getElementById('btn-withdraw').addEventListener('click', function (event) {
    const withdrawField = document.getElementById('inp-withdraw');
    const newWithdrawAmountString = withdrawField.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    if (isNaN(newWithdrawAmount)) {
        alert("plz provide a valid number");
        withdrawField.value = '';
        return;
    }

    const withdrawTotalView = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalView.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);




    const previousTotalBalanceId = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(previousTotalBalanceId.innerText);
    if (newWithdrawAmount > previousTotalBalance) {
        alert("Baap er bank a eto taka nai");
        withdrawField.value = '';
        return;
    }

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    withdrawTotalView.innerText = currentWithdrawTotal;
    withdrawField.value = '';

    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;

    previousTotalBalanceId.innerText = currentTotalBalance;
})