let square_sorted = function(nums){
    let result = new Array(nums.length)
    let i = 0;
    let j = nums.length-1;
    let index = nums.length-1;

    while(i<=j){
        let left_element = nums[i]**2
        let right_element = nums[j]**2

        if(left_element>right_element){
            result[index] = left_element
            i++
        }else{
             result[index] = right_element
            j--
        }
        index--
    }
    return result

}
console.log(square_sorted([-4, 1, 0, 3, 10]));


//[16,1,0,9,100]
//[0,1,9,16,100]


// lets do the same problem using sort method 
let sortedSquare = function (nums){
    let result = []
    for(let i=0; i<nums.length; i++){
        result.push(nums[i]**2)
    }
    result.sort((a,b)=> a-b)
    return result;
}

console.log(sortedSquare([-4,-1,0,3,10]))

// sort method kam kaise karta hai 
// aggar hamare pass 2 value hai 
// 4, 5
// (x,y => x-y)
// 4 - 5 = -1 we get a negative value
// if we get a negative value then the first argument is put first which is 4 and then 5 will come.

// if we do 5 - 4
// (x,y => x-y)
// then we get a postive value i.e 1
// so if we get a positive value then the second argument will come first and i.e 4 then 5 
// so in both the casses we are getting the values in the increasing order. 

// aur aggar ham y-x ke liye ja rahe hein toh decreasing order mein elements aaenge. 
// x,y => y-x
// 5 - 4 => positive and 5 pehle then 4 

// 7 - 3 => negative so 7 pehle then 3 
// ham yahan kisi bhi haal pe decreasing order pe hi elements hame mil raha hai. 