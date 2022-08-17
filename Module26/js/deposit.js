document.getElementById("btn-deposit").addEventListener("click", function (event) {
    const depositField = document.getElementById('inp-deposit');
    const depositAmount = depositField.value;
    const depositTotalView = document.getElementById('deposit-total');
    const depositTotal = depositTotalView.value;
    depositTotalView.innerText = depositAmount;
    //console.log(depositAmount);
})