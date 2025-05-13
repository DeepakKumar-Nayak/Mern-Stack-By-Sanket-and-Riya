// find the substring with all three characters. 

let find_subs_with_3character = function (nums) {
    let result = 0
    let finalStr = ""
    for (let i = 0; i < nums.length; i++) {
        let str = ""; let count = 0
        for (let j = i; j<nums.length; j++) {
            if (!str.includes(nums[j]) && count<3) {
                str += nums[j]
                count++
            } else {
                break
            }
        }
        if(str.length===3 && str.includes('a') && str.includes('b') && str.includes('c')){
            finalStr+=str
            result++

        }
    }
    return [finalStr.length, (finalStr)];
}


console.log(find_subs_with_3character('bbacba'))