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

//let arr = [6,2,3,4,7,2,1,7,1]
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

//=================================================================
//3rd question maximum ones
//lets go for a brute force first

// let find_maximum_ones = function(nums,k){
//     let maxLength=0; 

//     for(let i=0;i<nums.length; i++){
//         let zero=0;
//         for(let j=i; j<nums.length; j++){
//             if(nums[j] === 0){
//                 zero++
//             }
//             if(zero<=k){
//                 maxLength = Math.max(maxLength, j-i+1)

//             }
//             else{
//                 break
//             }
//         }
//     }
//     return maxLength

// }
// console.log(find_maximum_ones([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],2))

// 2nd method lets go for two pointer algorithim 
//-----------------------------------------------

let find_maximum_ones = function (nums, k) {
    let l = 0; let r = 0; let length = 0;
    let maxLength = 0; let zero = 0;

    while (r < nums.length) {
        // this is where i am checking that l[r] is 0 or not
        if (nums[r] === 0) {
            zero++
        }
        while (zero > k) {
            // when nums[l] will be zero then i will deduct the count of zero  and will increase the l
            // so that l will point to 1 previously it is zero right.? 

            // nums[l] === 0 zero -- then l++ so now nums[l] = 1
            if (nums[l] === 0) {
                zero--
            }
            l++
        }
        if (zero <= k) {
            // if the l[r] is not zero which is true then this block will execute
            // where i am finding out the length and updating the maxlength
            // so if nums[r] index wise it will be always zero but length wise
            // it will be always 1 so thats why 

            // r-l+1 => 0-0+1 => 1
            // here nums[r] = 0 but the length is 1 

            // when nums[r] will be 1 then we will get maxlength as 2 and how .? 
            // r-l+1 => 1-0+1 = 2

            // and yes l will be zero only untill and unless nums[l] ==0 because thats when i am increasing L
            // see the upper while loop for more clarity thats where i am checking if nums[l] === 0 


            //length = r-l+1
            maxLength = Math.max(maxLength, r - l + 1)
        }
        r++
    }
    return maxLength;

}
//console.log(find_maximum_ones([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],2))

//=============================================================================
// 4th Find the longest substring with k distinct characters
let find_the_substring_with_k = function (nums, k) {
    let left = 0;
    let right = 0;
    let maxlength = 0;
    let map = new Map()
    let result = ""



    while (right < nums.length) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1)
        if (map.size > k) {
            let leftVal = nums[left]
            map.set(leftVal, map.get(leftVal) - 1)
            if(map.get(leftVal) === 0){
                map.delete(leftVal)
            }
            left++
            
        }
        let length = right-left+1
        if(length>maxlength){
            maxlength = length
            result = nums.slice(left,right+1)
        }
        // if (map.size <= k) {
        //     maxlength = Math.max(maxlength, right-left+1)
        //     result = nums.slice(left,right+1)
        // }
        right++
    }
    return result.split("");
}
//console.log(find_the_substring_with_k('aaabbccd', 2))

