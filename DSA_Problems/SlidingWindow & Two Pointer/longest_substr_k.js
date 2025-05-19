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

console.log(find_substring('aaabbccd',2))

// simplified version of this line 
map.set(nums[right], (map.get(nums[right]) || 0)+1)
// --- simplified version bas samjhne ke liye 
let count = map.get(nums[right]);
if (count === undefined) {
    count = 0;
}
map.set(nums[right], count + 1);


// ===============================================================
// code with explanation in case if you want to undesratnd how the code is working
let find_the_substring_with_k = function(nums,k){
    let left = 0;
    let right =0; 
    let maxlength =0;
    let map = new Map()
    let result = ""


    while(right<nums.length){
        map.set(nums[right], (map.get(nums[right]) || 0) +1)
        if(map.size>k){
            
            while(map.size>k){

                // map ka size pehle hoga {a: 3} which is one 
                // then it will be {b:2} which is two 
                // then it will be {c: 2} which is three
                // if the size its greater than 3 because there are three distinct pairs like (a,b,c)

                let leftVal = nums[left]
                map.set(leftVal, map.get(leftVal)-1)

                // aggar map.size > 2 which is yes it is  > 2 then what i will do i will deduct one "a" 
                // from the 1st pair kyun ki left se mujhe minus karne padega na so it will be like 

                //{a:3} now it will be {a:2} eventually will we will come to {a:0}

                if(map.get(leftVal) === 0){
                    map.delete(leftVal)
                    // here i am deleting it so now from map "a" is delete so now it will be like 
                    // map = {seize: 2, b=>2, c => 2 }
                    // 0 => {b:2}
                    // 1 => {c:1}

                    // now the map size is 2 which is <=2
                }
                left++
            }
        }
        if(map.size<=k){
            // if the map size is <=2 which is yes because a is completely removed

            let length = right-left+1
            maxlength = Math.max(maxlength,length)

            if(length>=maxlength){
                // the reason behind doing like this because ek pair of value delete hone ke aggar uska length >= maxlength ho kyun ki 
                // length hamesha kam rahega aggar mei string ko dekhun mujhe pehle hi with k distinct value mein mil jaega 
                // "aaabb" jiska maxlength bada hai bakion se

                result = nums.slice(left, right+1) // because of this line i will get the actual longest string
            }
            
        }
        right++
    }
    return result.split("");
}

console.log(find_the_substring_with_k('aaabbccd'),2)