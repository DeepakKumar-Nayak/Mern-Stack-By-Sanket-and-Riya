// pattern to be printed 
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

var patternThree = function(n){
    let finalResult = ""
    for(let i=1; i<=5; i++){
        let result = ""
        for(let j=1; j<=i; j++){
            result+=j+" "
        }
        finalResult+=result + "\n"
    }
    return finalResult.trim();
}

console.log(patternThree(5))