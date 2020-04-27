import {snakeSize, initialX, initialY,gameAreaWidth,gameAreaHeight,startHelpScreenWidth,startHelpScreenHeight,gameAreaBorder,startHelpScreenBorder,startHelpScreenColor,snakeColor,fruitColor,gameAreaColor,snakeHeadColor,snakeIsAlive,snakeInitialSpeed} from './parameters';

export default class Square{
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