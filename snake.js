import {snakeSize, initialX, initialY,gameAreaWidth,gameAreaHeight,startHelpScreenWidth,startHelpScreenHeight,gameAreaBorder,startHelpScreenBorder,startHelpScreenColor,snakeColor,fruitColor,gameAreaColor,snakeHeadColor,snakeInitialSpeed} from './parameters';
import Square from './square';

export default class Snake{
    //Attributes:
    //   direction;
    //   body;
    //   listScoreObserver;
    //   listFruitObserver;
    //   listScreeObserver;
    //   snakeSpeed;
    constructor(direction){
        this.direction = direction; //"down", "up", "left", "right"

        //Snake body
        var head = new Square(snakeSize, snakeSize, snakeHeadColor, initialX, initialY);
        var piece1 = new Square(snakeSize, snakeSize, snakeColor, initialX, initialY-1);
        var piece2 = new Square(snakeSize, snakeSize, snakeColor, initialX, initialY-2);
        var piece3 = new Square(snakeSize, snakeSize, snakeColor, initialX, initialY-3);
        this.body = [head, piece1, piece2, piece3];

        this.listScoreObserver = [];
        this.listFruitObserver = [];
        this.listScreenObserver = [];
        this.snakeSpeed = snakeInitialSpeed;
    }

    addScoreObserver(scoreObserver){
        this.listScoreObserver.push(scoreObserver);
    }

    addFruitObserver(fruitObserver){
        this.listFruitObserver.push(fruitObserver);
    }

    addScreenObserver(screenOserver){
        this.listScreenObserver.push(screenOserver);
    }

    move(){
        var length = this.body.length;

        //Body mouvement
        for(var i = 1; i < length; i++){
            let x = this.body[length-i-1].x, y = this.body[length-i-1].y;
            this.body[length-i].setXY(x,y);
        }

        //Head mouvement
        var x = this.body[0].x, y = this.body[0].y;
        if(this.direction === "up"){
            this.body[0].setXY(x, y-1);
        }else if(this.direction === "down"){
            this.body[0].setXY(x, y+1);
        }else if(this.direction === "right"){
            this.body[0].setXY(x+1, y);
        }else if(this.direction === "left"){
            this.body[0].setXY(x-1, y);
        }

        //When snake is outside gameArea
        x = this.body[0].x, y=this.body[0].y; 
        if(this.body[0].x < 0){
            this.body[0].setXY(gameAreaWidth/snakeSize-1, y);
        }else if(this.body[0].x > gameAreaWidth/snakeSize-1){
            this.body[0].setXY(0, y);
        }else if(this.body[0].y < 0){
            this.body[0].setXY(x, gameAreaHeight/snakeSize-1)
        }else if(this.body[0].y > gameAreaHeight/snakeSize-1){
            this.body[0].setXY(x, 0);
        }

        this.checkSnakeEatFruit();
        this.checkSnakeEatSnake();
    }

    increaseSpeed(){
        this.snakeSpeed = this.snakeSpeed*0.90;
    }

    resetSnake(){
        var length = this.body.length;
        this.snakeSpeed = snakeInitialSpeed;

        for(var i = 1; i < length-3; i++){
            this.body[length-i].removeDiv();
            this.body.splice(length-i);
        }
        this.body[0].setXY(initialX, initialY);
        this.body[1].setXY(initialX, initialY-1);
        this.body[2].setXY(initialX, initialY-2);
        this.body[3].setXY(initialX, initialY-3);
        this.direction = "down";
    }

    findRandomPosition(){
        var fruit = this.listFruitObserver[0];
        var fruitIsOnSnake = true;
        var x,y;
        while(fruitIsOnSnake){
            fruitIsOnSnake=false;
            x = Math.floor(gameAreaWidth/snakeSize*Math.random());
            y = Math.floor(gameAreaHeight/snakeSize*Math.random());
    
            this.body.forEach((item)=>{
                if(x === item.x && y === item.y)
                    fruitIsOnSnake = true;
            });
        }
        fruit.setXY(x,y);
    }
    
    checkSnakeEatFruit(){
        var length = this.body.length;
        var x = this.body[length-1].x, y = this.body[length-1].y;

        var fruit = this.listFruitObserver[0];
    
        //Snake eat fruit
        if(this.body[0].x === fruit.x && this.body[0].y === fruit.y){
            var snakeNewPiece = new Square(snakeSize, snakeSize, snakeColor, x, y);
            this.body.push(snakeNewPiece);
            this.findRandomPosition(); //fruit new position
            this.listScoreObserver[0].increaseScore();
            this.increaseSpeed();
        }
    }
    
    checkSnakeEatSnake(){
        var length = this.body.length;
        var snakeEatSnake = false;

        //Snake eat snake
        for(var i = 1; i < length; i++){
            if(this.body[0].x === this.body[i].x && this.body[0].y === this.body[i].y){
                snakeEatSnake = true;
            }
        }

        if(snakeEatSnake){
            this.listScoreObserver[0].resetScore();
            this.listScreenObserver[0].stop();
            this.resetSnake();
        }

    }
}