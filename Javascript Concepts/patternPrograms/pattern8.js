// pattern to be printed 
// * * * * * * * * * 
//   * * * * * * *
//     * * * * *
//       * * *
//         *
// row space     star
//   1   0 1<1    9 2*5-0-1 = 9 
//   2   1 1<2    7 2*5-1-1 = 8
//   3   2 1<3    5 2*5-2-1 = 7
//   4   3 1<4    3 2*5-3-1 = 6
//   5   4 1<5    1 2*5-4-1 = 5


var pattern8 = function (n){
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

console.log(pattern8(5))