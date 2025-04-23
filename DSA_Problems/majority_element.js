let majority_element = function(nums){
    let majorityElement = -1;
    let count =0; 
    for(let i=0; i<nums.length; i++){
        if(count == 0){
            majorityElement = nums[i];
        }
        if(majorityElement == nums[i]){
            count++
        }else{
            count--
        }
    }
    return majorityElement;
} 
console.log(majority_element([3,2,3]))