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

/// so yahan array sorted hai chota se bada ja raha hai ascending order esliye ham yahan use kar sakhte hai two pointer technique
//Two pointers ka matlab:
//👉 Ek pointer start se (i) let i=0;
//👉 Ek pointer end se (j) let j = n.length-1;
//Aur unko condition ke basis pe aage/peeche move karte ho.