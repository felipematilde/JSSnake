//Parameters
var snakeSize = 20; //px
var initialX = 5, initialY = 5;
var gameAreaWidth = 700;
var gameAreaHeight = 700;
var startHelpScreenWidth = 500;
var startHelpScreenHeight = 200;
var gameAreaBorder = "thin solid #0000FF";
var startHelpScreenBorder = "thin solid #0000FF";
var startHelpScreenColor = "#FFA07A";
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

    addDiv(){
        document.body.appendChild(this.div);
    }

    removeDiv(){
        document.body.removeChild(this.div);
    }
}

class StartHelpScreen{
    //Attributes:
    //  pauseScreen;
    //  startScreen;
    //  gameIsOnPause; 
    constructor(width, height, color, x, y, border = ""){
        this.pauseScreen = new Square(width, height, color, x, y, startHelpScreenBorder);
        this.pauseScreen.div.style.opacity = 0.6;
        this.pauseScreen.removeDiv();
        var pauseTxt = document.createTextNode("Game is on pause. Press P to play!");
        var pauseTxtField = document.createElement("output");
        pauseTxtField.appendChild(pauseTxt);
        this.pauseScreen.div.appendChild(pauseTxtField);
        this.pauseScreen.div.style.fontSize = "350%";
        this.pauseScreen.div.style.textAlign = "center";

        this.startScreen = new Square(width, height, color, x, y, startHelpScreenBorder);
        this.startScreen.removeDiv();
        var startTxt = document.createTextNode("Welcome to JSSnake Game!!! --------------------------------- Press R: start | W, A, S, D: move the snake | P: pause");
        var startTxtField = document.createElement("output");
        startTxtField.appendChild(startTxt);
        this.startScreen.div.appendChild(startTxtField);
        this.startScreen.div.style.fontSize = "250%";
        this.startScreen.div.style.textAlign = "center";

        this.gameIsOnPause = true;
        this.gameOver = true;
    }

    pausePlay(){
        if(!this.gameOver){
            if(this.gameIsOnPause){
                this.play();
            }else{
                this.pause()
            }
        }
    }

    pause(){
        this.gameIsOnPause = true;
        this.pauseScreen.addDiv();
    }

    play(){
        this.gameIsOnPause = false;
        this.pauseScreen.removeDiv();
    }

    startStop(){
        if(this.gameOver){
            this.start();
        }else{
            this.stop()
        }
    }

    stop(){
        this.gameOver = true;
        this.pause();
        this.startScreen.addDiv();
    }

    start(){
        this.gameOver = false;
        this.play();
        this.startScreen.removeDiv();
        snake.resetSnake();
    }
    
}

var startHelpScreen = new StartHelpScreen(startHelpScreenWidth, startHelpScreenHeight, startHelpScreenColor, (gameAreaWidth/2-startHelpScreenWidth/2)/snakeSize, (gameAreaHeight/2-startHelpScreenHeight/2)/snakeSize, startHelpScreenBorder);

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
credits.style.left = 5;
credits.value = "Developed by: Felipe Matilde";
document.body.appendChild(credits);