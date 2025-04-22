let findSum = function(numbers, target){
    let i=0;
    let j = numbers.length-1
    while(i<j){
        let sum = numbers[i]+numbers[j]
        if(sum === target){
            return [i+1, j+1]
        }else if(sum<target){
            i++
        }else{
            j--
        }
    }
    return []
}

console.log(findSum([2,7,11,15], 9))