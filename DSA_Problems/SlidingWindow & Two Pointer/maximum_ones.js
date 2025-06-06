
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

// Solution with explanation if anybody wants to know how its working.
let find_maximum_ones = function(nums,k){
    let l=0; let r=0; let length =0; 
    let maxLength=0; let zero =0;

    while(r<nums.length){
        // this is where i am checking that l[r] is 0 or not
        if(nums[r] === 0){
            zero++
        }
       while(zero>k){
        // when nums[l] will be zero then i will deduct the count of zero  and will increase the l
        // so that l will point to 1 previously it is zero right.? 

        // nums[l] === 0 zero -- then l++ so now nums[l] = 1
        if(nums[l] === 0){
            zero--
        }
        l++
       }
        if(zero<=k){
            // if the l[r] is not zero which is true then this block will execute
            // where i am finding out the length and updating the maxlength
            // so if nums[r] index wise it will be always zero but length wise
            // it will be always 1 so thats why 

            // r-l+1 => 0-0+1 => 1
            // here nums[r] = 0 but the length is 1 

            // when nums[r] will be 1 then we will get maxlength as 2 and how .? 
            // r-l+1 => 1-0+1 = 2

            // and yes l will be zero only untill and unless nums[l] ==0 because thats when i am increasing L
            // see the upper while loop for more clarity thats where i am checking if nums[l] === 0 


            //length = r-l+1
            maxLength = Math.max(maxLength, r-l+1)
        }
        r++
    }
    return maxLength;
    
}
console.log(find_maximum_ones([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],2))
