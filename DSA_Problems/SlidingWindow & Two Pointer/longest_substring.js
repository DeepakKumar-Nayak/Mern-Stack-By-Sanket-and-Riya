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

//console.log(find_longest_substring('cadbzabcde'))

// we can also take r-l+1
// by taking r=0; l=0;

// lets go for a sliding windpw solution the sliding window is like two pointer but there is a little bit of diffrence its not same to same.
// and yes one more point if we are looking for substring like programs then better we should go for two pointer or sloding window approach.

let find_long_substr = function(s){
    let n = s.length

    let l = 0;
    let r = 0
    let maxLength =0;
    // in sliding window we can take same value for l and r. 

    while(r<n){
        // why r<n because i can move r upto n-1.
        
    }
}
console.log(find_long_substr('cadbzabcde'))