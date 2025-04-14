//pattern to be printed 
// E            65+4
// D E          65+3, 65+4 
// C D E        65+2, 65+3, 65+4
// B C D E      65+1, 65+2, 65+3, 65+4
// A B C D E    65+0  65+1, 65+2, 65+3, 65+4


let function17 = function(n){
    let finalResult="";
    for(let i=1; i<=n; i++){
        let result =""
        for(j=n-i; j<=n-1; j++){
            result+= String.fromCharCode(65+j)+" "
        }
        finalResult+=result
        if(i!==n){
            finalResult+="\n"
        }
    }
    return finalResult
}

console.log(function17(5))