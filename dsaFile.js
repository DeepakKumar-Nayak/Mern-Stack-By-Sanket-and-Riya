// Two Pointer Problem 
// Longest SubArray with sum<=k 
let arr = [2,5,1,7,8,10]
let k = 14

let find = function(nums,k){
    let l=0;
    let r =0;
    let maxLength = 0;
    let sum =0; 
    let result = ""

    while(r<nums.length){
        sum+=nums[r]

         
        while(sum>k){
            sum-=nums[l]
            l++
        }

        if(sum<=k && r-l+1>=maxLength){
            maxLength = Math.max(maxLength, r-l+1)
            result = nums.slice(l, r+1)

        }
        r++
    }
    return result;


}

//console.log(find(arr,14))

// Probl2m 2 with two pointer 
// Maximum Points we can obtain from cards. 

let arrOne = [6, 2, 3, 4, 7, 2, 1, 7, 1]
let find_maximum_points = function(nums,k){
    let sum=0;
    let lftsum = 0;
    let rghtSum = 0;
    
    for(let i=0; i<k; i++){
        lftsum+=nums[i]
    }
    sum = lftsum
    let rightIndex = nums.length-1

    for(let i =k-1; i>=0; i--){
        lftsum = lftsum - nums[i]
        rghtSum = rghtSum + nums[rightIndex]
        rightIndex = rightIndex-1
        sum = Math.max(sum, lftsum+rghtSum)
    }
    return sum; 
}

//console.log(find_maximum_points(arrOne,4))

// Longest Substr Without Repeating Characters
