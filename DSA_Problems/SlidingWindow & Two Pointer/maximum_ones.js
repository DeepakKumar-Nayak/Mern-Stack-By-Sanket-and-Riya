
// Brute Force Method
let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
let k = 2
let maxlength = 0;
let zero = 0;
let length = 0

for (let i = 0; i < nums.length; i++) {
    let zero = 0;
    for (let j = i; j < nums.length; j++) {
        if (nums[j] === 0) {
            zero++
        }
        if (zero <= k) {
            length = j - i + 1
            maxlength = Math.max(length, maxlength)
        } else {
            break
        }
    }
}

//console.log(maxlength)

// lete go for a better solution 
let find_longest_subst = function (nums, k) {
    let l = 0; let r = 0;
    let maxlength = 0; let length = 0; let zero = 0;

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
        if(zero<=k){
            length = r-l+1
            maxlength = Math.max(length,maxlength)
        }
        r++
    }
    return maxlength;

}

console.log(find_longest_subst([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))