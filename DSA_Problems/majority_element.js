let majority_element = function(nums){
    let majorityElement = -1;
    let count =0; 
    for(let i=0; i<nums.length; i++){
        if(count == 0){
            majorityElement = nums[i];
        }
        if(majorityElement == nums[i]){
            count++
        }else{
            count--
        }
    }
    return majorityElement;
} 
//console.log(majority_element([2,2,1,1,1,2,2]))

function majorityElement(nums){
    let freq = {}
    for(let i of nums){
        if(freq[i]){
            freq[i]+=1
        }else{
            freq[i]= 1
        }
    }
    console.log(freq)

    let maxFreq = 0;
    let majority_element = 0
    for(let i in freq){
       if(freq[i]> maxFreq){
        maxFreq = freq[i]
        majority_element = Number(i)
       } 

    }
    // here i am checking if the element is present more than nums.length/2 times otherwise return []
    // jitna bhi array ka length hoga aggar uska adhe se bhi jyada ho to ho gaya woh majority element
    // for example aggar array mein 5 elements hai aur aggar majority element 2 se jyada yani 3 bar 
    // present ho toh wohi element ban jaega majority element
    return maxFreq > Math.floor(nums.length / 2) ? majority_element : [];
    
}

console.log(majorityElement([1,2,3,4]))