var numbers = [55, 34, 45, 65, 12, 86];

function getArraySum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
    }
    return sum;
}
// var sum = 0;

// for (var i = 0; i < numbers.length; i++){
//     var element = numbers[i];
//     sum = sum + element;
// }
var result = getArraySum(numbers)
console.log("Total of the numbers :", result);

var total = getArraySum([34, 54, 65, 23, 76, 12]);
console.log("Total of the numbers :", total);
