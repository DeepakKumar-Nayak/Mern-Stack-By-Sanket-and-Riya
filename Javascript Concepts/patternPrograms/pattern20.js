// pattern to be printed 
// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * * 
// *                 *

// row     star   spaces 
//  1        1      8
//  2        2      6
//  3        3      4
//  4        4      2
//  5        5      0
//  6        4      2    i=1 i<= 2*(i-n)   7-5 = 2*2 = 4 2*(8-5) = 6 
//  7        3      4   
//  8        2      6    
//  9        1      8    

let pattern20 = function(n){
    let finalresult = "";
    for(let i=1; i<=n*2-1; i++){
        let result = ""
        if(i>5){
            // for star
            for(let j=1; j<=(5*2)-i; j++){
                result+="* "
            }

            // for spaces
            for(let k=1; k<=2*(i-n); k++){
                result+="  "
            }
            for(let j=1; j<=(5*2)-i; j++){
                result+="* "
            }
        }else{
            // for stars
            for(let z=1; z<=i; z++){
                result+="* "
            }

            // for spaces
            for(a=1; a<=2*(n-i); a++){
                result+="  "
            }
            for(let z=1; z<=i; z++){
                result+="* "
            }

        }
        finalresult+=result;
        if(i!= n*2-1){
            finalresult+="\n"
        }
    }
    return finalresult
}
console.log(pattern20(5))