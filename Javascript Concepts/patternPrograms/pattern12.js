// pattern to be printed
// 1 _ _ _ _ _ _ 1
// 1 2 _ _ _ _ 2 1
// 1 2 3 _ _ 3 2 1
// 1 2 3 4 4 3 2 1

// row  space
//  1     6 2*3 = 6
//  2     4 2*2 = 4
//  3     2 2*1 = 2
//  4     0 2*0 = 0

let pattern12 = function(n){
    let finalResult = ""
    for(let i=1; i<=n; i++){
        let result = ""
        
        // for numbers
        for(let j=1; j<=i; j++){
            result+=j+" "
        }
        
        // for space
        for(z=1; z<=2*(n-i); z++){
            result+="_ "
        } 

        let value = i
        for(k=1; k<=i; k++){
            result+=value+" ";
            value-=1
        }
        finalResult+=result+"\n"
    }
    return finalResult
}

console.log(pattern12(4))