document.addEventListener('DOMContentLoaded', ()=>{
    const gameArena = document.getElementById('game-arena')
    const arenaSize = 600;
    const cellSize = 20

    let score = 0;
    let gameStarted = false;
    let food = {x:300, y:200}
    let snake = [{x:160, y:200}, {x:140, y:200}, {x:120, y:200}]

    let dx = cellSize; // pointing out to column +20
    let dy = 0; // pointing out to row

    function updateSnake(){
        const newHead = {x: snake[0].x+dx, y: snake[0].y +dy}
        snake.unshift(newHead) // add new head to the snake

        // check collosion with food
        if(newHead.x === food.x && newHead.y === food.y){
            score+10
        } else{
            snake.pop() // remove tail
        }
    }

    function changedirection(e){
        const isGoingDown = dy === cellSize;
        const isGoingUp = dy === -cellSize;
        const isGoingLeft = dx === -cellSize;
        const isGoingRight = dx === cellSize
        if(e.key === "ArrowUp" && !isGoingDown){
            console.log(e)
            dx = 0;
            dy = -cellSize; 
        }else if(e.key === "ArrowDown" && !isGoingUp){
            dx = 0;
            dy = cellSize
        }else if(e.key === "ArrowLeft" && !isGoingRight  ){
            dx = -cellSize
            dy = 0;
        }else if(e.key === "ArrowRight" && !isGoingLeft){
            dx = cellSize
        }   dy = 0;
    }
    function drawDiv(x,y,className){
        const divElement = document.createElement('div')
        divElement.classList.add(className)
        divElement.style.top = `${y}px`;
        divElement.style.left = `${x}px`;
        return divElement;
    }


    function drawFoodAndSnake(){
        gameArena.innerHTML = ""; 
        // clear the game arena wiping out everything and redraw the snake

        snake.forEach((data)=>{
            const snakeElement = drawDiv(data.x, data.y, 'snake');
            gameArena.appendChild(snakeElement)
        })

        const foodElement = drawDiv(food.x, food.y, 'food');
        gameArena.appendChild(foodElement)
    }

    function gameLoop(){
        setInterval(()=>{
            updateSnake()
            drawFoodAndSnake()
        },200)
    }

    function runGame(){
        if(!gameStarted){
            gameStarted = true;
            document.addEventListener('keydown', changedirection)
            gameLoop()
        }
    }

    function initiateGame(){
        const scoreBoard = document.createElement('div')
        scoreBoard.id ="score-board"

        document.body.insertBefore(scoreBoard, gameArena)
        // insert scoreboard before game arena

        const startButton = document.createElement('button')
        startButton.textContent = "Start Game"
        startButton.classList.add('start-button')

        startButton.addEventListener('click', function startGame(){
            startButton.style.display = 'none' // hiding start button onclick

            runGame()
        })

        document.body.appendChild(startButton)
        // apend start button to the body

    }
    initiateGame()
})