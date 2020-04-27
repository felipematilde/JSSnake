import Snake from './snake';
import StartHelpScreen from './startHelpScreen';
import Square from './square';
import GameScore from './gameScore';
import * as param from './parameters';

var snakeSize = param.snakeSize;
var gameAreaWidth = param.gameAreaWidth
var gameAreaHeight = param.gameAreaHeight
var startHelpScreenWidth = param.startHelpScreenWidth
var startHelpScreenHeight = param.startHelpScreenHeight
var gameAreaBorder = param.gameAreaBorder
var startHelpScreenBorder = param.startHelpScreenBorder
var startHelpScreenColor = param.startHelpScreenColor
var fruitColor = param.fruitColor
var gameAreaColor = param.gameAreaColor

//Start Help Screen
var startHelpScreen = new StartHelpScreen(startHelpScreenWidth, startHelpScreenHeight, startHelpScreenColor, (gameAreaWidth/2-startHelpScreenWidth/2)/snakeSize, (gameAreaHeight/2-startHelpScreenHeight/2)/snakeSize, startHelpScreenBorder);

//GameArea
var gameArea = new Square(gameAreaWidth, gameAreaHeight, gameAreaColor, 0, 0, gameAreaBorder);

//Snake
var snake = new Snake("down");
startHelpScreen.addObserver(snake);
snake.addScreenObserver(startHelpScreen);

//Fruit
var fruit = new Square(snakeSize, snakeSize, fruitColor,10,20);
snake.addFruitObserver(fruit);

//GameScore
var gameScore = new GameScore();
snake.addScoreObserver(gameScore);

//Credits
var credits = document.createElement("output");
credits.style.position = "absolute";
credits.style.top = gameAreaHeight+5;
credits.style.left = 5;
credits.value = "Developed by: Felipe Matilde";
document.body.appendChild(credits);

document.addEventListener("keydown",function(event){
    //Read input

    //  Prevent turnback and eat it own
    var key = event.key, keyCode = event.keyCode;
    if((key.toUpperCase() === "W" || keyCode == "38") && snake.direction!=="down"){
        snake.direction = "up";
    }else if((key.toUpperCase() === "S" || keyCode =="40") && snake.direction!=="up"){
        snake.direction = "down";
    }else if((key.toUpperCase() === "D" || keyCode =="39") && snake.direction!=="left"){
        snake.direction = "right";
    }else if((key.toUpperCase() === "A" || keyCode =="37") && snake.direction!=="right"){
        snake.direction = "left";
    }
    
    //Pause
    if(key.toUpperCase() === "P"){
        startHelpScreen.pausePlay();
    }

    //Restart
    if(key.toUpperCase() === "R"){
        startHelpScreen.startStop();
    }

});

startHelpScreen.stop();

//Game loop
setTimeout(gameLoop(), snake.snakeSpeed);

function gameLoop(){
    if(!startHelpScreen.gameOver && !startHelpScreen.gameIsOnPause){
        snake.move();
    }

    setTimeout(gameLoop,snake.snakeSpeed);
}
