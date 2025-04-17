// unique elements ko dhoondna padega jo dono array mein present ho 
let arrOne = [1,2,2,1]
let arrTwo = [2,2]

// dono mein common element hai 2 and intersection ka matlab hu yahi hai ki ham common element ko search karenge. 

function findCommonElement(arrOne, arrTwo){
    let output = []
    for(let i=0; i<arrOne.length; i++){
        for(j=0; j<arrTwo.length; j++){
            if(arrOne[i] == arrTwo[j]){
                if(!output.includes(arrOne[i])){
                    output.push(arrOne[i])
                }
            }
        }
    }
    return output;
    
}

console.log(findCommonElement(arrOne,arrTwo))