let nums =  [1,1,0,1,1,1]
let temp = [];
let previousValue = 0;
for(let i=0; i<nums.length; i++){
    if(nums[i] === 1){
     temp.push(nums[i])
     if(temp.length>previousValue)
        previousValue = temp.length
    }else if(nums[i] === 0){
        temp=[]
        continue;
        
    }
}
console.log(previousValue)