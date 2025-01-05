function getTodoFromLocalStorage() {
    const todos = JSON.parse(localStorage.getItem('todos')) || {"todoList":[]}
    //console.log(todos)
    return todos
    
}

function refreshTodos(todos){
    //console.log(todos)
    localStorage.setItem("todos",JSON.stringify(todos))
}

function addTodoToLocalStorage(todo) {
    //console.log(todo, 'inside addTodoToLocalStorage')
    const todos = getTodoFromLocalStorage()


    todos.todoList.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}



function executeFilter(event) {
    const taskList = document.getElementById('taskList')
    let element = event.target
    //console.log(element)
    const value = element.getAttribute('data-filter')
    taskList.innerHTML = ""
    const todos = getTodoFromLocalStorage()
    //console.log(value)

    if (value === "all") {
        todos.todoList.forEach((data) => {
            addTodo(data)
        })
    } else if (value === "pending") {
        todos.todoList.forEach((data) => {
            if (data.isCompleted !== true) {
                addTodo(data)
            }
        })
    } else {
        todos.todoList.forEach((data) => {
            if (data.isCompleted == true) {
                addTodo(data)
            }
        })
    }
}

function completeTodo(event){
    const element = event.target.parentElement.parentElement
    console.log(element,'inside complete')
    const todoId = element.getAttribute('data-id')
    console.log(todoId)
    const todos = getTodoFromLocalStorage()
    todos.todoList.forEach((todo)=>{
        if(todo.id == todoId){
            todo.isCompleted = !todo.isCompleted
        }
    })
    refreshTodos(todos)
    const taskList = document.getElementById('taskList')
    taskList.innerHTML = ""
    todos.todoList.forEach((todo)=>{
        addTodo(todo)
    })
}

function deleteData(event){
    const element = event.target.parentElement.parentElement
    const todoId = element.getAttribute('data-id')
    console.log(todoId,'inside deleteData')
    let todos = getTodoFromLocalStorage()
    todos.todoList = todos.todoList.filter((data)=>{
        return data.id != todoId
    })
    refreshTodos(todos)
    const taskList = document.getElementById('taskList')
    taskList.innerHTML = ""
    todos.todoList.forEach((todo)=>{
        addTodo(todo)
    })
    
}

function performEdit(event){
    const element = event.target.parentElement.parentElement
    const todoId = element.getAttribute('data-id')
    const todos = getTodoFromLocalStorage()
    const response = prompt('enter the new data')
    todos.todoList.forEach((data)=>{
        if(data.id == todoId){
            data.text = response
        }
    })
    refreshTodos(todos)
    const taskList = document.getElementById('taskList')
    taskList.innerHTML = ""
    todos.todoList.forEach((todo)=>{
        addTodo(todo)
    })
}

function addTodo(todo) {
 
    //console.log(todo, 'inside addData')
    const taskList = document.getElementById('taskList')
    const createLi = document.createElement("li")
    createLi.textContent = todo.text
    createLi.setAttribute('data-id', todo.id)


    //adding class to an li element before appending
    createLi.classList.add('todo-item')

    // creating and addind edit and delete button 
    const creatediv = document.createElement('div')
    creatediv.classList.add('delete_edit_buttons')

    // creating edit button
    const editBtn = document.createElement("button")
    editBtn.textContent = 'Edit'
    editBtn.classList.add('edit-btn')
    editBtn.addEventListener('click', performEdit)
   
    // creating delete button
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add('delete-btn')
    deleteBtn.addEventListener('click', deleteData)


    // creating an completed button
    const completedBtn = document.createElement('button')
    completedBtn.textContent = todo.isCompleted ? "Work Completed": "Click If You Have Completed The Task"
    completedBtn.classList.add('complete-btn')
    completedBtn.addEventListener('click',completeTodo)

    createLi.appendChild(creatediv)

    creatediv.appendChild(editBtn)
    creatediv.appendChild(deleteBtn)
    creatediv.appendChild(completedBtn)

    taskList.appendChild(createLi)

}



document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input')
    const submitButton = document.getElementById("addTodo")
    const todo = getTodoFromLocalStorage()
    const taskList = document.getElementById('taskList')
     


    

    const filterBtns = document.getElementsByClassName('filterbtn')
    for (let btn of filterBtns) {
        btn.addEventListener('click', executeFilter)
    }

    const completedBtns = document.getElementsByClassName('complete-btn')
    for(const btn of completedBtns){
        btn.addEventListener('click', completeTodo)
    }

    const deleteBtns = document.getElementsByClassName('delete-btn')
    for(const btns of deleteBtns){
        console.log(btns)
        btns.addEventListener('click', deleteData)
    }

    const editBtns = document.getElementsByClassName('edit-btn')
    for(btn of editBtns){
        btn.addEventListener('click', performEdit)
    }

    todoInput.addEventListener('change', (event) => {
        const todoText = event.target.value;
        event.target.value = todoText.trim()
        console.log(event.target.value)
    })


    function getTodoLength() {
        const todo = getTodoFromLocalStorage()
        let todoid;
        if (todo.todoList.length === 0) {
            todoid = 0;
        } else {
            todoid = todo.todoList.length
        }
        return todoid;
    }

    submitButton.addEventListener('click', () => {
        const todoText = todoInput.value
        if (todoText === "") {
            alert('please enter some todo')
        } else {
            addTodoToLocalStorage({
                text: todoText,
                isCompleted: false,
                id: getTodoLength()

            })
            addTodo({ text: todoText, isCompleted: false, id: getTodoLength() })
            todoInput.value = ""
        }
    })

    todo.todoList.forEach((data)=>{
        addTodo(data)
    })

})