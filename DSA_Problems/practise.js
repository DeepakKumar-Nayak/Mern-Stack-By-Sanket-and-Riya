let find_diff_pairs = function (nums, k) {
    nums.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - nums[i] === k) {
                let pair = [nums[i], nums[j]]
                let existPair = result.some(element => element[0] === pair[0] && element[1] === pair[1])
                if (!existPair) {
                    // aggar existing pair nahi mila toh push kar do
                    result.push(pair)
                }
            }
        }
    }
    // console.log(result)
    return result.length
}

//console.log(find_diff_pairs([3,1,4,1,5], 2))


// lets do the same program using two pinter alogorithim 
//[1,1,3,4,5]
function findTwoDiffrentPairs(nums, k) {
    nums.sort((a,b)=> a-b)
    console.log(nums)

    let i = 0; 
    let j = 1; 
    let result = []

    while(i<nums.length && j<nums.length){
        if(i === j){
            j++
            continue;
        }
        let diff = nums[j]- nums[i]
        if(diff === k){
            result.push([nums[i], nums[j]])
            
            while(i<nums.length && nums[i] === nums[i+1])i++
            while(j<nums.length && nums[j] === nums[j+1])j++
            i++
            j++
        }else if(diff>k){
            i++
        }else{
            j++
        }

    } 
    return result.length
    
}

//console.log(findTwoDiffrentPairs([3,1,4,1,5], 2))

// consecutive Ones
// let consecutiveOnes = function(nums){
//     let consecutive0nes = 0;
//     let finalAns = 0;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] === 1){
//             consecutive0nes+=1
//         }else{
//             finalAns = Math.max(finalAns, consecutive0nes)
//             consecutive0nes=0;
//         }
//     }
//     return Math.max(finalAns,consecutive0nes)
// }

// console.log(consecutiveOnes([1,1,0,1,1,1,1]))

// another solution for consecutive ones

let consecutive_ones = function(nums){
    let maxOnes = 0;
    let count = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            count+=1
            maxOnes =  Math.max(maxOnes,count)
        }else{
            count = 0
        }
    }
    return maxOnes;
}
console.log(consecutive_ones([1,1,1,0,1,1,0]))