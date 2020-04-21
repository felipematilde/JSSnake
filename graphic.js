//Parameters
var snakeSize = 20;
var initialX = 5, initialY = 5;
var gameAreaWidth = 700;
var gameAreaHeight = 700;
var snakeColor = "#008000";
var fruitColor = "#FF0000";
var gameAreaColor = "#ADFF2F";
var snakeHeadColor = "#006400";
var snakeIsAlive = true;
var snakeInitialSpeed = 200; //ms
var snakeSpeed = snakeInitialSpeed;

//GameArea
var gameArea = document.createElement("div");
gameArea.className = "box";
gameArea.style.width = gameAreaWidth;
gameArea.style.height = gameAreaHeight;
gameArea.style.backgroundColor = gameAreaColor;
gameArea.style.position = "absolute";
gameArea.style.top = 0;
gameArea.style.left = 0;
gameArea.style.border = "thin solid #0000FF";
document.body.appendChild(gameArea);

//Snake body
var head = document.createElement("div");
head.className = "box";
head.style.width = snakeSize;
head.style.height = snakeSize;
head.style.backgroundColor = snakeHeadColor;
head.style.position = "absolute";
head.style.top = 0;
head.style.left = 0;

var piece1 = document.createElement("div");
piece1.className = "box";
piece1.style.width = snakeSize;
piece1.style.height = snakeSize;
piece1.style.backgroundColor = snakeColor;
piece1.style.position = "absolute";
piece1.style.top = 0;
piece1.style.left = 0;

var piece2 = document.createElement("div");
piece2.className = "box";
piece2.style.width = snakeSize;
piece2.style.height = snakeSize;
piece2.style.backgroundColor = snakeColor;
piece2.style.position = "absolute";
piece2.style.top = 0;
piece2.style.left = 0;

var piece3 = document.createElement("div");
piece3.className = "box";
piece3.style.width = snakeSize;
piece3.style.height = snakeSize;
piece3.style.backgroundColor = snakeColor;
piece3.style.position = "absolute";
piece3.style.top = 0;
piece3.style.left = 0;
var snake = {direction: "down", body: [{x:initialX,y:initialY,piece:head},{x:initialX,y:initialY-1,piece:piece1},{x:initialX,y:initialY-2,piece:piece2},{x:initialX,y:initialY-3,piece:piece3}]};

//Fruit
var fruitPiece = document.createElement("div");
fruitPiece.classList = "box";
fruitPiece.style.width = snakeSize;
fruitPiece.style.height = snakeSize;
fruitPiece.style.backgroundColor = fruitColor;
fruitPiece.style.position = "absolute";
fruitPiece.style.top = 0;
fruitPiece.style.left = 0;
var fruit = {x: 10, y:20, piece:fruitPiece};

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