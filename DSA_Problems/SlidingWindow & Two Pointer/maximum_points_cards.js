let arr = [6,2,3,4,7,2,1,7,1]
let find_the_maximum = function(nums,k){
    let leftSum = 0;
    let rightSum = 0
    let maximum_sum = 0;
    let rightIndex = arr.length-1

    for(let i=0; i<k; i++){
        leftSum+=nums[i]
        maximum_sum = leftSum
    }

    for(let i=k-1; i>=0; i--){
        leftSum = leftSum- nums[i]
        rightSum = rightSum + nums[rightIndex]
        rightIndex = rightIndex-1
        maximum_sum = Math.max(maximum_sum, leftSum+rightSum)
    }   
    return maximum_sum;
    
}

console.log(find_the_maximum(arr,4))