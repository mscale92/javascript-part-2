//Map, oh boy

function Tile(type){
    this.type = type;
    this.isWalkable = false;
        if(this.type === "sand" || this.type === "grass"){
            this.isWalkable = true;
        }
        // else{
        //     this.isWalkable = false;
        // }
   
};
//end of Tile constructor

//random number generator
// function randomNum() {
//   var randomizer = Math.random() * 100;

//   if (randomizer <= 33) {
//     return "water";
//   } else if (randomizer <= 67) {
//     return "sand";
//   } else {
//     return "grass";
//   }
// }


function Map(width, height){
    this.width = width;
    this.height = height;
    this.tiles = [];
    //this.tiles is where we store our Tile objects in a multidimensional array
    //The first array layer, 1D, contain rows at each position
    //Rows refers to how many tiles there are in a row, the width
    //Columns refers to how high the map is going to be, the height
    //The second array layer, 2D, which is within 1D
    //has the value of the Tile objects at each position with each row
    var row = [];
    for(var i = 0; i < height; i++){
        row = [];
        //don't forget to clear out your row before the next round!
        for(var x = 0; x < width; x++){
            
          var randomizer = Math.random() * 100;

          if (randomizer <= 33) {
            randomizer = "water";
          } else if (randomizer <= 67) {
            randomizer = "sand";
          } else {
            randomizer = "grass";
          }
          //This is my random number generator  
            
            row[x] = new Tile(randomizer);
          //Now, chronologically, each tile has a type in the row. 
            //each position in row represents a new Tile object
        }
        //end of width loop
        
        this.tiles.push(row);     
        //Here we add the row to our this.tiles array.
        //each row is located in one position in this.tiles, better thought as columns
    }
    //end of height loop for this.tiles
    
    this.getWalkableOutput = function(){
        var column = [];
        var row = [];
        for(var i = 0; i < this.tiles.length; i++){
            row = [];
            //this.tiles.length refers to the height of each column
            //remember this.tiles is the parent array and each column represents a position
            for(var x= 0; x < this.tiles[i].length; x++){
                if(this.tiles[i][x].isWalkable === true){
                    row[x] = "0";
                }
                else{
                    row[x] = "X";
                }
                //this.tiles[i].length refers to the width of each row array
                //this.tiles[i] references each row
                //this.tiles[i][x] is calling upon our Tile objects
                //the Tile objects must be called in order to access the Tile type and
                //the Walkable method
            }
            //end of length of 2D for loop getWalkableOuput
            
            column.push(row.join(''));
            //here we simultaneously push the completed row into a column
            //while joining the row array into a string
            
            console.log(column[i]);
            //in order to print each row on its own line
            //we console.log the column in row order, stacking, one by one with i
        }
        //end of length of 1D for loop getWalkableOuput
    };
    //end of getWalkableOuput method
    
    this.getAsciiOutput = function(){
        var column = [];
        var row = [];
        for(var i = 0; i < this.tiles.length; i++){
            row = [];
            for(var x= 0; x < this.tiles[i].length; x++){
                if(this.tiles[i][x].type === "grass"){
                    row[x] = "*";
                }
                else if(this.tiles[i][x].type === "water"){
                    row[x] = "~";
                }
                else{
                    row[x] = ":";
                }
            }
            //end of 2D for loop getAsciiOutput
            
            column.push(row.join(''));
            //here we simultaneously push the completed row into a column
            //while joining the row array into a string
            
            console.log(column[i]);
            //in order to print each row on its own line
            //we console.log the column in row order, stacking, one by one with i
        }
        //end of 1D for loop getAsciiOutput
    };
    //end of getAsciiOutput method
};
//end of Maps Constructor

var hyrule = new Map(4,4);
hyrule.getWalkableOutput();
hyrule.getAsciiOutput();