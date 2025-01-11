document.addEventListener('DOMContentLoaded', ()=>{
    const gameArena = document.getElementById('game-arena')
    const arenaSize = 600;
    const cellSize = 20
    let intervalId;

    let score = 0;
    let gameStarted = false;
    let food = {x:300, y:200}
    let snake = [{x:160, y:200}, {x:140, y:200}, {x:120, y:200}]

    let dx = cellSize; 
    let dy = 0; // 

    function moveFood(){
        let newX, newY
        
        do{
            newX = Math.floor(Math.random()*30)*cellSize
            newY = Math.floor(Math.random()*30)*cellSize

        }while(snake.some(snakecell => snakecell.x === newX && snakecell.y === newY))
        food = {x:newX, y: newY}
        }

    function updateSnake(){
        const newHead = {x: snake[0].x+dx, y: snake[0].y +dy}
        snake.unshift(newHead) // add new head to the snake

        // check collosion with food
        if(newHead.x === food.x && newHead.y === food.y){
            score+10
            moveFood()
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
            console.log(e.key)
            dx = 0;
            dy = -cellSize; 
        }else if(e.key === "ArrowDown" && !isGoingUp){
            dx = 0;
            dy = cellSize
        }else if(e.key === "ArrowLeft" && !isGoingRight){
            dx = -cellSize
            dy = 0;
        }else if(e.key === "ArrowRight" && !isGoingLeft){
            dx = cellSize
            dy = 0;
        }
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

    function isGameOver(){

        for(let i=1; i<snake.length; i++){
            console.log('inside game over', snake.length)
            if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
                return true
            }
        }

        //wall collosion checks
        const hitleftWall = snake[0].x<0;
        const hitRightWall = snake[0].x > arenaSize - cellSize;
        const hitTopWall = snake[0].y<0;
        const hitBottomWall = snake[0].y>arenaSize - cellSize
        return hitleftWall || hitRightWall || hitTopWall || hitBottomWall
    }

    function gameLoop(){
        intervalId = setInterval(()=>{
            console.log('inside game loop')
            if(isGameOver()){
                clearInterval(intervalId);
                gameStarted = false;
                return
            }
            updateSnake()
            drawFoodAndSnake()
        },200)
    }

    function runGame(){
        if(!gameStarted){
            gameStarted = true;
            console.log('game started', 'inside run game')
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