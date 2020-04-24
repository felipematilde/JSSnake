//Snake
class Snake{
    constructor(direction, body, isAlive = true){
        this.direction = direction; //"down", "up", "left", "right"
        this.body = body;
        this.isAlive = isAlive;
    }

    move(){
        var length = snake.body.length;

        //Body mouvement
        for(var i = 1; i < length; i++){
            let x = snake.body[length-i-1].x, y = snake.body[length-i-1].y;
            snake.body[length-i].setXY(x,y);
        }

        //Head mouvement
        var x = snake.body[0].x, y = snake.body[0].y;
        if(snake.direction === "up"){
            snake.body[0].setXY(x, y-1);
        }else if(snake.direction === "down"){
            snake.body[0].setXY(x, y+1);
        }else if(snake.direction === "right"){
            snake.body[0].setXY(x+1, y);
        }else if(snake.direction === "left"){
            snake.body[0].setXY(x-1, y);
        }

        //When snake is outside gameArea
        x = snake.body[0].x, y=snake.body[0].y; 
        if(snake.body[0].x < 0){
            snake.body[0].setXY(gameAreaWidth/snakeSize-1, y);
        }else if(snake.body[0].x > gameAreaWidth/snakeSize-1){
            snake.body[0].setXY(0, y);
        }else if(snake.body[0].y < 0){
            snake.body[0].setXY(x, gameAreaHeight/snakeSize-1)
        }else if(snake.body[0].y > gameAreaHeight/snakeSize-1){
            snake.body[0].setXY(x, 0);
        }
    }

    resetSnake(){
        var length = snake.body.length;
        resetScore();
        for(var i = 1; i < length-3; i++){
            snake.body[length-i].removeDiv();
            snake.body.splice(length-i);
        }
        snake.body[0].setXY(initialX, initialY);
        snake.body[1].setXY(initialX, initialY-1);
        snake.body[2].setXY(initialX, initialY-2);
        snake.body[3].setXY(initialX, initialY-3);
        snake.direction = "down";
        snake.isAlive = true;
    }
}
var snake = new Snake("down", [head, piece1, piece2, piece3]);

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

function findRandomPosition(){
    var fruitIsOnSnake = true;
    var x,y;
    while(fruitIsOnSnake){
        fruitIsOnSnake=false;
        x = Math.floor(gameAreaWidth/snakeSize*Math.random());
        y = Math.floor(gameAreaHeight/snakeSize*Math.random());
        for(var i = 0; i < snake.body.length; i++){
            if(x == snake.body[i].x && y == snake.body[i].y){
                fruitIsOnSnake = true;
                i = snake.body.length; //to avoid unnecessary loop
            }
        }
    }
    fruit.setXY(x,y);
}

function checkSnakeEatFruit(){
    var length = snake.body.length;
    var x = snake.body[length-1].x, y = snake.body[length-1].y;

    //Snake eat fruit
    if(snake.body[0].x === fruit.x && snake.body[0].y === fruit.y){
        var snakeNewPiece = new Square(snakeSize, snakeSize, snakeColor, x, y);
        snake.body.push(snakeNewPiece);
        findRandomPosition(); //fruit new position
        increaseScore();
    }
}

function checkSnakeEatSnake(){
    var length = snake.body.length;

    //Snake eat snake
    for(var i = 1; i < length; i++){
        if(snake.body[0].x === snake.body[i].x && snake.body[0].y === snake.body[i].y){
            snake.isAlive = false;
        }
    }
}

function resetScore(){
    score=0;
    snakeSpeed = snakeInitialSpeed;
    writeScore();
}

function increaseScore(){
    score++;
    snakeSpeed = snakeSpeed*0.90;
    writeScore();
}

function writeScore(){
    scoreDisplay.value = "Score: "+score;
}


startHelpScreen.stop();

//Game loop
setTimeout(gameLoop(),snakeSpeed);

function gameLoop(){
    if(!startHelpScreen.gameOver && !startHelpScreen.gameIsOnPause){
        snake.move();
        checkSnakeEatFruit();
        checkSnakeEatSnake();

        if(!snake.isAlive){
            startHelpScreen.stop();
        }
    }

    setTimeout(gameLoop,snakeSpeed);
}
