// if we are implimenting a logic of slide window then when i want ti slid the window that mean i have to remove the 1st element of the array from the window and i can do that with the help of doing -1 from the left side and i have to move right by doing plus plus to the right side (right++)

// for example i have a array like 
let arr = [-1, 2, 3, 3, 4, 5, -1] 

//let r = k-1 // which is 3 that mean from 0 to 3 [-1, 2, 3, 3]

// aggar contant window ki baat ho rahi hai then hame two value lena padega like l and r.

// ex example mein hamara pehla window hai [-1, 2, 3, 3]
// second window is : [2, 3, 3, 4] and so on 
let sum =0;
let maxsum =0
let result = [];
let k = 4;
let l=0;
let r = k-1

for(let i=0; i<k; i++){
    sum+=arr[i]
    
}  
maxsum = sum
let n = arr.length-1
while(r<n){
    console.log(r)
    sum-=arr[l]
    l++
    r++
    sum+=arr[r]
    maxsum = Math.max(sum, maxsum)
}
console.log(maxsum)

