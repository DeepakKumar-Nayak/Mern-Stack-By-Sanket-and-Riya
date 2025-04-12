// pattern to be printed
// A
// A B 
// A B C
// A B C D
// A B C D E

let pattern14 = function(n){
    let finalResult=""
    for(let i=0; i<n; i++){
        let result=""
        for(let j=0; j<=i; j++){
            result+= String.fromCharCode(65+j)+" "
        }
        finalResult+=result
        if(i!==n-1){
            finalResult+="\n"
        }
    }
    return finalResult;
}

console.log(pattern14(5))