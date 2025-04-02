let arrayOne = [1,0,0,1,1,1,0,1,0,0,1]
let arrayTwo = []
let arrayThree = []

for(let i=0; i<arrayOne.length; i++){
    if(arrayOne[i]== 1){
        arrayTwo.push(arrayOne[i]-1)
    }else{
        arrayThree.push(arrayOne[i]+1)
    }
}

arrayOne = [...arrayTwo, ...arrayThree]
console.log(arrayOne)


