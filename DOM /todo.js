function getTodoFromLocalStorage(){
    const todos = JSON.parse(localStorage.getItem('todos')) || {todoList:[]}
    //console.log(todos)
    return todos; 
}

function addTodoToLocalStorage(todo){
    console.log(todo,'inside addTodoToLocalStorage')
    const todos = getTodoFromLocalStorage()
    
    
    todos.todoList.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos))
}



function executeFilter(event){
    const taskList = document.getElementById('taskList')
    let element = event.target
    //console.log(element)
    const value = element.getAttribute('data-filter')
    taskList.innerHTML = ""
    const todos = getTodoFromLocalStorage()
    //console.log(value)
    
    if(value === "all"){
        todos.todoList.forEach((data)=>{
            addTodo(data)
        })
   }else if(value === "pending"){
        todos.todoList.forEach((data)=>{
            if(data.isCompleted !== true){
                addTodo(data)
            }
        })
   }else{
    todos.todoList.forEach((data)=>{
        if(data.isCompleted == true){
            addTodo(data)
        }
    })  
   }
}

function completeTodo(event){
    console.log(event.target)
}

function addTodo(todo){
    //console.log(todo, 'inside addData')
    const taskList = document.getElementById('taskList')
    const createLi = document.createElement("li")
    createLi.textContent = todo.text
    createLi.setAttribute('todo-id', todo.todoId)


    //adding class to an li element before appending
    createLi.classList.add('todo-item')

    // creating and addind edit and delete button 
    const creatediv = document.createElement('div')
    creatediv.classList.add('delete_edit_buttons')

    // creating edit button
    const editBtn = document.createElement("button")
    editBtn.textContent = 'Edit'
    editBtn.classList.add('edit-btn')

    // creating delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add('delete-btn')

    // creating an completed button
    const completedBtn = document.createElement('button')
    completedBtn.textContent = "Completed"
    completedBtn.classList.add('complete-btn')

    createLi.appendChild(creatediv)

    creatediv.appendChild(editBtn)
    creatediv.appendChild(deleteBtn)
    creatediv.appendChild(completedBtn)

    taskList.appendChild(createLi)
    
}


document.addEventListener('DOMContentLoaded', ()=>{
   const todoInput = document.getElementById('todo-input')
   
   todoInput.addEventListener('change', (event)=>{
        const todoText = event.target.value;
        event.target.value = todoText.trim()
        console.log(event.target.value)
   })
   
    const filterBtns = document.getElementsByClassName('filterbtn')
    for(let btn of filterBtns){
        btn.addEventListener('click', executeFilter)
    }
    
    
    function getTodoLength(){
        const todo = getTodoFromLocalStorage()
        let todoid;
        if(todo.todoList.length === 0){
            todoid = 0;
        }else{
            todoid = todo.todoList.length
        }
        return todoid;
    }
    
    
    const submitButton = document.getElementById("addTodo")

   submitButton.addEventListener('click', ()=>{
        const todoText = todoInput.value
        if(todoText === ""){
            alert('please enter some todo')
        }else{
            addTodoToLocalStorage({
                text:todoText,
                isCompleted:false,
                todoId: getTodoLength()
    
            })
            addTodo({text:todoText,isCompleted:false, todoId:getTodoLength()})
            todoInput.value = ""
        }
   })
    
    const todo = getTodoFromLocalStorage()
    todo.todoList.forEach((data)=>{
    addTodo(data)
})
   
   
})