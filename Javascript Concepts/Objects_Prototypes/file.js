
// let arr = [1,2,3,4,5]
// function myMap(arr, fn){
//     let result = [];
//     for(let i=0; i<arr.length; i++){
//         result.push(fn(arr[i]))
//     }
//     return result;
// }

// console.log(myMap(arr, function g(element){
//     return element**2
// }))

"use strict"
function getData(){
    
    console.log(this)
}
getData()