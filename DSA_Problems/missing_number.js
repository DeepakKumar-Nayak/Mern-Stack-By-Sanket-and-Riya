//let find_missing_numbers = function(nums){
    // for(let i=0; i<=nums.length; i++){
    //     if(!nums.includes(i))
    //         return i
    // }
//}
//console.log(find_missing_numbers([0,1]))
// 0 1 3

// Optimal Solutuon

let find_missing_numbers = function(nums){
    let sum = 0
    let n = nums.length;
    sum = n*(n+1)/2
    
    let sum2 = 0;
    for(let i=0; i<nums.length; i++){
        sum2+=nums[i]
    }
    return sum-sum2
}
//console.log(find_missing_numbers([9,6,4,2,3,5,7,0,1]))

// second wala solution karke bhai maza ayya pehle toh actual sum nikala 0,3 tak us mein 2 bhi add hai 
// and sum 2 mein meine khali i number ka sum nikala dono ko minus kiya jo diffrence ayya that is the missing number.

// lets do the same thing using xor/ 
// for example 5^5 = 0 1^1 =0 
// 0^1 = 1
// 1^0 = 1
// 0^0 = 0
// 1^1 = 0

