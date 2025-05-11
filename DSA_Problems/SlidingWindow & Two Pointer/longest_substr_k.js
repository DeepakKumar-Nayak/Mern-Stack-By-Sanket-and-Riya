// longest substring with most k distinct pairs

let find_substr = function(s,k){
    let l=0;
    let r=0;
    let maxlength =0;
    let length =0;
    let map = new Map()

    while(r<s.length){

        map.set(s[r], (map.get(s[r]) || 0)+1)

        if(map.size > 2){
            // clear se pura hi map clear ho jaega 
            map.clear()
            l++
            r=l-1
        }
        if(map.size<=2){
            // in creasing its length and updating its maxlength
            length = r-l+1
            maxlength = Math.max(maxlength,length)
        }
        r++
    }
    return maxlength;

}

//console.log(find_substr('aaabbccd',2))

// lets for for a two pinter algorithim with little more changes in the code.

let find_substring = function(nums,k){
    let left =0; 
    let right =0;
    let maxlength =0;
    let map = new Map()

    while(right<nums.length){
        map.set(nums[right], (map.get(nums[right]) || 0)+1)
        if(map.size>k){

            while(map.size>k){

                let leftval = nums[left];
                map.set(leftval, map.get(leftval)-1)

                if(map.get(leftval) === 0){
                    map.delete(leftval)
                }
            left++
            }
            
        }

        if(map.size<=k){
            maxlength = Math.max(maxlength, right-left+1)
            

        }
        right++
    }
    return maxlength;
}

console.log(find_substring(2 ))

// simplified version of this line 
map.set(nums[right], (map.get(nums[right]) || 0)+1)
// --- simplified version bas samjhne ke liye 
let count = map.get(nums[right]);
if (count === undefined) {
    count = 0;
}
map.set(nums[right], count + 1);
