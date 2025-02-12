arrayOne = [10,20,30,40,50]

// const data = arrayOne.map(function getElement(element){
//     return element*2
// })

// console.log(data)

// function getResult(arr, fun){
//     let result = []
//     for(let i=0; i<arr.length; i++){
//         result.push(fun(arr[i]))
//     }
//     return result;
// }

// getResult(arrayOne, function getData(element){
//     return element**2
// })

// setTimeout(function getData(){
//     console.log('hello')
// },100)

// let x = 0; 
// for(let i=0; i<=10; i++){
//     x=x+1 
// }
// console.log(x)

// cosure example: 
function func(a,c){
    let m = 10
    function gun(){
        console.log(m,c)
    }
    return gun;
}

const g = func(10,20)
g()
