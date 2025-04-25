let mergeNumbers = function (nums1, m,nums2, n){
    let result = new Array(m+n).fill(0)
    let i=0;
    let j=0;
    let k=0

    while(i<m && j<n){
        if(nums1[i]<nums2[j]){
            result[k] = nums1[i]
            k++
            i++
        }else{
            result[k] = nums2[j]
            k++
            j++
        }
    } 
    // aggar koi element bach gaya toh i mein
    while(i<m){
        result[k] = nums1[i]
        k++
        i++
    }
    // aggar koi element bach gaya toh j mein
    while(j<n){
        result[k] = nums2[j]
        k++
        j++
    } 

    for(let i=0; i<result.length; i++){
        nums1[i] = result[i]
    }
}

console.log(mergeNumbers([1,2,3,0,0,0],3,[2,5,6],3))

// 