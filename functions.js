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