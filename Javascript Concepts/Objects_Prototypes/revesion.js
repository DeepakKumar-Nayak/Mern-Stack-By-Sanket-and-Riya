function manualException(){
    let randomNumber = Math.floor(Math.random()*100)
    if(randomNumber % 2 === 0){
        return randomNumber
    }else{
        throw 'Random number is odd'
    }
}

function caller(){
    try{
        console.log('This is risky')
        let response = manualException()
        console.log('risky code working fine',response)
    }catch(exception){
        console.log('we are in catch')
        console.log(exception)
    }
}

caller()