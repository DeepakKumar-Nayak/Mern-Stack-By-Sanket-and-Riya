// pattern to be printed 
//    A          
//   ABA
//  ABCBA
// ABCDCBA

// row  space  alphabet
//  1     3 3     A         0    A               0
//  2     2 2     ABA       3    AB A            0 1 0
//  3     1 1     ABCBA     5    ABC BA          0 1 2 1 0
//  4     0 0     ABCDCBA   7    ABCD CBA        0 1 2 3 2 1 0

let pattern17again = function(n){
    let finalResult="";
    for(let i=1; i<=n; i++){
        let result=""

        // for spaces left; 
        for(j=1; j<=n-i; j++){
            result+="  "
        }

        // for aplhabets: 
        for(z=0; z<(2*i)-1; z++){
            if(z<i){
                result+=String.fromCharCode(65+z)+" "
            }else{
                result+=String.fromCharCode(65+2*(i-1)-z)+" "
            }
        }

        // again for spaces right
        for(j=1; j<=n-i; j++){
            result+="  "
        }
        finalResult+=result
        if(i!==n){
            finalResult+="\n"
        }
       
    }
    return finalResult;
}

console.log(pattern17again(4))
        