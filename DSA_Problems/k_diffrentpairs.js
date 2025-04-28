let find_diff_pairs = function(nums,k){
    nums.sort((a,b)=> a-b)
    let result = []
    for(let i =0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[j]-nums[i] === k){
                let pair = [nums[i], nums[j]]
                let existPair = result.some(element=> element[0] === pair[0] && element[1] === pair[1])
                if(!existPair){
                    // aggar existing pair nahi mila toh push kar do
                    result.push(pair)
                }
            }
        }
    }
    console.log(result)
    return result.length
}

console.log(find_diff_pairs([3,1,4,1,5], 2))