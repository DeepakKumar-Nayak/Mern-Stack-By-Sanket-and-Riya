// pattern to be orinted
// *                 
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

//row star
// 1    1
// 2    2
// 3    3
// 4    4
// 5    5
// 6    4 2*n-1 2*5=10-6
// 7    3 
// 8    2 
// 9    1 


let upperTriangle = function(n){
    let finalResult =""
    for(let i=1; i<=(2*n)-1; i++){
        let result = ""
        if(n<i){
            for(let z=1; z<=(2*n)-i; z++){
                result+="* "
            }
        }else{
            for(let j=1; j<=i; j++){
                result+="* "
            }
        }
        finalResult+=result
        if(i!== (2*n)-1){
            finalResult+="\n"
        }
    }
    
    return finalResult;
}

console.log(upperTriangle(5))