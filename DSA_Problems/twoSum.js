var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            if(nums[i]+ nums[j] == target && i!=j){
                return [i,j]
            }
        }
    }
};

// console.log(twoSum([10,8,19,10],20))

var findSum = function(nums, target){
    let i=0;
    let j = nums.length-1
    while(i<j){
        let sum = nums[i]+nums[j]
        if(sum === target){
            return[i,j]
        }else if(sum<target){
            i++
        }else{
            j--
        }
    }
    return []
}

console.log(findSum([3,2,4],6))

// yahan pe kam nahi karega array mein aggar apko two pointer lagani ho tab use karna jab array sorted ho 
// aur yahan array sorted nahi hai