// longest subarray using sliding window
// let say we have an array like [2,3,4,5,6,7,8]
// so subarray matlab [4,5,6,7]
// [2,3,7,8] esko nahi bolte hain subarray 
// values one after hone chahiye jaise yahan hua hai array kaisa bhi ho par ek value ke baad jo value hai wohi anna chahiye 

// toh aab ham ek ek lonest subarray nikalte hai jiska sum < = hoga target se. 
//let arr = [2,5,1,7,10]
//let target = 14; 
// aggar mein yahan 2+5+1 karun toh 8 atta hai which is < 14 hai and aggar 7 add kar dun toh 14 se jyada hi raha hai toh aab ke liye 
// bas 2,5,1 hai ek kam karte hai ham woh kya hai sliding window ke help se ham 2 ko chod dete hein and aab jate hain ham 5,1,7 pe jo hai 
// 13 hmm yeah bhi sahi hai [5,1,7] is also right uske baad koi nahi hai kyun ki 1,7,10 ho raha hai 14 se jyada so nahi hoga and the answer is finally 
// [5,1,7]

// now we will first do the same thing with normal method which is known as brute force then we will do a better one; 
// Brute Force


let find_longest_sub_array = function (nums, target) {
    let finalArray = []
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {

        let sum = 0;
        let result = [];

        for (let j = i; j < nums.length; j++) {
            sum += nums[j]

            if (sum <=target) {
                result.push(nums[j])

                if (result.length >= maxLength) {
                    maxLength = result.length
                    finalArray = [...result]
                }
            }
        }
    }
    return finalArray;
}

//console.log(find_longest_sub_array([2, 5, 1, 7, 10], 14))

// now we can think of going for better approach using two pointer algorithim and sliding window. 
// lets go for a sliding window seize of 1 and r.   

let find_sub_array = function(nums,k){
    let l=0;
    let r =0; 
    let sum =0;
    let maxLength =0; 
    let result = []


    while (r<nums.length){
        sum = sum+nums[r]

        while(sum>k){
            sum-=nums[l]
            l++
        }
        if(r-l+1 >= maxLength){
            maxLength = r-l+1
            result = nums.slice(l, r+1)
        }
        r++
    }
    return result;

}

//console.log(find_sub_array([2,5,1,7,10], 14))

// yeh pattern matlab sare jagah use hota hai aisa striver ne bola sriver dsa playlsit se padh raha hoon mein yeah topic 

// findOut the maximum subArray
let find_max_subarray = function(nums,k){
    let l =0;
    let r =0;
    let sum =0;
    let maxLength =0;
    let result =[]

    while(r<nums.length){
        sum = sum+nums[r]

        if(sum>k){
            sum = sum-nums[l]
            l++
        }

        if(sum<=k && r-l+1>=maxLength){
            maxLength = r-l+1  // this is where i am updating the maxlength
            result = nums.slice(l,r+1) // this is where i am updating the subarray
        }
        r++
    }
    return result;
}

find_max_subarray([2,5,1,7,10],14)

// Explanation: 
// . pehle sum hoga 5 which is less than k 
// . ra ka value hai 0 and l ka bhi 0 so r-l+1 = 0-0+1 => 1. maxlength = 1. 
// . slice ke helo se value le raha hoon result mein (0,1) [2]
// . r++ => 1

// . again 7 < k hoga 
// . ra ka value ho gaya hai 1 abhi so r-l+1 = 1-0+1 = 2 and meaxlength updated to 2,
// . slice karke again result update kar raha hoon which is (0,2) eska mnatlab 0,1 jaega which is [2,5]
// . r++ 2

// . again 8<k hoga 
// .   

// some more important points for this question 
// so if the question is asekd to find out the subarray then we have to shrink it kyun ki kya pata hame koi aisa subarray mil jaye jo pichle wala se greater hai jaise ki es question mein ho raha hai pehle hame mile [2 5 1] then hame kya mila [2 5 7] and this is the final subarray toh yeah hua na pichle wale se behtar

// and aggar hame maxlength ki jarurat hai toh hame subarray ki tarah nahi sochna hai hame bas update karna hai maxlength jaise ki es problem mein dono cases mein 3 hi hai kyun ki aisa koi subrray hai hi nahi jiska 3 se jyada ho. 