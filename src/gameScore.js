import * as param from './parameters';

var gameAreaWidth = param.gameAreaWidth
var gameAreaHeight = param.gameAreaHeight

//GameScore
export default class GameScore{
    //Attributes:
    //   score;
    //   scoreDisplay;
    constructor(){
        this.score = 0;
        this.scoreDisplay = document.createElement("output");
        this.scoreDisplay.style.position = "absolute";
        this.scoreDisplay.style.top = gameAreaHeight+5;
        this.scoreDisplay.style.left = gameAreaWidth-100;
        this.scoreDisplay.value = "Score: 0";
        document.body.appendChild( this.scoreDisplay);
    }

    resetScore(){
        this.score=0;
        this.writeScore();
    }
    
    increaseScore(){
        this.score++;
        this.writeScore();
    }
    
    writeScore(){
        this.scoreDisplay.value = "Score: "+ this.score;
    }
}