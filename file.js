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

// function downloadData(url,callback){
//     console.log('Downloading the data from . . . . ',url)
//     setTimeout(()=>{
//         console.log('downloading the data is done')
//         let downloadData = "info about the killer"
//         callback(downloadData)
//      },3000)
// }

// function writeFile(data, filename, callback){
//     console.log('writting data to the file . . . .')
//     setTimeout(()=>{
//         console.log('writting',data,'to the filename',filename,'is done')
//         let msg = "successfull"
//         callback(data,msg)
//     },4000)
// }

// function uploadData(data,drivename,msg){
//     console.log('uploadind data to the drive.....')
//     setTimeout(() => {
//         console.log('uploading', data, 'to the',drivename,'is done')
//         console.log('task is',msg)
//     },5000);
// }

// downloadData('www.info.com', function handleDownload(data){
//     writeFile(data, 'data.txt', function handleUpload(data,msg){
//         uploadData(data,'www.googledrive.com',msg)
//     })
// })

// const person = {
//     firstname: "Deepak",
//     surname: "Kumar",
//     occupation: "Full Stack Developer",
//     location: "Odisha",

//     introduce: function () {
//         console.log(`Hi, I am ${this.firstname} and I work as a ${this.occupation}.`);
//     }
// };

// const teacher = {
//     firstname: "Anita",
//     surname: "Sharma",
//     occupation: "Mathematics Teacher",
//     location: "Delhi"
// };
// const engineer = {
//     firstname: "Ravi",
//     surname: "Verma",
//     occupation: "Software Engineer",
//     location: "Bangalore"
// };

//person.introduce.call(teacher)

// var firstname = "tipun"
// var occupation = "shop manager"
// const person = {
//     firstname: "Deepak",
//     surname: "Kumar",
//     occupation: "Full Stack Developer",
//     location: "Odisha",
//     introduce: function(){
//         const getInfo =()=>{
//             console.log(`Hi, I am ${this.firstname} and I work as a ${this.occupation}.`);
//         }
//         getInfo()
//     }

// };

// person.introduce()

// class Product {

//   #name
//   #price
//   #quantity
//   #rating

//   constructor(name,price,quantity,rating){
//    this.#name = name;
//    this.#price = price;
//    this.#quantity = quantity;
//    this.#rating = rating
//   }

//   set price(p){
//     if(p > 1){
//       this.#price = p
//     }else{
//       throw new Error('invalid price')
//     }
//   }

//   displayProduct(){
//     console.log(`Product Data: ${this.#name} ${this.#price} ${this.#quantity} ${this.#rating}`)
//   }
  


// }
// try{
//   const productOne = new Product('glass',10, 4,4)
//   productOne.displayProduct()

  // productOne.price = 11;
  // productOne.displayProduct()


// }catch(err){
//   console.log(err.message)
// }


/// doing the same thing with function 

// class Product{

//   #name
//   #price
//   #description

//   constructor(Builder){
//     this.#name = Builder.name;
//     this.#price = Builder.price;
//     this.#description = Builder.description;
//   }

//   displayProduct(){
//     console.log(`
//       Product Info:
//       Product Name: ${this.#name} 
//       Product Price: ${this.#price} 
//       Product Description: ${this.#description}
//       `)
//     }

//   static get Builder(){
//     class Builder {
//       constructor(){
//         this.name = ''
//         this.price = ""
//         this.description = ""
//       }

//       setName(incommingName){
//         this.name = incommingName;
//         return this
//       }   
//       setPrice(incommingPrice){
//         this.price = incommingPrice;
//         return this
//       }
//       setDescription(incommingDescription){
//         this.description = incommingDescription;
//         return this
//       }
//       build(){

//         return new Product(this)
//       }
//     }
//     return Builder
//   }
// }

// const product = new Product.Builder()
// .setName('Iphone')
// .setPrice(70000)
// .setDescription('Slim and Security wise its very good')

// const result = product.build()
// result.displayProduct()


// class Product{

//   #name
//   #price
//   #description

//   constructor(Builder){
//     this.#name = Builder.name;
//     this.#price = Builder.price;
//     this.#description = Builder.description;
//   }

//   displayProduct(){
//     console.log(`
//       Product Info:
//       Product Name: ${this.#name} 
//       Product Price: ${this.#price} 
//       Product Description: ${this.#description}
//       `)
//     }

//   static get Builder(){
//     class Builder {
//       constructor(){
//         this.name = ''
//         this.price = ""
//         this.description = ""
//       }

//       setName(incommingName){
//         this.name = incommingName;
//         return this
//       }   
//       setPrice(incommingPrice){
//         this.price = incommingPrice;
//         return this
//       }
//       setDescription(incommingDescription){
//         this.description = incommingDescription;
//         return this
//       }
//       build(){

//         return new Product(this)
//       }
//     }
//     return Builder
//   }
// }

// const product = new Product.Builder()
// .setName('Iphone')
// .setPrice(70000)
// .setDescription('Slim and Security wise its very good')

// const result = product.build()
// result.displayProduct()

function Events(date){
  this.date = date
}

Events.prototype.bookEvent = function(){
  console.log('booking event completed successfully')
}

function Movies(name,date){
  Events.call(this,date)
  this.name = name
}

Movies.prototype = Object.create(Events.prototype)
const m = new Movies('movie','11-22-92')
m.bookEvent()