// pattern to be printed 
//    A          
//   ABA
//  ABCBA
// ABCDCBA

// row  space  alphabet
//  1     3 3     A         0    A          
//  2     2 2     ABA       3    AB A      
//  3     1 1     ABCBA     5    ABC BA     
//  4     0 0     ABCDCBA   7    ABCD CBA  

let pattern17 = function(n){
    let finalResult = ""
    for(let i=1; i<=n; i++){
        let data = 0
        let result=""
        // for spaces 
        for(j=0; j<n-i; j++){
            result+= "  "
        }
        // for alphabets
        for(z=0; z<(2*i)-1; z++){
           if(z<i){
            result+= String.fromCharCode(65+z)
           }else{
            result+=String.fromCharCode(65+2*(i-1)-z)
           }
        }
        finalResult+=result
        if(n!=n-1){
            finalResult+="\n"
        }
        
    }
    return finalResult;
}

console.log(pattern17(5))


