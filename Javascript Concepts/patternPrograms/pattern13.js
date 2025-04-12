// pattern to be printed
// 1 --------------- 1                     
// 2 3  ----------- +1                 
// 4 5 6  --------- +2                
// 7 8 9 10 ------- +3             
// 11 12 12 14 15 - +4       

let pattern13 = function(n){
    let finalResult = ""
    let lastvalue = 1
    for(let i=1; i<=n; i++){
        let result=""
        for(j=1; j<=i; j++){
           result+=lastvalue+" "
           lastvalue+=1
        }
        finalResult+=result
        if(i!==n){
            finalResult+='\n'
        }
    }
    return finalResult
}
console.log(pattern13(10))