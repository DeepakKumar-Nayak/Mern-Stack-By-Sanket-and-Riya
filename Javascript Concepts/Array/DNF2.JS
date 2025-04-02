let arrayOne = [1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0]
let left = 0;
let right = arrayOne.length-1

while(left<right){
    if(arrayOne[left] === 1){
        arrayOne[left] = 0; 
        arrayOne[right] = 1;
        right--;
    }
    left++;

}

console.log(arrayOne)
