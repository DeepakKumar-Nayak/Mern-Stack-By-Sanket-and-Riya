// pattern to be printed 
// 1
// 0 1 
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

let pattern11 = function(n){
    let finalResult=""
    for(let i=0; i<n; i++){
        let start = 1;
        let end = 0;
        let result=""
        if(i% 2==0){
            for(j=1; j<=i+1; j++){
                if(start==1){
                    result+=start+" "
                    start =0;
                }else{
                    result+=start+" "
                    start=1
                }
                
            }
        }else{
            for(j=1;j<=i+1; j++){
                if(end ==0){
                    result+=end+" "
                    end=1
                }else{
                    result+=end+" "
                    end=0
                }
            }
        }
        finalResult+=result
        if(i!==4){
            finalResult+="\n"
        }
    }
    return finalResult
}
console.log(pattern11(5))

