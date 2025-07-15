// const employees = [
//     { firstName: "Deepak", jobId: "DEV101", salary: 45000 },
//     { firstName: "Anjali", jobId: "HR202", salary: 40000 },
//     { firstName: "Rohit", jobId: "SALES303", salary: 35000 },
//     { firstName: "Priya", jobId: "MKT404", salary: 38000 },
//     { firstName: "Aman", jobId: "DES505", salary: 42000 },
//     { firstName: "Sneha", jobId: "QA606", salary: 39000 },
//     { firstName: "Karan", jobId: "PM707", salary: 55000 },
//     { firstName: "Neha", jobId: "HR808", salary: 36000 },
//     { firstName: "Ravi", jobId: "SUP909", salary: 31000 },
//     { firstName: "Divya", jobId: "DEV010", salary: 47000 }
//   ];

//  // how to use map 
// const resultt= employees.map((data)=>{
//     return data.firstName , data.jobId
// })
// //console.log(resultt)

// // How to use Filter
// const filterData = employees.filter((data)=>{
//     if(data.salary>45000) return data.firstName
// })

// console.log(filterData)

// // how to use find
// const result = employees.find(function(data){
//     return data.salary>40000
// })

// //console.log(result)

// // how to use map and filter together

// const result1 = employees.map(function(data){
//     if(data.salary>40000){
//         return data.firstName
//     }
// }).filter((value)=>{
//     return value != undefined
// })

// //console.log(result1)

// function func(c,d){
//     let m = 10
//     let b = 80
//     let z = 80
//     function gunc(){
//         console.log(b)
//         console.log(m+c)
//     }
//     return gunc
// }

// let data = func(90,20)
// console.dir(data)

function downloadData(url,callback){
    console.log('Downloading the data from . . . . ',url)
    setTimeout(()=>{
        console.log('downloading the data is done')
        let downloadData = "info about the killer"
        callback(downloadData)
     },3000)
}

function writeFile(data, filename, callback){
    console.log('writting data to the file . . . .')
    setTimeout(()=>{
        console.log('writting',data,'to the filename',filename,'is done')
        let msg = "successfull"
        callback(data,msg)
    },4000)
}

function uploadData(data,drivename,msg){
    console.log('uploadind data to the drive.....')
    setTimeout(() => {
        console.log('uploading', data, 'to the',drivename,'is done')
        console.log('task is',msg)
    },5000);
}

downloadData('www.info.com', function handleDownload(data){
    writeFile(data, 'data.txt', function handleUpload(data,msg){
        uploadData(data,'www.googledrive.com',msg)
    })
})