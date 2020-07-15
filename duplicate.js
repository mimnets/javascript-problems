var name = [3, 6, 5, 3, 8, 7, 9, 4, 3, 1, 6, 56, 66];

var uniqueName = [];
for(var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}

console.log(uniqueName);