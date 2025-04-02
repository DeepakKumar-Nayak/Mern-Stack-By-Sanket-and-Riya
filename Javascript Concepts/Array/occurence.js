let string = "missippi";
let frequency = {}
let occurence = 0; 

for(let i of string){
    occurence = 0;
    if(i in frequency){
        let getOccurence = frequency[i]
        occurence = getOccurence
        occurence+=1
        frequency[i] = occurence
    }else{
        occurence+=1
        frequency[i] = occurence

    }
}

console.log(frequency)

// Solution Given by sir 
let str = "missippi"
let freMap = {}

for(let i of str){
    if(freMap[i]){
        freMap[i]+=1
    }else{
        freMap[i] = 1;
    }
}

console.log(freMap)