//Address Book

function Person(firstName, lastName, emails){
    this.firstname = firstName;
    this.lastname = lastName;
    this.emails = [];
};

function Email(address, type){
    this.address = address;
    this.type = type;
    
        if(type === "work"){
            this.type = "work";
        }
        else if(type === "home"){
            this.type = "home";
        }
        else{
            this.type = "other";
        }
};

Person.prototype.addEmail = function(address, type){
    var add = new Email(address, type);
    
    this.emails.push(add.type);
    this.emails.push(add.address); 
    
}

var mary = new Person("Mary", "Scale");
mary.addEmail("scalemary@gmail.com", "work");
mary.addEmail("saltstorm@comcast.net", "home");
mary.emails;

//Personally I think popping the informaiton into separated positions in the array looks nicer. I realize that I can just pop(add); directly into one position.
