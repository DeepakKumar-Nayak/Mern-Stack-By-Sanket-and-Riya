// longest substring without rewpeating a character.
let find_longest_substring = function(s){
    let i = 0; 
    let j = 1; 
    let maxLength = 0;
    let find_string = ''
    while(i<s.length && j<s.length){
        if(s[i]!=s[j]&& !find_string.includes(s[i])){
            find_string+=s[i]
            maxLength = Math.max(maxLength,find_string.length)
        }else if(!find_string.includes(s[j])){
            find_string+=s[j]
            maxLength = Math.max(maxLength,find_string.length)
            j++
        }
        else{
            i++
            j=i+1
            find_string=""
        }
    }
    return maxLength;
}

console.log(find_longest_substring('cadbzabcde'))

