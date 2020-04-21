document.addEventListener("keydown",function(event){
    //Read input
    //  Prevent turnback and eat it own
    var key = event.key, keyCode = event.keyCode;
    if((key==="w" || key =="W" || keyCode =="38") && snake.direction!=="down"){
        snake.direction = "up";
    }else if((key==="s" || key =="S" || keyCode =="40") && snake.direction!=="up"){
        snake.direction = "down";
    }else if((key==="d" || key =="D" || keyCode =="39") && snake.direction!=="left"){
        snake.direction = "right";
    }else if((key==="a" || key =="A" || keyCode =="37") && snake.direction!=="right"){
        snake.direction = "left";
    }
});

function updateMouvement(){
    var length = snake.body.length;

    //Get last snake piece
    var lastX = snake.body[length-1].x;
    var lastY = snake.body[length-1].y;

    //Body mouvement
    for(var i=1;i<snake.body.length;i++){
        snake.body[length-i].x = snake.body[length-i-1].x;
        snake.body[length-i].y = snake.body[length-i-1].y;
    }

    //Head mouvement
    if(snake.direction==="up"){
        snake.body[0].y--;
    }else if(snake.direction==="down"){
        snake.body[0].y++;
    }else if(snake.direction==="right"){
        snake.body[0].x++;
    }else if(snake.direction==="left"){
        snake.body[0].x--;
    }

    //When snake is outside gameArea
    if(snake.body[0].x<0){
        snake.body[0].x = gameAreaWidth/snakeSize-1;
    }else if(snake.body[0].x>gameAreaWidth/snakeSize-1){
        snake.body[0].x = 0;
    }else if(snake.body[0].y<0){
        snake.body[0].y = gameAreaHeight/snakeSize-1
    }else if(snake.body[0].y>gameAreaHeight/snakeSize-1){
        snake.body[0].y = 0;
    }

    //Snake eat fruit
    if(snake.body[0].x === fruit.x && snake.body[0].y === fruit.y){
        var snakeNewPiece = document.createElement("div");
        snakeNewPiece.className = "box";
        snakeNewPiece.style.width = snakeSize;
        snakeNewPiece.style.height = snakeSize;
        snakeNewPiece.style.position = "absolute";
        snakeNewPiece.style.top = 0;
        snakeNewPiece.style.left = 0;
        snakeNewPiece.style.backgroundColor = snakeColor;
        snake.body.push({x:lastX,y:lastY,piece:snakeNewPiece});
        findRandomPosition(); //fruit new position
        increaseScore();
    }

    //Snake eat snake
    for(var i=1;i<snake.body.length;i++){
        if(snake.body[0].x===snake.body[i].x && snake.body[0].y===snake.body[i].y){
            resetScore();
            snake.body=[];
            snake.body.push({x:initialX,y:initialY,piece:head});
            snake.body.push({x:initialX,y:initialY-1,piece:piece1});
            snake.body.push({x:initialX,y:initialY-2,piece:piece2});
            snake.body.push({x:initialX,y:initialY-3,piece:piece3});
        }
    }

    //Adjust snake and fruit div positions
    for(var i=0;i<snake.body.length;i++){
        snake.body[i].piece.style.top = snake.body[i].y*snakeSize+"px";
        snake.body[i].piece.style.left = snake.body[i].x*snakeSize+"px";
    }
    fruit.piece.style.top = fruit.y*snakeSize;
    fruit.piece.style.left = fruit.x*snakeSize;
}

function findRandomPosition(){
    var fruitIsOnSnake = true;
    var x,y;
    while(fruitIsOnSnake){
        fruitIsOnSnake=false;
        x = Math.floor(gameAreaWidth/snakeSize*Math.random());
        y = Math.floor(gameAreaHeight/snakeSize*Math.random());
        for(var i=0;i<snake.body.length;i++){
            if(x==snake.body[i].x && y==snake.body[i].y){
                fruitIsOnSnake = true;
                i=snake.body.length; //to avoid unnecessary loop
            }
        }
    }
    fruit.x = x;
    fruit.y = y;
}

function drawSnakeFruit(){
    gameArea.innerHTML = "";
    gameArea.appendChild(fruit.piece);
    for(var i of snake.body){
        gameArea.appendChild(i.piece);
    }
    gameArea.appendChild(fruit.piece);
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

setTimeout(writeHelloWorld(),snakeSpeed);

function writeHelloWorld(){
    updateMouvement();
    drawSnakeFruit();
    setTimeout(writeHelloWorld,snakeSpeed);
}
