//Single Number 
//input [2,2,1]
//Output = 1;
let findSingle = function(nums){
    let result = 0;
    for(let i=0; i<nums.length; i++){
        result = result^nums[i]
    }
    return result
}

//console.log(findSingle([2,2,1]))


let findSingleNumber = function(nums){
    let frequency= {}
    let singleNumber = 0;
    for(let i=0; i<nums.length; i++){
        if(frequency[nums[i]]){
            frequency[nums[i]]+=1
        }else{
            frequency[nums[i]] = 1
        }
    }
    for(let i in frequency){
        if(frequency[i] == 1){
            singleNumber = Number(i)
        }
    }
    return singleNumber
    
}

//console.log(findSingleNumber([4,1,2,1,2]))







