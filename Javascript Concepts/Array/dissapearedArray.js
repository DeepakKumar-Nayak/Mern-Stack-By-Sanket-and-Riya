let nums = [4, 3, 2, 7, 8, 2, 3, 1]
for(let i = 0; i<nums.length; i++){
    let x = Math.abs(nums[i])
    let idx = x-1; 
    if(nums[idx]>0){
        nums[idx]*=-1
    }
}

let result =[]
for(let i=0; i<nums.length; i++){
    if(nums[i]>0){
        result.push(i+1)
    }
}
console.log(result)

