
function avgArray(arr) {
    var len = arr.length;
    var sum = 0;
    for (i = 0; i < len; i++) {
        sum += arr[i];

    }
    var avg = sum / len;
    return avg.toFixed(3);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var avg = avgArray(arr);
console.log(avg);