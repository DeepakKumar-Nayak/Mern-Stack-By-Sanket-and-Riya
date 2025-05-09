// find the maximum subarray 

// let arr = [2, 5, 1, 7, 10]
// let k = 14;
// let maxsum = 0;
// let final_array = []
// for (i = 0; i < arr.length; i++) {
//     let sum = 0; let result = []
//     for (let j = i; j < arr.length; j++) {
//         sum = sum + arr[j]

//         if (sum <= k) {
//             result.push(arr[j])

//             if (result.length >= maxsum) {
//                 maxsum = result.length
//                 final_array = [...result]
//             }
//         }
//     }
//     return final_array;
// }
// this is the brute force one lets do it in a better way. 


// Striver explanation for bruteforce :: 
// let find_sub_array = function (arr, k) {
//     let maxLength = 0;


//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0; let resultt = [];
//         for (j = i; j < arr.length; j++) {
//             sum += arr[j]

//             if (sum <= k) {
//                 resultt.push(arr[j])
//                 maxLength = Math.max(maxLength, j - i + 1)
//             } else {
//                 break
//             }
//         }
//     }
//     return final_array;
// }

// console.log(find_sub_array([2, 5, 1, 7, 10], 14))

// now lets do the same thing with two pointer algorithim;
// let find_substr = function(nums, k){
//     let l = 0; let r =0; let maxLength =0;
//     let sum =0; let newArray = []
    
//     while(r<nums.length){
//         sum+=nums[r]

//         if(sum>k){
//             sum-=nums[l]
//             l++
//         }

//         if(sum<=k && r-l+1>=maxLength){
//              maxLength = r-l+1
//              newArray = nums.slice(l, r-l+1)
//         }
//         r++
//     }
//     return maxLength;
// }
// console.log(find_substr([2,5,1,7,10], 14))

// ----------------------------------------------------

// 2nd Question
//Maximum Points that we can obtain from cards:
// This is brute force

let arr = [6,2,3,4,7,2,1,7,1]
// let find_maximum_points = function(arr,k){
//     let lsum =0;let rsum =0;
//     let maxSum =0;

//    for(let i=0; i<=k-1; i++){
//         lsum+= arr[i]
//     }
//     maxSum = lsum;

//     let rindex = arr.length-1
//     for(let i=k-1; i>=0; i--){
//         lsum = lsum-arr[i]
//         rsum = rsum+arr[rindex] 
//         maxSum = Math.max(lsum+rsum,maxSum)
//         rindex--
//     }
//     return maxSum;
// }
// console.log(find_maximum_points(arr,4))

// Longest Substring without repeatiing the character
let s = "cadbzabcd"

let find_longest_substring = function(s){
    let l = 0; let r=0; let longest_sbstr = ""
    let length=0; let maxLength =0;
    
}
find_longest_substring(s)