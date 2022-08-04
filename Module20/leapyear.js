function isLeapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return true;
    }
    return false;
}
var check = isLeapYear(1900);
console.log(check);