function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp
}

function dnf(arr){
    let i=0; 
    let j= arr.length-1;

    while(i<j){
        // 0<10 

        if(arr[i] ===1){

            //if arr[i] === 1
            swap(arr, i,j)
            j-=1

        }else{
            i+=1
        }
    }
}

let arr = [1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1]
dnf(arr)
console.log(arr)