// This is my explanation

let nums =  [1,1,0,1,1,1]
var findMaxConsecutiveOnes = function(nums){
    let temp = [];
    let previousValue = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 1){
            temp.push(nums[i])
            if(temp.length>previousValue){
                previousValue=temp.length
            }
        }else if(nums[i] === 0){
            temp=[];
            continue
        }
    }
    return previousValue
}

console.log(findMaxConsecutiveOnes(nums))


// Sanket Sir Explanation: 

// let FindMaxConsecutive = function Consecutive(nums){
//     let consecutiveOnes = 0;
//     let finalAns = 0;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] ===1){
//             consecutiveOnes+=1
//         }else{
//             finalAns = Math.max(finalAns,consecutiveOnes)
//             consecutiveOnes=0
//         }
//     }
//     return Math.max(finalAns, consecutiveOnes)
// }

// console.log(FindMaxConsecutive(nums))

// reference code 

// let nums =  [1,1,0,1,1,1]
// var findMaxConsecutiveOnes = function(nums) {
//     let maxcount=0;
//     let currentcount=0;

//     for(let i=0;i<nums.length;i++){
//         if(nums[i] == 1){
//             currentcount++;
//         }else{
//             currentcount = 0;
//         }
//         maxcount = Math.max(maxcount,currentcount);
//     }
//     return maxcount;
// };
//console.log(findMaxConsecutiveOnes(nums))