const arrayOne = [10,20,30,40]
arrayOne.push(50)
//console.log(arrayOne)

const arrayTwo = [10,20,30,40]
arrayTwo.pop()
//console.log(arrayTwo)

const arrayThree = [10,20,30,40]
arrayThree.shift()
//console.log(arrayThree)

const arrayFour = [10,20,30,40]
arrayFour.unshift(9)
//console.log(arrayFour)

const arrayFive = [10,20,30,40]
//console.log(arrayFive.includes(10))

const arraySix = [10,20,30,40]
//const data = arraySix.find(function findElement(element){
    //return element % 2 ==0
//})
//console.log(data)

const studentsOne = ['amit','rahul','rohit']
const studentsTwo = ['kali','harry','raghav']
//const data = studentsOne.concat(studentsOne)
//console.log(data)


const arraySeven = [10,20,30,40]
// const data = arraySeven.findIndex(function findIndex(elem){
//     return elem > 30
// })
// console.log(data)
// console.log(arraySeven[data])

const arrayEight = [10,20,30,40]
//console.log(arrayEight.slice(1,3))
//console.log(arrayEight)

const array9 = [10,20,30,40]
array9.splice(1,1, 'deepak','tipun')
//console.log(array9)

const arrayFilter = [10,20,30,40]
const data = arrayFilter.filter(function filterNumbers(elem){
    return elem >20 && elem <40
})

//console.log(data)

const mapData = [10,20,30,40]
const datav = mapData.map(function multiplyNumbers(elem){
    return elem*10
})

console.log(datav)