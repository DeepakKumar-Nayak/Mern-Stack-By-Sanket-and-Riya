// sum of the digits kets say the number is 4136 so the answer should be 14 (4+1+3+6) = 14
// koi bhi last digit aggar apko extract karna hao toh apko bas usko 10 ke saath divide karna padega like 
// 4136 % 10 = 6

let sum = 0 
let x = 4136
while(x>0){
    let lastDigit = x%10; 
    // this will give us 4136 % 10 = 6
    // 413 % 10 = 3;

    sum+=lastDigit
    // its like sum = 0+6
    // now it will be 6+3

    x =  Math.floor(x/10)
    // here what i am doing 4136/10 = 413.6
    // Math.floor(413.6) = 413
}

console.log(sum)