// pattern we have to print
// * * * *
// * * * *
// * * * *
// * * * *

function patternOne(n){
    for(let row = 1; row <=n; row++){
        let star = ""
        for(let col = 1; col<=n; col++){
            star += "* "
        }
        console.log(star)
    }
}
patternOne(4)

