let upperTriangle = function(n){
    let finalResult = ""
    for(let i=1; i<=n; i++){
        let result = ""

        // lets print space first of all
        for(let j=1; j<=n-i; j++){
            result+="  "
        }

        // lets print star now; 
        for(let z = 1; z<=2*(i)-1; z++){
            result+="* "
        }

        for(let k=1; k<=n-i; k++){
            result+="  "
        }
        finalResult+=result

        if(i!==5){
            finalResult+='\n'
        }
    }
    return finalResult;
}

let lowerTriangle = function(n){
    let finalResult=""

    for(let i=0; i<5; i++){
        let result=""
        
        // for spaces
        for(let j=1; j<i+1; j++){
            result+="  "
        }
        // for stars
        for(let z=i; z<(2*n-i)-1; z++){
            result+="* "
        }
        for(let j=1; j<i+1; j++){
            result+="  "
        }

        finalResult+=result
        if(i!==4){
            finalResult+="\n"
        }
    }
    return finalResult;
    
}

console.log(upperTriangle(5))
console.log(lowerTriangle(5))