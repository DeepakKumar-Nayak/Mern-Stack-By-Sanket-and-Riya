arrayOne = [10,20,30,40,50]

// const data = arrayOne.map(function getElement(element){
//     return element*2
// })

// console.log(data)

function getResult(arr, fun){
    let result = []
    for(let i=0; i<arr.length; i++){
        result.push(fun(arr[i]))
    }
    return result;
}

getResult(arrayOne, function getData(element){
    return element**2
})