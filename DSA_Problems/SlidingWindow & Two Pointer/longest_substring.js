// longest substring without rewpeating a character.
let find_longest_substring = function (s) {
    let i = 0;
    let j = 1;
    let maxLength = 0;
    let find_string = ''
    while (i < s.length && j < s.length) {
        if (s[i] != s[j] && !find_string.includes(s[i])) {
            find_string += s[i]
            maxLength = Math.max(maxLength, find_string.length)
        } else if (!find_string.includes(s[j])) {
            find_string += s[j]
            maxLength = Math.max(maxLength, find_string.length)
            j++
        }
        else {
            i++
            j = i + 1
            find_string = ""
        }
    }
    return maxLength;
}

//console.log(find_longest_substring('cadbzabcde'))

// we can also take r-l+1
// by taking r=0; l=0;

// lets go for a sliding windpw solution the sliding window is like two pointer but there is a little bit of diffrence its not same to same.
// and yes one more point if we are looking for substring like programs then better we should go for two pointer or sloding window approach.

let find_long_substr = function (s) {
    let n = s.length

    let l = 0;
    let r = 0
    let maxLength = 0;
    let map = new Map()
    // in sliding window we can take same value for l and r. 

    while(r<s.length){
        if(map.has(s[r]) && map.get(s[r]) >=l){
            l = map.get(s[r])+1
            // yahan na check ho raha hai ki hamane jo a dekha tha kya woh hai
            // aur aggar hai kya woh >l hai aggar hai toh aap l ko update kar do
            // jahan apne dekha tha a ko last time so go daya duplicates avoid

            // map['a'] +1 which is d
            // matlab jahan pe dekha tha wahan se +1
        }
    }

    // agar value present nahi hai toh yahan ho raha hai add with index value 1
    map.set(s[r], r)
    maxLength = Math.max(maxLength, r - l + 1)
    r++
}
console.log(find_long_substr('cadbzabcde'))