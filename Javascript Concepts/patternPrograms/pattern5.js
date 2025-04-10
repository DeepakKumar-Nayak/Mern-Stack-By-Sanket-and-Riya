// pattern to be printed 
// * * * * *
// * * * * 
// * * * 
// * * 
// *

let pattern5 = function(n){
    let finalResult = "";
    for(let i=0; i<=n; i++){
        let result = "";
        for(let j=1; j<=n-i; j++){
            result+="* "
        }
        finalResult+=result+"\n"
    }
    return finalResult.trim()
}

console.log(pattern5(5))