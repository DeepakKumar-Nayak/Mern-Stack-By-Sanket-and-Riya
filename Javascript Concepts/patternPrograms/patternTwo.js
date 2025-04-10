// pattern to be printed
// *
// * *
// * * *
// * * * *
// * * * * *

var patternTwo = function(){
    let finalresult = ""
    for(let i=1; i<=5; i++){
        let result = ""
        for(let j=1; j<=i; j++){
            result+="* "
        }
        finalresult+= result+"\n"
    }
    return finalresult.trim();
}

console.log(patternTwo(5))

