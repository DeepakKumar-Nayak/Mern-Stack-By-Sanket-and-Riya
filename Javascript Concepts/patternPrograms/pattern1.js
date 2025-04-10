// pattern to be printed
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function patternOne(n){
    let finalresult = ""
    for(let i=0; i<n; i++){
        let result = ""
        for(let j=0; j<n; j++){
            result+="* "
        }
        finalresult+=result+"\n"
    }
    return finalresult;
}
//console.log(patternOne(5))

// without using return
function pattern_One(n){
    for(let i=1; i<=n; i++){
        let result = ""
        for(let j=1; j<=n; j++){
            result+="* "
        }
        console.log(result)
    }
}

pattern_One(5)

// leet code style solution 
var patternOne = function(n) {
    let output = [];
    for (let i = 1; i <= n; i++) {
        let result = "";
        for (let j = 1; j <= n; j++) {
            result += "* ";
        }
        output.push(result.trim()); // trim extra space at end
    }
    return output;
};