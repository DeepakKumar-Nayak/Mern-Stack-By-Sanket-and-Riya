function greetFunction(welcome){
    welcome('Deepak','whats Your Plan for Today')
}

greetFunction(function welcomeFunction(name,msg){
    console.log('hello my name is',name,msg)
})  