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