//Recursion practice
var calcrepeatAdd = function(num){
    if(num === 0){
        return 0;
    }
    return num + calcrepeatAdd(num -1);
};

calcrepeatAdd(8);


//Sorting function
function stringLength(str1, str2){
    return str1.length - str2.length;
};
stringLength("hello","hello world");

var arrayOfStrings = ["howdy yall", "It's a me!", "hyahh","hello world, how are you?", "I'm so glad!"];
arrayOfStrings.sort(stringLength);