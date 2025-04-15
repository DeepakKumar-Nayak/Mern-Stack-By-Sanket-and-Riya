// * * * * * * * * * *         
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *
// *                 *
// * *             * * 
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *

// row  star    spaces   star-logic                       space -logic
//  1   5        0        5   n-i+!  5-1+1 = 5            
//  2   4        2        4   n-i+1  5-2+1 = 4
//  3   3        4        3   n-i+1  5-3+1 = 3
//  4   2        6        2   n-1+1  5-4+1 = 2 
//  5   1        8        1   n-1+1  5-5+1 = 1

// row       star       space 
//  1         1          8
//  2         2          6
//  3         3          4
//  4         4          2
//  5         5          0

let upperPattern = function(n){
    let finalresult = ""
    for(let i=0; i<n; i++){
        let result = "";

        // for star
        for(j=1; j<=n-i; j++){
            result+="* "
        }

        // for_spaces
        // we can also use 2*(i-1) if i =1 in this example i have taken i=0
        for(j=1; j<2*i+1; j++){
            result+="  "
        }
        // for star
        for(j=1; j<=n-i; j++){
            result+="* "
        }
        finalresult+=result
        if(i!=n-1){
            finalresult+="\n"
        }
    }
    return finalresult;
}

let lowerTriangle = function(n){
    let finalresult="";
    for(let i=1; i<=n ; i++){
        let result = "";

        // stars
        for(let j=1; j<=i; j++){
            result+="* "
        }

        // space
        for(let z =1; z<=2*(n-i); z++){
            result+="  "
        }
        for(let k=1; k<=i; k++){
            result+="* "
        }
        finalresult+=result
        if(i!= n){
            finalresult+="\n"
        }

    }
    return finalresult
}
console.log(upperPattern(5))
console.log(lowerTriangle(5))