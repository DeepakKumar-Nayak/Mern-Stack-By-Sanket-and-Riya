let string = "javascript";
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

