// let arrayOne = [1,0,0,1,1,1,0,1,0,0,1]
// let arrayTwo = []
// let arrayThree = []

// for(let i=0; i<arrayOne.length; i++){
//     if(arrayOne[i]== 1){
//         arrayTwo.push(arrayOne[i]-1)
//     }else{
//         arrayThree.push(arrayOne[i]+1)
//     }
// }

// arrayOne = [...arrayTwo, ...arrayThree]
// console.log(arrayOne)

// Another Way of doing it. 
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

0 < 10
1< 9
2<8
3<7
4<5
5<5