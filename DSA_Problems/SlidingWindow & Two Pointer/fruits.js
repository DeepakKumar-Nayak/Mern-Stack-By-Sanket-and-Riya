let fruits = function(nums){
    let maxLength =0;
    let set = new Set();
    let count =0;
    for(let j=0; j<nums.length; j++){
        set.add(nums[j])

        if(set.size<=2){
            count++
            maxLength = Math.max(maxLength, count)
        }else{
            break;
        }
    }
    return maxLength;
}
//console.log(fruits([3,3,3,1,2,1,1,2,3,3,4]))

// lets do the same thing with two pointer/sliding window algorithim
let fruits_basket = function(nums){
    let maxlength =  0;
    let l = 0; let r =0;
    let map = new Map()
    let length=0;

    while(r<nums.length){
        map.set(nums[r], (map.get(nums[r]) || 0) + 1)    
        if(map.size > 2){
            while(map.size>2){
                let leftval = nums[l]
                map.set(leftval, map.get(leftval)-1)
                if(map.get(leftval) === 0){
                    map.delete(leftval)
                }
            l++
            }
            
        }
        if(map.size<=2){
            length = r-l+1
            maxlength = Math.max(length, maxlength)
        }
        r++
    }
    return maxlength;
     
}

console.log(fruits_basket([1,2,3,2,2]))