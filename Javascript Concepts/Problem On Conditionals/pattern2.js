// *
// * *
// * * *
// * * * *

function pattern2(n){
    for(let i=1; i<=n; i++){
        let star = " "
        for(j=1; j<=i; j++){
            star+="* "
        }
        console.log(star)
    }
}

pattern2(4)