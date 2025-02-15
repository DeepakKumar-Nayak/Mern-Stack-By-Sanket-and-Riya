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


// function download(url,callback){
//     console.log('downloading data from the url', url)
//     setTimeout(()=>{
//         console.log('downloading data from the url is completed')
//         let Downloaddata = "someData"
//         callback(Downloaddata)
//     },3000)
// }

// function writeFile(data, filename, callback){
//     console.log('writting',data,'to the file',filename)
//     setTimeout(()=>{
//         console.log('writting data to the file is over')
//         let status = "successfully"
//         callback(status)
//     },4000)
// }

// function upload(filename,link,status, callback){
//     console.log('uploading file to the',link)
//     setTimeout(()=>{
//         console.log('uploaded',filename,status)
//         let msg = "everything done successfully"
//         callback(msg)

//     },5000)
// }

// download('www.google.com', function writeData(data){
//     writeFile(data, 'file.txt', function uploadData(status){
//         upload('file.txt', 'googleDriev',status, function Over(msg){
//             console.log(msg)
//         })  
//     })
// })



// const pr = new Promise((res,rej)=>{
//     const randomNumber = Math.floor(Math.random()*100)
//     if (randomNumber % 2 ===0){
//         res(randomNumber)
//     }else{
//         rej(randomNumber)
//     }
// })

// pr.then((data)=>{
//     console.log(data, 'this is divisible by 2')
// }).catch((data)=>{
//     console.log(data,'This is not divi')
// })  

//Example for Micro and Macro


// const p1 = new Promise((res,rej)=>{
//     console.log('Executor callback triggered by p1')
//     setTimeout(()=>{
//         console.log('timer of p1 done')
//         res(100)
//     },500)
// })

// p1.then(function a(){
//     console.log('a')
// }, function b(){
//     console.log('b')
// })

// setTimeout(function timerCB(){
//     console.log('timer of 1 done')
// },2000)

// const pr = new Promise((res,rej)=>{
//     console.log('Executor callback triggered by pr')
//     setTimeout(()=>{
//         const randomNumber = Math.floor(Math.random()*100)
//         if(randomNumber % 2 ==0){
//             res(randomNumber)
//         }
//         else{
//             rej(randomNumber)
//         }
//     },3000)
// })

// pr.then(function f(){
//     console.log('f')
// }, function g(){
//     console.log('g')
// })

// for(let i=0; i<=1000000; i++){}
// console.log('end')

// handling exception with try and catch

// const pr = new Promise((res,rej)=>{
    
//         let randomNumber = Math.floor(Math.random()*100)
//         if(randomNumber % 2  ==0){
//             res(randomNumber)
//         }else{
//             rej(randomNumber)
//         }
    
   
// })

// async function getResult(){
//     try {
//         let result = await pr
//         console.log(result, 'this is an even number')
//     }catch(err){
//         console.log(err, 'err occured this is not an even number')
//     }
// }

// getResult()


// doing the same thing with .then and .catch
// const pr = new Promise((res,rej)=>{
    
//     let randomNumber = Math.floor(Math.random()*100)
//     if(randomNumber % 2  ==0){
//         res(randomNumber)
//     }else{
//         rej(randomNumber)
//     }


// })
// pr.then((number)=>{
//     console.log(number,'the number is even')
// }).catch((number)=>{
//     console.log(number, 'The number is odd')
// })

// const pr = new Promise((res,rej)=>{

//     setTimeout(()=>{
//         const randomNumber = Math.floor(Math.random()*100)
//         if (randomNumber % 2 ===0){
//             res(randomNumber)
//         }else{
//             rej(randomNumber)
//         }
//     },1000)
// })

// let p2 = pr.then(function resolved(data){
//         return(`${data} : even number`)
//     },
//     function rejected(data){
//         return(`${data} : this is rejeected with oddNumber`)
//     })   

// p2.then((data)=>{
//     console.log(data)
// })

function download(url){
    return new Promise((res,rej)=>{
        console.log('downloaded started from',url)
        setTimeout(()=>{
            let data = "someData"
            console.log('downloading data over')
            res(data)
        },2000)
    })
}

function writeFile(data,filename){
    return new Promise((resolve, reject) => {
        console.log('writting',data, 'to the file')
        setTimeout(()=>{
            console.log('writting' ,data, 'to the',filename,'is over')
            let status = "successfully"
            resolve(status)
        },3000)
    })
}

function Upload(filename,url){
    return new Promise((resolve, reject) => {
        console.log('uploading',filename,'to the',url)
        setTimeout(()=>{
            console.log('Uploding done')
            let status = "Successfully"
            resolve(status)

        },4000)
    })
}

// download('www.google.com').then((data)=>{
//     console.log('downloaded data is:',data)
//     writeFile(data,'file.txt').then((status)=>{
//         console.log('writting to the file done',status)
//         Upload('file.txt','www.gdrive.com').then((status)=>{
//             console.log('All operations completed',status)
//         })
//     })
// })

download('https://www.example.com').then((data)=>{
    console.log('download data is:',data)
    return writeFile(data, 'file.txt')
}).then((status)=>{
    console.log('writting to the file done',status)
    return Upload('file.txt','www.gdrive.com')
}).then((status)=>{
    console.log('All Operations Completed',status)
})
