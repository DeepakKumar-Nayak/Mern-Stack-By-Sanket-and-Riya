// const info = {
//     name :'deepak',
//     fullname : 'deepak kumar nayak',
//     gmail : 'deepak@gmail.com',
//     working: 'Fullstack Developer / Mern Stack Developer'
// }
// info.name = "rahul"
// info.fullname = "kl rahul"
//console.log(info)



//console.log(info)
//console.log(Object.keys(info))
//console.log(Object.values(info))
//console.log(Object.entries(info))

//console.log(Object.entries(info).length)

// const elements = Object.keys(info)
// Object.preventExtensions(info)
// for(let i=0; i<elements.length; i++){
//     Object.defineProperty(info, elements[i], {writable:false, configurable:false})
// }

// info.name = "rahul"
// info.fullname = "kl rahul"
// info.location = "Odisha"

//console.log(delete info.name)
//console.log(info)

// function getName(){
//     let name = "deepak_kumar_nayak"

//     function getdataOne(){
//         var surname = "nayak"
//         console.log(name) // can be accessible
//     }
//     function getDatTwo(){
//         let favGame = "Carrom"
//         console.log(name) // can be accessible
//         console.log(surname) // not accessible
//     }
//     function getdataThree(){
//         console.log(favGame) // not accessible
//         console.log(name) // can be accessible
//     }
//     getdataOne()
//     getDatTwo()
//     getdataThree()
// }
// getName()

// function functionScopeExample(){ 
//     console.log(x) // undefined
//     var x = 10; 
//     console.log(x)
// }

// functionScopeExample()


// console.log(data)
// let data = function getName(){
//     return 'name'
// }

// console.log(data())

// const arr = [2,3,4,5,6]
// function CustomMap(arr, fn){
//     let newArray = [];
//     for(let i=0; i<arr.length; i++){
//         newArray.push(fn(arr[i]))
//     }
//     return newArray;
// }

// function fn(element){
//     return element*element
// }   
// //console.log(CustomMap(arr, fn))

// const data = arr.map(function factorial(n){
//     if(n == 1) return 1;
//     return n*factorial(n-1)
    
// })

// console.log(data)


// freeze
// const obj = {
//     name:'deepak',
//     username:'deepak_kumar',
//     gmailid: 'deepak@gmail.com',
//     githubid : 'deepak_DKN',
//     jobid: '123SDE2',
// }

/**
 * Object. Freeze 
 * it will make the object fully immutable due to which no changes can be made 
 * no delete, no update, cannot add new elements nothung can be done
 * ---
 * Object.freeze(obj)
 * obj.location = "mumbai"
 * delete obj.name
 * console.log(obj)
 */ 

/**
 * Object.seal
 * seal ke help se aab bas modify kar sakhte ho but you cannnot add and delete
 * new key value aggar add karna hai then you cant not allowed. 
 * ---
 * Object.seal(obj)
 * obj.name = "deepak_nayak" || allowed
 * delete obj.name           || not allowed
 * obj.location = "delhi"    || not allowed
 */


/**
 * Object.preventExtensions(obj)
 * obj.name = "kumar"       || this is allowed
 * obj.location = "Noida"   || adding elements not allowed
 * delete obj.name          || but yes deletion  is allowed.
 * 
 */

// Preventextension and define property
// seal mean no adding no deletion only updation 

// //class Product {
//     name;
//     surname;
//     fullname;
//     location;
//     area;
//     city;

//     //displayData(){
//         console.log(this)
//     //}
// //}

// const data = new Product()
// data.name = "deepak"
// data.surname = "nayak"
// data.fullname = "deepak kumar nayak"
// data.location = "Odisha"
// data.area = "CDA SECTOR 10"
// data.city = "Cuttack"

// //data.displayData()



const pr = new Promise((res, rej)=>{
    const randomNumber = Math.floor(Math.random()*100)
    if(randomNumber % 2 === 0){
        res(randomNumber,'its an even number')
    }else{
        rej(randomNumber,'its an odd number')
    }
})

console.log(pr)