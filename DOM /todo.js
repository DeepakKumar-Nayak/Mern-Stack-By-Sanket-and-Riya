function getTodoFromLocalStorage() {
    const todos = JSON.parse(localStorage.getItem('todos')) || { todoList: [] }
    //console.log(todos)
    return todos;
}

function refreshTodos(todos){
    localStorage.setItem("todos",todos)
}

function addTodoToLocalStorage(todo) {
    console.log(todo, 'inside addTodoToLocalStorage')
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

function addTodo(todo) {
 
    console.log(todo, 'inside addData')
    const taskList = document.getElementById('taskList')
    const createLi = document.createElement("li")
    createLi.textContent = todo.text
    createLi.setAttribute('todo-id', todo.id)


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

function completeTodo(event){
    const element = event.target.parentElement.parentElement
    const todoId = element.getAttribute('todo-id')
    const todos = getTodoFromLocalStorage()
    todos.forEach((todo)=>{
        if(todo.id === todoId){
            todo.isCompleted = !todo.isCompleted
        }
    })
    return refreshTodos(todos)
}


document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input')
    const submitButton = document.getElementById("addTodo")
    const taskList = document.getElementById('taskList')
    const todo = getTodoFromLocalStorage() 


    

   const filterBtns = document.getElementsByClassName('filterbtn')
    for (let btn of filterBtns) {
        btn.addEventListener('click', executeFilter)
    }

    const completedBtns = document.getElementsByClassName('complete-btn')
    for(const btn of completedBtns){
        btn.addEventListener('click', completeTodo)
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

    todo.todoList.forEach((data) => {
        addTodo(data)
    })


})