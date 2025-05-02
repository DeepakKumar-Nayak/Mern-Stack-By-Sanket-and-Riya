var findDuplicate = function(nums) {
    let freq={}
    for(let i of nums){
        if(freq[i]){
            freq[i]+=1
        }else{
            freq[i]=1
        }
    }
    let maxFrequency = 0
    let duplicateElement = 0
    for(i in freq){
        if(freq[i]>maxFrequency){
            maxFrequency = freq[i]
            duplicateElement = Number(i)
        }
    }
    return duplicateElement;
};
console.log(findDuplicate([3,3,3,3,3]))