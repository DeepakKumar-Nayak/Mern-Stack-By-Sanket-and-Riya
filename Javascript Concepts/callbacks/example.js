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
// function func(a,c){
//     let m = 10
//     function gun(){
//         console.log(m,c)
//     }
//     return gun;
// }

// const g = func(10,20)
// g()


function download(url,callback){
    console.log('downloading data from the url', url)
    setTimeout(()=>{
        console.log('downloading data from the url is completed')
        let Downloaddata = "someData"
        callback(Downloaddata)
    },3000)
}

function writeFile(data, filename, callback){
    console.log('writting',data,'to the file',filename)
    setTimeout(()=>{
        console.log('writting data to the file is over')
        let status = "successfully"
        callback(status)
    },4000)
}

function upload(filename,link,status, callback){
    console.log('uploading file to the',link)
    setTimeout(()=>{
        console.log('uploaded',filename,status)
        let msg = "everything done successfully"
        callback(msg)

    },5000)
}

download('www.google.com', function writeData(data){
    writeFile(data, 'file.txt', function uploadData(status){
        upload('file.txt', 'googleDriev',status, function Over(msg){
            console.log(msg)
        })  
    })
})