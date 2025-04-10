// pattern to be printed
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

let function6 = function(n){
    let finalResult="";
    for(let i=0; i<n; i++){
        let result ="";
        for(j=1; j<=n-i; j++){
            result+=j+" "
        }
        finalResult+=result +"\n"
    }
    return finalResult.trim()
}

console.log(function6(5))