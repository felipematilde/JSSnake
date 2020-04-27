/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/gameScore.js":
/*!**************************!*\
  !*** ./src/gameScore.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameScore; });\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ \"./src/parameters.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar gameAreaWidth = _parameters__WEBPACK_IMPORTED_MODULE_0__[\"gameAreaWidth\"];\nvar gameAreaHeight = _parameters__WEBPACK_IMPORTED_MODULE_0__[\"gameAreaHeight\"]; //GameScore\n\nvar GameScore = /*#__PURE__*/function () {\n  //Attributes:\n  //   score;\n  //   scoreDisplay;\n  function GameScore() {\n    _classCallCheck(this, GameScore);\n\n    this.score = 0;\n    this.scoreDisplay = document.createElement(\"output\");\n    this.scoreDisplay.style.position = \"absolute\";\n    this.scoreDisplay.style.top = gameAreaHeight + 5;\n    this.scoreDisplay.style.left = gameAreaWidth - 100;\n    this.scoreDisplay.value = \"Score: 0\";\n    document.body.appendChild(this.scoreDisplay);\n  }\n\n  _createClass(GameScore, [{\n    key: \"resetScore\",\n    value: function resetScore() {\n      this.score = 0;\n      this.writeScore();\n    }\n  }, {\n    key: \"increaseScore\",\n    value: function increaseScore() {\n      this.score++;\n      this.writeScore();\n    }\n  }, {\n    key: \"writeScore\",\n    value: function writeScore() {\n      this.scoreDisplay.value = \"Score: \" + this.score;\n    }\n  }]);\n\n  return GameScore;\n}();\n\n\n\n//# sourceURL=webpack:///./src/gameScore.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\n/* harmony import */ var _startHelpScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startHelpScreen */ \"./src/startHelpScreen.js\");\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./square */ \"./src/square.js\");\n/* harmony import */ var _gameScore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameScore */ \"./src/gameScore.js\");\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters */ \"./src/parameters.js\");\n\n\n\n\n\nvar snakeSize = _parameters__WEBPACK_IMPORTED_MODULE_4__[\"snakeSize\"];\nvar gameAreaWidth = _parameters__WEBPACK_IMPORTED_MODULE_4__[\"gameAreaWidth\"];\nvar gameAreaHeight = _parameters__WEBPACK_IMPORTED_MODULE_4__[\"gameAreaHeight\"];\nvar startHelpScreenWidth = _parameters__WEBPACK_IMPORTED_MODULE_4__[\"startHelpScreenWidth\"];\nvar startHelpScreenHeight = _parameters__WEBPACK_IMPORTED_MODULE_4__[\"startHelpScreenHeight\"];\nvar gameAreaBorder = _parameters__WEBPACK_IMPORTED_MODULE_4__[\"gameAreaBorder\"];\nvar startHelpScreenBorder = _parameters__WEBPACK_IMPORTED_MODULE_4__[\"startHelpScreenBorder\"];\nvar startHelpScreenColor = _parameters__WEBPACK_IMPORTED_MODULE_4__[\"startHelpScreenColor\"];\nvar fruitColor = _parameters__WEBPACK_IMPORTED_MODULE_4__[\"fruitColor\"];\nvar gameAreaColor = _parameters__WEBPACK_IMPORTED_MODULE_4__[\"gameAreaColor\"]; //Start Help Screen\n\nvar startHelpScreen = new _startHelpScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"](startHelpScreenWidth, startHelpScreenHeight, startHelpScreenColor, (gameAreaWidth / 2 - startHelpScreenWidth / 2) / snakeSize, (gameAreaHeight / 2 - startHelpScreenHeight / 2) / snakeSize, startHelpScreenBorder); //GameArea\n\nvar gameArea = new _square__WEBPACK_IMPORTED_MODULE_2__[\"default\"](gameAreaWidth, gameAreaHeight, gameAreaColor, 0, 0, gameAreaBorder); //Snake\n\nvar snake = new _snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"down\");\nstartHelpScreen.addObserver(snake);\nsnake.addScreenObserver(startHelpScreen); //Fruit\n\nvar fruit = new _square__WEBPACK_IMPORTED_MODULE_2__[\"default\"](snakeSize, snakeSize, fruitColor, 10, 20);\nsnake.addFruitObserver(fruit); //GameScore\n\nvar gameScore = new _gameScore__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nsnake.addScoreObserver(gameScore); //Credits\n\nvar credits = document.createElement(\"output\");\ncredits.style.position = \"absolute\";\ncredits.style.top = gameAreaHeight + 5;\ncredits.style.left = 5;\ncredits.value = \"Developed by: Felipe Matilde\";\ndocument.body.appendChild(credits);\ndocument.addEventListener(\"keydown\", function (event) {\n  //Read input\n  //  Prevent turnback and eat it own\n  var key = event.key,\n      keyCode = event.keyCode;\n\n  if ((key.toUpperCase() === \"W\" || keyCode == \"38\") && snake.direction !== \"down\") {\n    snake.direction = \"up\";\n  } else if ((key.toUpperCase() === \"S\" || keyCode == \"40\") && snake.direction !== \"up\") {\n    snake.direction = \"down\";\n  } else if ((key.toUpperCase() === \"D\" || keyCode == \"39\") && snake.direction !== \"left\") {\n    snake.direction = \"right\";\n  } else if ((key.toUpperCase() === \"A\" || keyCode == \"37\") && snake.direction !== \"right\") {\n    snake.direction = \"left\";\n  } //Pause\n\n\n  if (key.toUpperCase() === \"P\") {\n    startHelpScreen.pausePlay();\n  } //Restart\n\n\n  if (key.toUpperCase() === \"R\") {\n    startHelpScreen.startStop();\n  }\n});\nstartHelpScreen.stop(); //Game loop\n\nsetTimeout(gameLoop(), snake.snakeSpeed);\n\nfunction gameLoop() {\n  if (!startHelpScreen.gameOver && !startHelpScreen.gameIsOnPause) {\n    snake.move();\n  }\n\n  setTimeout(gameLoop, snake.snakeSpeed);\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/parameters.js":
/*!***************************!*\
  !*** ./src/parameters.js ***!
  \***************************/
/*! exports provided: snakeSize, initialX, initialY, gameAreaWidth, gameAreaHeight, startHelpScreenWidth, startHelpScreenHeight, gameAreaBorder, startHelpScreenBorder, startHelpScreenColor, snakeColor, fruitColor, gameAreaColor, snakeHeadColor, snakeInitialSpeed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snakeSize\", function() { return snakeSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialX\", function() { return initialX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialY\", function() { return initialY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameAreaWidth\", function() { return gameAreaWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameAreaHeight\", function() { return gameAreaHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startHelpScreenWidth\", function() { return startHelpScreenWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startHelpScreenHeight\", function() { return startHelpScreenHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameAreaBorder\", function() { return gameAreaBorder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startHelpScreenBorder\", function() { return startHelpScreenBorder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startHelpScreenColor\", function() { return startHelpScreenColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snakeColor\", function() { return snakeColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fruitColor\", function() { return fruitColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameAreaColor\", function() { return gameAreaColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snakeHeadColor\", function() { return snakeHeadColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"snakeInitialSpeed\", function() { return snakeInitialSpeed; });\n//Parameters\nvar snakeSize = 20; //px\n\nvar initialX = 5,\n    initialY = 5;\nvar gameAreaWidth = 700;\nvar gameAreaHeight = 700;\nvar startHelpScreenWidth = 500;\nvar startHelpScreenHeight = 200;\nvar gameAreaBorder = \"thin solid #0000FF\";\nvar startHelpScreenBorder = \"thin solid #0000FF\";\nvar startHelpScreenColor = \"#FFA07A\";\nvar snakeColor = \"#008000\";\nvar fruitColor = \"#FF0000\";\nvar gameAreaColor = \"#ADFF2F\";\nvar snakeHeadColor = \"#006400\";\nvar snakeInitialSpeed = 200; //ms\n\n//# sourceURL=webpack:///./src/parameters.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ \"./src/square.js\");\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters */ \"./src/parameters.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar snakeSize = _parameters__WEBPACK_IMPORTED_MODULE_1__[\"snakeSize\"];\nvar gameAreaWidth = _parameters__WEBPACK_IMPORTED_MODULE_1__[\"gameAreaWidth\"];\nvar gameAreaHeight = _parameters__WEBPACK_IMPORTED_MODULE_1__[\"gameAreaHeight\"];\nvar snakeHeadColor = _parameters__WEBPACK_IMPORTED_MODULE_1__[\"snakeHeadColor\"];\nvar snakeColor = _parameters__WEBPACK_IMPORTED_MODULE_1__[\"snakeColor\"];\nvar snakeInitialSpeed = _parameters__WEBPACK_IMPORTED_MODULE_1__[\"snakeInitialSpeed\"];\nvar initialX = _parameters__WEBPACK_IMPORTED_MODULE_1__[\"initialX\"];\nvar initialY = _parameters__WEBPACK_IMPORTED_MODULE_1__[\"initialY\"];\n\nvar Snake = /*#__PURE__*/function () {\n  //Attributes:\n  //   direction;\n  //   body;\n  //   listScoreObserver;\n  //   listFruitObserver;\n  //   listScreeObserver;\n  //   snakeSpeed;\n  function Snake(direction) {\n    _classCallCheck(this, Snake);\n\n    this.direction = direction; //\"down\", \"up\", \"left\", \"right\"\n    //Snake body\n\n    var head = new _square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](snakeSize, snakeSize, snakeHeadColor, initialX, initialY);\n    var piece1 = new _square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](snakeSize, snakeSize, snakeColor, initialX, initialY - 1);\n    var piece2 = new _square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](snakeSize, snakeSize, snakeColor, initialX, initialY - 2);\n    var piece3 = new _square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](snakeSize, snakeSize, snakeColor, initialX, initialY - 3);\n    this.body = [head, piece1, piece2, piece3];\n    this.listScoreObserver = [];\n    this.listFruitObserver = [];\n    this.listScreenObserver = [];\n    this.snakeSpeed = snakeInitialSpeed;\n  }\n\n  _createClass(Snake, [{\n    key: \"addScoreObserver\",\n    value: function addScoreObserver(scoreObserver) {\n      this.listScoreObserver.push(scoreObserver);\n    }\n  }, {\n    key: \"addFruitObserver\",\n    value: function addFruitObserver(fruitObserver) {\n      this.listFruitObserver.push(fruitObserver);\n    }\n  }, {\n    key: \"addScreenObserver\",\n    value: function addScreenObserver(screenOserver) {\n      this.listScreenObserver.push(screenOserver);\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      var length = this.body.length; //Body mouvement\n\n      for (var i = 1; i < length; i++) {\n        var _x = this.body[length - i - 1].x,\n            _y = this.body[length - i - 1].y;\n        this.body[length - i].setXY(_x, _y);\n      } //Head mouvement\n\n\n      var x = this.body[0].x,\n          y = this.body[0].y;\n\n      if (this.direction === \"up\") {\n        this.body[0].setXY(x, y - 1);\n      } else if (this.direction === \"down\") {\n        this.body[0].setXY(x, y + 1);\n      } else if (this.direction === \"right\") {\n        this.body[0].setXY(x + 1, y);\n      } else if (this.direction === \"left\") {\n        this.body[0].setXY(x - 1, y);\n      } //When snake is outside gameArea\n\n\n      x = this.body[0].x, y = this.body[0].y;\n\n      if (this.body[0].x < 0) {\n        this.body[0].setXY(gameAreaWidth / snakeSize - 1, y);\n      } else if (this.body[0].x > gameAreaWidth / snakeSize - 1) {\n        this.body[0].setXY(0, y);\n      } else if (this.body[0].y < 0) {\n        this.body[0].setXY(x, gameAreaHeight / snakeSize - 1);\n      } else if (this.body[0].y > gameAreaHeight / snakeSize - 1) {\n        this.body[0].setXY(x, 0);\n      }\n\n      this.checkSnakeEatFruit();\n      this.checkSnakeEatSnake();\n    }\n  }, {\n    key: \"increaseSpeed\",\n    value: function increaseSpeed() {\n      this.snakeSpeed = this.snakeSpeed * 0.90;\n    }\n  }, {\n    key: \"resetSnake\",\n    value: function resetSnake() {\n      var length = this.body.length;\n      this.snakeSpeed = snakeInitialSpeed;\n\n      for (var i = 1; i < length - 3; i++) {\n        this.body[length - i].removeDiv();\n        this.body.splice(length - i);\n      }\n\n      this.body[0].setXY(initialX, initialY);\n      this.body[1].setXY(initialX, initialY - 1);\n      this.body[2].setXY(initialX, initialY - 2);\n      this.body[3].setXY(initialX, initialY - 3);\n      this.direction = \"down\";\n    }\n  }, {\n    key: \"findRandomPosition\",\n    value: function findRandomPosition() {\n      var fruit = this.listFruitObserver[0];\n      var fruitIsOnSnake = true;\n      var x, y;\n\n      while (fruitIsOnSnake) {\n        fruitIsOnSnake = false;\n        x = Math.floor(gameAreaWidth / snakeSize * Math.random());\n        y = Math.floor(gameAreaHeight / snakeSize * Math.random());\n        this.body.forEach(function (item) {\n          if (x === item.x && y === item.y) fruitIsOnSnake = true;\n        });\n      }\n\n      fruit.setXY(x, y);\n    }\n  }, {\n    key: \"checkSnakeEatFruit\",\n    value: function checkSnakeEatFruit() {\n      var length = this.body.length;\n      var x = this.body[length - 1].x,\n          y = this.body[length - 1].y;\n      var fruit = this.listFruitObserver[0]; //Snake eat fruit\n\n      if (this.body[0].x === fruit.x && this.body[0].y === fruit.y) {\n        var snakeNewPiece = new _square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](snakeSize, snakeSize, snakeColor, x, y);\n        this.body.push(snakeNewPiece);\n        this.findRandomPosition(); //fruit new position\n\n        this.listScoreObserver[0].increaseScore();\n        this.increaseSpeed();\n      }\n    }\n  }, {\n    key: \"checkSnakeEatSnake\",\n    value: function checkSnakeEatSnake() {\n      var length = this.body.length;\n      var snakeEatSnake = false; //Snake eat snake\n\n      for (var i = 1; i < length; i++) {\n        if (this.body[0].x === this.body[i].x && this.body[0].y === this.body[i].y) {\n          snakeEatSnake = true;\n        }\n      }\n\n      if (snakeEatSnake) {\n        this.listScoreObserver[0].resetScore();\n        this.listScreenObserver[0].stop();\n        this.resetSnake();\n      }\n    }\n  }]);\n\n  return Snake;\n}();\n\n\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ }),

/***/ "./src/square.js":
/*!***********************!*\
  !*** ./src/square.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Square; });\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ \"./src/parameters.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar snakeSize = _parameters__WEBPACK_IMPORTED_MODULE_0__[\"snakeSize\"];\n\nvar Square = /*#__PURE__*/function () {\n  //Attributes:\n  //  div;\n  //  x;\n  //  y;\n  function Square(width, height, color, x, y) {\n    var border = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : \"\";\n\n    _classCallCheck(this, Square);\n\n    this.div = document.createElement(\"div\");\n    this.div.className = \"box\";\n    this.div.style.width = width;\n    this.div.style.height = height;\n    this.div.style.backgroundColor = color;\n    this.div.style.position = \"absolute\";\n    this.div.style.top = y * snakeSize;\n    this.div.style.left = x * snakeSize;\n    this.div.style.border = border;\n    document.body.appendChild(this.div);\n    this.x = x;\n    this.y = y;\n  }\n\n  _createClass(Square, [{\n    key: \"setXY\",\n    value: function setXY(x, y) {\n      this.x = x;\n      this.y = y;\n      this.div.style.top = y * snakeSize;\n      this.div.style.left = x * snakeSize;\n    }\n  }, {\n    key: \"addDiv\",\n    value: function addDiv() {\n      document.body.appendChild(this.div);\n    }\n  }, {\n    key: \"removeDiv\",\n    value: function removeDiv() {\n      document.body.removeChild(this.div);\n    }\n  }]);\n\n  return Square;\n}();\n\n\n\n//# sourceURL=webpack:///./src/square.js?");

/***/ }),

