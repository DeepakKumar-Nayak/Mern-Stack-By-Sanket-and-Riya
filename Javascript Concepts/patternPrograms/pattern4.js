// pattern to be printed
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

var patternFour = function(n){
    let finalResult = ""
    for(let i=1; i<=5; i++){
        let result = ""
        for(let j=1; j<=i; j++){
            result+=i+" "
        }
        finalResult+=result + "\n"
    }
    return finalResult.trim();
}

console.log(patternFour(5))