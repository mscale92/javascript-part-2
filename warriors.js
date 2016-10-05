//Warriors

function Warrior(name, gender){
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = 100;
    this.fight = function(opponent){
        console.log(this.name + " rushes to the area with " + opponent.name);
    };
    this.faceoff = function(opponent){
        var opposePow = Math.trunc(opponent.power * Math.random());
        var warPow = Math.trunc(this.power * Math.random());
        //since power is 100, we need to randomize the power levels. Thus I assigned two Math.random in order to really make it random.
        
            if(warPow > opposePow){
                console.log("It seems that " + this.name + " has bested " + opponent.name + " in battle! All fear the " + this.weapon + " of " + this.name + "!!!!!!!");
            }
            else if(warPow < opposePow){
                console.log("Oh my! It seems that " + this.name + " has fallen to the mighty power of " + opponent.name + "! Whoever said that battles couldn't be won with a " + opponent.weapon + " never expected the might of " + opponent.name + "!!!!");
            }
            else{
                console.log("The two warriors were equally matched resulting in no winner. How horribly dull. Let's send in the balverines. That should liven things up!");
            }
        
    };
}

var link = new Warrior("Link", "male");
var roy = new Warrior("Roy", "male");

link.fight(roy);
link.faceoff(roy);