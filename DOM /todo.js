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

    //adding class to an li element before appending
    createLi.classList.add('todo-item')

    // creating and addind edit and delete button 
    const creatediv = document.createElement('div')
    creatediv.classList.add('delete_edit_buttons')

    const editBtn = document.createElement("button")
    editBtn.textContent = 'Edit'
    editBtn.classList.add('edit-btn')

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add('delete-btn')

    createLi.appendChild(creatediv)

    creatediv.appendChild(editBtn)
    creatediv.appendChild(deleteBtn)

    taskList.appendChild(createLi)
    
}

document.addEventListener('DOMContentLoaded', ()=>{
   const todoInput = document.getElementById('todo-input')
   
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
            todoInput.value = ""
        }
   })

    const todo = getTodoFromLocalStorage()
    todo.forEach((data)=>{
    addTodo(data)
})
   
   
})