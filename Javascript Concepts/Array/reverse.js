// reverse and array // but we should not create an new array 

function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp;
}

let arr = [4,5,9,8,7,0,3,2]
let i = 0;
let j = arr.length-1

while(i<j){
    swap(arr,i,j)
    i++;
    j--;
}