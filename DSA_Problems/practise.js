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
    nums.sort((a, b) => a - b)

    let i = 0;
    let j = nums.length - 1
    let result = []

    while (i <j) {
        let diffrence = nums[j] - nums[i]
        if(diffrence === k){
            result.push([nums[i],nums[j]])
            i++
            j--
        }else if(diffrence > k){
            j--
        }else{
            i++
        }
    }
    return result
}

console.log(findTwoDiffrentPairs([3,1,4,1,5], 2))