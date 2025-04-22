// madam dono side se padho toh apko same aaega spelling 

let pallindrome = function(n){
    let convert = String(n).toLowerCase()
    let result = ""
    for(let i=convert.length-1; i>=0; i--){
        result+= convert[i]
    }
    if(result === convert){
        return true
    }else{
        return false
    }
    
    
}
console.log(pallindrome("madam"))