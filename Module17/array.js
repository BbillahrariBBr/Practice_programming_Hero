var friendsAge = [11, 21, 45, 17, 14, 105, 6];
var picnicFee = [5000, 2000, 4000, 150];
var nayikas = ['mahi', 'opu', 'sabnur', 'sabana'];
var len = friendsAge.length;//for array length
//console.log(len);
//console.log(typeof (nayikas));

//find index of element
var findIndex = friendsAge.indexOf(7);
// console.log(findIndex);

//unshift The unshift() method adds new elements to the beginning of an array. The unshift() method adds new elements to the beginning of an array.
picnicFee.unshift(1, 22);
console.log(picnicFee);
picnicFee.splice(1, 4);
console.log(picnicFee);