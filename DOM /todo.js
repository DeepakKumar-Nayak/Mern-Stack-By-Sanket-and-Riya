function getTodoFromLocalStorage(){
    const todo = JSON.parse(localStorage.getItem('todo')) || []
    return todo; 
}

function addTodoToLocalStorage(todoText){
    const todo = getTodoFromLocalStorage()
    todo.push(todoText)
    localStorage.setItem('todo',JSON.stringify(todo))
}

function addTodo(todoText){
    const taskList = document.getElementById('taskList')
    const createLi = document.createElement("li")
    createLi.textContent = todoText
    taskList.appendChild(createLi)
}

document.addEventListener('DOMContentLoaded', ()=>{
   const todoInput = document.getElementById('todo-input')
   const taskList = document.getElementById('taskList')

   todoInput.addEventListener('change', (event)=>{
        const todoText = event.target.value;
        event.target.value = todoText.trim()
        console.log(event.target.value)
   })

   const submitButton = document.getElementById("addTodo")
   submitButton.addEventListener('click', ()=>{
        const todoText = todoInput.value
        if(todoText === ""){
            alert('please enter some todo')
        }else{
            addTodoToLocalStorage(todoText)
            addTodo(todoText)
        }
   })

const todo = getTodoFromLocalStorage()
todo.forEach((data)=>{
    
    const createLi = document.createElement("li")
    createLi.textContent = data
    taskList.appendChild(createLi)
})
   
   
})