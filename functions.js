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



// Array of Names and Email objects
function Person(name, email){
    this.name = name;
    this.email = email;
}
var mary = new Person("Mary Scale", "scalemary@gmail.com");
var blaise = new Person("Blaise", "blaise.jameson@gmail.com");

//My array contains my Person objects
//I can access them with their array position.property
var peopleInfo = [ 
    mary,
    blaise
    ];
    //end of peopleInfo array
    
    var sortedNames = [];
    for(var i = 0; i < peopleInfo.length; i++){
        sortedNames[i] = peopleInfo[i].name;
        sortedNames = sortedNames.sort(function(str,str2){str-str2});
    }
    //end of for loop sorting by names, longest
    
    var sortedEmails = [];
    for(var i = 0; i < peopleInfo.length; i++){
        sortedEmails[i] = peopleInfo[i].email;
        sortedEmails = sortedEmails.sort();
    }
    //end of for loop sorting by email addresses, aphabetically
    
    console.log(sortedNames);
    console.log(sortedEmails);
    
    
    
    //Squaring array elements with the map method
function squareArrays(numArr){
    function square(num){
        return num * num;
    };
    return numArr.map(square);  
};
squareArrays([4, 16, 9, 12]);



//Use map to run a square function that squares each num value in an object in an array

function Number(num){
    this.num = num;
}
//created a Number constructor with one key: num, and one value: num

var number1 = new Number(9);
var number2 = new Number(5);
//Make new numbers here

var numObjects = [number1, number2];
//Put numbers into the array numObjects


function square(obj){
    for(x in obj){
        var squareMe = obj[x];
        var answer = squareMe * squareMe;
        return answer;
    }
};
//square function takes the obj in an array and squares its key values

function multi2(obj){
    for(x in obj){
        var times = obj[x];
        times = times * 2;
        return times;
    }
};
//multil2 function multiplies obj key values by two

numObjects.map(square);
//using the map method with our square function we can find the square of every object in the array.


//Write a function that returns a function that takes two properties and returns the arithmatic value of the first function's input string.

function operationMaker(operation){
    return function arithma(num1, num2){
        if(operation === "add"){
            return num1 + num2;
        }
        
        else if(operation === "sub"){
            return num1 - num2;
        }
            
        else if(operation === "multi"){
            return num1 * num2;
        }
            
        else if(operation === "div"){
            return num1 / num2;
        }
        else{
            console.log("Sorry, I only respond to 'add', 'sub', 'multi', and 'div'. Please try again");
        }
    }
};

var multiply = operationMaker("multi");
var product = multiply(4,3);