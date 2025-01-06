document.addEventListener('DOMContentLoaded', ()=>{
    const gameArena = document.getElementById('game-arena')
    const arenaSize = 600;
    const cellSize = 20

    let score = 0;
    let gameStarted = false;
    let food = {x:300, y:200}
    let snake = [{x:160, y:200}, {x:140, y:200}, {x:120, y:200}]

    function initiateGame(){
        const scoreBoard = document.createElement('div')
        scoreBoard.id ="score-board"

        document.body.insertBefore(scoreBoard, gameArena)
        // insert scoreboard before game arena

        const startButton = document.createElement('button')
        startButton.textContent = "Start Game"
        startButton.classList.add('start-button')

        document.body.appendChild(startButton)
        // apend start button to the body

    }
})