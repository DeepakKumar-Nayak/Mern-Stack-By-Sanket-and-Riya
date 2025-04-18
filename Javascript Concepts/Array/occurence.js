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

//console.log(frequency)

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

//console.log(freMap)

let arr = [2,1,3,4,2,3,1,5,6,4,5,6,8,9,7,0]
let freq = {}
for(let i of arr){

    if(freq[i]){
        freq[i]+=1
    }else{
        freq[i] = 1;
    }
}


for(let i in freq){
    console.log(typeof Number(i), freq[i])
}


/// trying to calculate the frequency 
//let str = 'missippi'
//let frequency = {}
// so basically i can do it with the help of for of loop and normal for loop 
// kyun ki ham for of loop use kar sakhte hai iterebles mein and for in objects 
// mein use hota hai aggar meinr for of loop wahan use kiya toh we will get an error 
// like objects are not iterables.

for(let char of str){
    if(frequency[char]){
        frequency[char]+=1
    }else{
        frequency[char] = 1
    }
}
