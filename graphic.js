//Parameters
var snakeSize = 20; //px
var initialX = 5, initialY = 5;
var gameAreaWidth = 700;
var gameAreaHeight = 700;
var gameAreaBorder = "thin solid #0000FF";
var snakeColor = "#008000";
var fruitColor = "#FF0000";
var gameAreaColor = "#ADFF2F";
var snakeHeadColor = "#006400";
var snakeIsAlive = true;
var snakeInitialSpeed = 200; //ms
var snakeSpeed = snakeInitialSpeed;

class Square{
    //Attributes:
    //  div;
    //  x;
    //  y;
    constructor(width, height, color, x, y, border = ""){
        this.div = document.createElement("div");
        this.div.className = "box";
        this.div.style.width = width;
        this.div.style.height = height;
        this.div.style.backgroundColor = color;
        this.div.style.position = "absolute";
        this.div.style.top = y*snakeSize;
        this.div.style.left = x*snakeSize;
        this.div.style.border = border;
        document.body.appendChild(this.div);

        this.x = x;
        this.y = y;
    }

    setXY(x,y){
        this.x = x;
        this.y = y;
        this.div.style.top = y*snakeSize;
        this.div.style.left = x*snakeSize;
    }

    removeDiv(){
        document.body.removeChild(this.div);
    }
}

//GameArea
var gameArea = new Square(gameAreaWidth, gameAreaHeight, gameAreaColor, 0, 0, gameAreaBorder);

//Snake body
var head = new Square(snakeSize, snakeSize, snakeHeadColor, initialX, initialY);
var piece1 = new Square(snakeSize, snakeSize, snakeColor, initialX, initialY-1);
var piece2 = new Square(snakeSize, snakeSize, snakeColor, initialX, initialY-2);
var piece3 = new Square(snakeSize, snakeSize, snakeColor, initialX, initialY-3);

//Fruit
var fruit = new Square(snakeSize, snakeSize, fruitColor,10,20);

//Score
var scoreDisplay = document.createElement("output");
var score = 0;
scoreDisplay.style.position = "absolute";
scoreDisplay.style.top = gameAreaHeight+5;
scoreDisplay.style.left = gameAreaWidth-100;
scoreDisplay.value = "Score: 0";
document.body.appendChild(scoreDisplay);

//Credits
var credits = document.createElement("output");
credits.style.position = "absolute";
credits.style.top = gameAreaHeight+5;
credits.style.left = 0;
credits.value = "Developed by: Felipe Matilde";
document.body.appendChild(credits);