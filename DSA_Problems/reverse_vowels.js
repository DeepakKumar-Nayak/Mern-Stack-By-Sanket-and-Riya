
let vowelsCheck = function(s){
    let char = s.split("")
    let i=0;
    let j = char.length-1
    let vowels = 'aeiouAEIOU'
    
    while(i<j){
        if(vowels.includes(char[i]) && vowels.includes(char[j])){
            let temp = char[i];
            char[i] = char[j];
            char[j] = temp
            i++; 
            j--
        }else{
            if (!vowels.includes(char[i])){
                i++;
            } 
            if (!vowels.includes(char[j])){
                j--;
            } 
        }
    }
    return char.join('');
}
console.log(vowelsCheck('IceCreAm'))