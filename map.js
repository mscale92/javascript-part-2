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

function Map(width, height){
    this.width = width;
    this.height = height;
    this.tiles = [];
    var row = [];
    for(var i = 0; i < height; i++){
        row = [];
        
        for(var x = 0; x < width; x++){
            
          var randomizer = Math.random() * 100;

          if (randomizer <= 33) {
            randomizer = "water";
          } else if (randomizer <= 67) {
            randomizer = "sand";
          } else {
            randomizer = "grass";
          }
            
            row[x] = new Tile(randomizer);
           
        }
        //end of width loop
        this.tiles.push(row);     
    }
    //end of height loop for this.tiles
    
    this.getWalkableOutput = function(){
        var column = [];
        var row = [];
        for(var i = 0; i < this.tiles.length; i++){
            row = [];
            for(var x= 0; x < this.tiles[i].length; x++){
                if(this.tiles[i][x].isWalkable === true){
                    row[x] = "0";
                }
                else{
                    row[x] = "X";
                }
            }
            //end of length of 2D for loop
            column.push(row.join(''));
            console.log(column[i]);
        }
        //end of length of 1D for loop
        
    };
    //end of getWalkableOuput method
};
//end of Maps Constructor

var hyrule = new Map(9,5);
hyrule.getWalkableOutput();
