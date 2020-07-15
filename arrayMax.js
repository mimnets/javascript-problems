var marks = [45, 67, 64, 87, 98, 65, 23, 35];
var max = marks[0];

for (var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Highest value is : ", max);