function customMap(arr,fn){
    let result = []
    for(let i=0; i<arr.length; i++){
        result.push(fn(arr[i]))
    }
    return result;
}

let arr = [20,30,40,50]
const data = customMap(arr, function getData(element){
    return element+10
})
console.log(data)