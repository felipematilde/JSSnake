import Square from './square'
import {snakeSize, initialX, initialY,gameAreaWidth,gameAreaHeight,startHelpScreenWidth,startHelpScreenHeight,gameAreaBorder,startHelpScreenBorder,startHelpScreenColor,snakeColor,fruitColor,gameAreaColor,snakeHeadColor,snakeInitialSpeed} from './parameters';

export default class StartHelpScreen{
    //Attributes:
    //  pauseScreen;
    //  startScreen;
    //  gameIsOnPause; 
    //  gameOver;
    //  listObserver;
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
        document.body.appendChild(this.pauseScreen.div);

        this.startScreen = new Square(width, height, color, x, y, startHelpScreenBorder);
        this.startScreen.removeDiv();
        var startTxt = document.createTextNode("Welcome to JSSnake Game!!! --------------------------------- Press R: start | W, A, S, D: move the snake | P: pause");
        var startTxtField = document.createElement("output");
        startTxtField.appendChild(startTxt);
        this.startScreen.div.appendChild(startTxtField);
        this.startScreen.div.style.fontSize = "250%";
        this.startScreen.div.style.textAlign = "center";
        document.body.appendChild(this.startScreen.div);

        this.gameIsOnPause = true;
        this.gameOver = true;

        this.listObserver = [];
    }

    addObserver(observer){
        this.listObserver.push(observer)
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
        for(var snake of this.listObserver){
            snake.resetSnake();
        }
    }
    
}