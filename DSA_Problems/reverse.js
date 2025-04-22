let s = 'virat kohli'.split("")
var reverseString = function(s) {
    let i = 0
    let j = s.length-1

    while(i<j){
        let temp = s[i]
        s[i] = s[j]
        s[j]  = temp
        i++;
        j--;
    }
    return s;

};

console.log(reverseString(s))

// this is also something called two pointer technique jahan apko aise values ko store karna padega like 
// let i =0; let j = s.length-1

