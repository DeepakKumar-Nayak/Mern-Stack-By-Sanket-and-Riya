// sub array apko nikalna hai 
let arrOne = [1,2,3,4]

// 1
// 1 2 
// 1 2 3
// 1 2 3 4

// 2
// 2 3 
// 2 3 4

// 3 
// 3 4

// 4

// for example aise nahi ho sakhta 
// 1 3 
// 2 4 
// 1 3 4


// these things are not possible kyun ki yeah sab continous number nahi hai. 

function printSubArrays(arrOne){
    for(let i=0; i<arrOne.length; i++){
        let str=""
        for(let j=i; j<arrOne.length; j++){
            str+= arrOne[j]
            console.log(str)
        }
    }
}

printSubArrays(arrOne)