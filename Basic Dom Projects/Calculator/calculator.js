let string = ""
const getInput = document.querySelector('.input')

const allButtons = document.getElementsByClassName('button')
for(let button of allButtons){
    button.addEventListener('click', (event)=>{
        let value = event.target.innerHTML
        console.log(value, 'innerhtml')
        if(value == "="){
            string = eval(string)
            getInput.value = string
        }else if(value == "AC"){
            string = ""
            getInput.value = string
        }else{
            string = string + value
            getInput.value = string
        }
    })
}



