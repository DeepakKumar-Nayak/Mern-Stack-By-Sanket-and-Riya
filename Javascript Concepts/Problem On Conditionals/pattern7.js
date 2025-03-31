function upperTriangle(n){
    for(let i=1; i<=(n-1)/2; i++){
        let result="";
        for(let j=1; j<=i; j++){
            result+="* "
        }
        for(let z=1; z<=n-(2*i); z++){
            result+="- "
        }
        for(let k=1; k<=i; k++){
            result+="* "
        }
        console.log(result)
    }
}

function MiddleStar(n){
    let star = ""
    for(let i=1; i<=n; i++){
        star+="* "
    }
    console.log(star)
}

function lowerTriangle(n){
    for(let i=1; i<= (n-1)/2; i++){
        let stars = "";
        for(let j=1; j<=(n-1)/2-i+1; j++){
            stars+="* "
        }
        for(let z=1; z<=(2*i)-1; z++){
            stars+="- "
        }
        for(let j=1; j<=(n-1)/2-i+1; j++){
            stars+="* "
        }
        console.log(stars)
    }
}



upperTriangle(10)
MiddleStar(10)
lowerTriangle(10)