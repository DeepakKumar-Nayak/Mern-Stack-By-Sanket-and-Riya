const button = document.querySelector('.btn')
let check =0;
button.addEventListener('click',function sendRequest(event){
    if(check ==0){
        button.innerHTML = "Following"
        button.style.backgroundColor = "grey"
        button.style.color = "white"
        button.style.fontSize = "15px"
        button.style.fontWeight = "800"
        button.style.borderRadius = "20px"
        check = 1
    }else{
        button.innerHTML = "Follow"
        button.style.backgroundColor = "rgb(14, 151, 242)"
        button.style.fontSize = "15px"
        button.style.fontWeight = "500"
        button.style.borderRadius = "0px"
        check = 0;
        
    }
})