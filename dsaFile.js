// Two Pointer Problem 
// Longest SubArray with sum<=k 
let arr = [2, 5, 1, 7, 8, 10]
let k = 14

let find = function (nums, k) {
    let l = 0;
    let r = 0;
    let maxLength = 0;
    let sum = 0;
    let result = ""

    while (r < nums.length) {
        sum += nums[r]


        while (sum > k) {
            sum -= nums[l]
            l++
        }

        if (sum <= k && r - l + 1 >= maxLength) {
            maxLength = Math.max(maxLength, r - l + 1)
            result = nums.slice(l, r + 1)

        }
        r++
    }
    return result;


}

//console.log(find(arr,14))

// Probl2m 2 with two pointer 
// Maximum Points we can obtain from cards. 

let arrOne = [6, 2, 3, 4, 7, 2, 1, 7, 1]
let find_maximum_points = function (nums, k) {
    let sum = 0;
    let lftsum = 0;
    let rghtSum = 0;

    for (let i = 0; i < k; i++) {
        lftsum += nums[i]
    }
    sum = lftsum
    let rightIndex = nums.length - 1

    for (let i = k - 1; i >= 0; i--) {
        lftsum = lftsum - nums[i]
        rghtSum = rghtSum + nums[rightIndex]
        rightIndex = rightIndex - 1
        sum = Math.max(sum, lftsum + rghtSum)
    }
    return sum;
}

//console.log(find_maximum_points(arrOne,4))

// Longest Substr Without Repeating Characters
let longest_substring = function (nums) {
    let r = 0;
    let l = 0;
    let maxLength = 0;
    let map = new Map()

    while (r < nums.length) {
        if (map.has(nums[r]) && map.get(nums[r]) >= l) {
            l = map.get(nums[r]) + 1
        }
        map.set(nums[r], r)
        maxLength = Math.max(maxLength, r - l + 1)
        r++
    }
    return maxLength;

}
//console.log(longest_substring('cadbzabcd'))

// Number of consecutive ones
let find_ones = function (nums, k) {
    let l = 0;
    let r = 0;
    let zero = 0;
    let maxLength = 0;

    while (r < nums.length) {
        if (nums[r] === 0) {
            zero++
        }
        while (zero > k) {
            if (nums[l] === 0) {
                zero--
            }
            l++
        }
        if (zero <= k) {
            length = r - l + 1
            maxLength = Math.max(maxLength, length)
        }
        r++
    }
}
//console.log(find_ones([1,1,1,0,0,0,1,1,1,1,0],2))

// Longest substing with atmost k disticnt characters. 
let find_k_distinct = function (nums, k) {
    let l = 0;
    let r = 0;
    let maxlength = 0;
    let map = new Map()

    let result ="";

    while (r < nums.length){
        map.set(nums[r], (map.get(nums[r]) || 0) + 1)
        if (map.size > k) {
            while (map.size > k) {
                let leftVal = nums[l]
                map.set(leftVal, map.get(leftVal) - 1)

                if (map.get(leftVal) === 0) {
                    map.delete(leftVal)
                }
                l++
            }
        }

        if (map.size <= k && r-l+1>=maxlength) {
            maxlength = Math.max(maxlength, r - l + 1)
            result = nums.slice(l, r+1)
        }
        r++
    }
    return [maxlength, result]
}

//console.log(find_k_distinct('aaabbccd',2))

// find the substr with all three characters
let find_substr = function(nums){
    let r=0; let l =0;
    let count =0;
    let map = new Map()
    let result = []

    while(r<nums.length){
        let char = nums[r]
        map.set(char, (map.get(char) || 0)+1)

        while(map.get(char)>1){
            let leftChar = nums[l]
            map.set(leftChar, map.get(leftChar)-1)

            if(map.get(leftChar) === 0){
                map.delete(leftChar)
            }
            l++
        }
        

        if(map.size === 3){
            count++
            result.push(nums.slice(l, r+1))


        }
        r++
    }
    return result

}
console.log(find_substr('bbacba'))