/***/ "./src/startHelpScreen.js":
/*!********************************!*\
  !*** ./src/startHelpScreen.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StartHelpScreen; });\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ \"./src/square.js\");\n/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters */ \"./src/parameters.js\");\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar startHelpScreenBorder = _parameters__WEBPACK_IMPORTED_MODULE_1__[\"startHelpScreenBorder\"];\n\nvar StartHelpScreen = /*#__PURE__*/function () {\n  //Attributes:\n  //  pauseScreen;\n  //  startScreen;\n  //  gameIsOnPause; \n  //  gameOver;\n  //  listObserver;\n  function StartHelpScreen(width, height, color, x, y) {\n    var border = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : \"\";\n\n    _classCallCheck(this, StartHelpScreen);\n\n    this.pauseScreen = new _square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](width, height, color, x, y, startHelpScreenBorder);\n    this.pauseScreen.div.style.opacity = 0.6;\n    this.pauseScreen.removeDiv();\n    var pauseTxt = document.createTextNode(\"Game is on pause. Press P to play!\");\n    var pauseTxtField = document.createElement(\"output\");\n    pauseTxtField.appendChild(pauseTxt);\n    this.pauseScreen.div.appendChild(pauseTxtField);\n    this.pauseScreen.div.style.fontSize = \"350%\";\n    this.pauseScreen.div.style.textAlign = \"center\";\n    document.body.appendChild(this.pauseScreen.div);\n    this.startScreen = new _square__WEBPACK_IMPORTED_MODULE_0__[\"default\"](width, height, color, x, y, startHelpScreenBorder);\n    this.startScreen.removeDiv();\n    var startTxt = document.createTextNode(\"Welcome to JSSnake Game!!! --------------------------------- Press R: start | W, A, S, D: move the snake | P: pause\");\n    var startTxtField = document.createElement(\"output\");\n    startTxtField.appendChild(startTxt);\n    this.startScreen.div.appendChild(startTxtField);\n    this.startScreen.div.style.fontSize = \"250%\";\n    this.startScreen.div.style.textAlign = \"center\";\n    document.body.appendChild(this.startScreen.div);\n    this.gameIsOnPause = true;\n    this.gameOver = true;\n    this.listObserver = [];\n  }\n\n  _createClass(StartHelpScreen, [{\n    key: \"addObserver\",\n    value: function addObserver(observer) {\n      this.listObserver.push(observer);\n    }\n  }, {\n    key: \"pausePlay\",\n    value: function pausePlay() {\n      if (!this.gameOver) {\n        if (this.gameIsOnPause) {\n          this.play();\n        } else {\n          this.pause();\n        }\n      }\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this.gameIsOnPause = true;\n      this.pauseScreen.addDiv();\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      this.gameIsOnPause = false;\n      this.pauseScreen.removeDiv();\n    }\n  }, {\n    key: \"startStop\",\n    value: function startStop() {\n      if (this.gameOver) {\n        this.start();\n      } else {\n        this.stop();\n      }\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.gameOver = true;\n      this.pause();\n      this.startScreen.addDiv();\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.gameOver = false;\n      this.play();\n      this.startScreen.removeDiv();\n\n      var _iterator = _createForOfIteratorHelper(this.listObserver),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var snake = _step.value;\n          snake.resetSnake();\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }]);\n\n  return StartHelpScreen;\n}();\n\n\n\n//# sourceURL=webpack:///./src/startHelpScreen.js?");

/***/ })

/******/ });