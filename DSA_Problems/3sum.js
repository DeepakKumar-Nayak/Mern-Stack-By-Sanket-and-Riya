let threeSum = function(nums){
    nums.sort((x,y)=>x-y)
    let result = []
    
     
    for(let i =0; i<nums.length-2; i++){
        if(i === 0 || nums[i]!= nums[i-1]){
            // eska matlab duplicates value nahi hai

            let left = i + 1; // left side value
            let right = nums.length-1 // right side value
            let target = -nums[i]

            while(left < right){
                let sum = nums[left] + nums[right]
                
                if(sum === target){
                    result.push([nums[i], nums[right], nums[left]])

                    while(left<right && nums[left] === nums[left+1]) left++
                    while(left<right && nums[right] === nums[right-1]) right--;
                
                    left++;
                    right--;

                }else if(sum<target){
                    left++
                }else{
                    right --
                }
            }
        }
    }
    return result
     
}

console.log(threeSum([-1,0,1,2,-1,4]))
// [ -1, -1, 0, 1, 2, 4 ]

// es question mein hame aise triplets dhoondna padega ki aggar ham us triplets ko add bhi kar rahe hein then hame uska output milega 0 and har triplets ek dusre se allag hona chahiye koi kisi se math hoga hi nahi. 

// aur aggar mein triplets ki baat kar raha hoon then for example pehli bar hame ek triple mila like 
// [-1, 0, -1] second time hame same to same nahi chahiye allag chahiye koi bhi value change ho and uska sum bhi toh anna chahiye 0
// nums[i], nums[j], nums[k] values allag honge matlab i!=k j!=k i!=j