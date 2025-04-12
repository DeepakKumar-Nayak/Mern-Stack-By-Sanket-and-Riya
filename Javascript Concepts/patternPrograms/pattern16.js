// patternn to be printed 
// A
// B B
// C C C
// D D D D
// E E E E E

let pattern16 = function(n){
    let finalResult=""
    for(let i=0; i<n; i++){
        let result = ""
        for(j=0; j<=i; j++){
            result+=String.fromCharCode(65+i)+" "
        }
        finalResult+=result;
        if(i!=n-1){
            finalResult+="\n"
        }
    }
    return finalResult;
}

console.log(pattern16(5))