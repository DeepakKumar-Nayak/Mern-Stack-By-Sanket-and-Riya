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


console.log(data)
let data = function getName(){
    return 'name'
}

console.log(data())

