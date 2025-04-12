// pattern to be printed 
// A B C D E
// A B C D 
// A B C
// A B
// A

let pattern15 = function(n){
    let finalResult = "";
    for(let i=0; i<n; i++){
        let result = "";
        for(let j=0; j<n-i; j++){
            result+=String.fromCharCode(65+j)+" "
        }
        finalResult+=result
        if(i!=n-1){
            finalResult+="\n"
        }
    }
    return finalResult;
}
console.log(pattern15(5))