// class Product {

//     // writting some data members: 

//     name
//     price
//     category
//     description
//     quantity

//     // writing some member functions


//     addToCart(){
//         console.log('product added to the cart')
//     }

//     DisplayDetails(){
//         console.log('display details of the product')
//     }


// }

//const product = new Product() // this is how a object is created and yes this is not a fully fledged Object there are many more things to be done and we will do that on later stages. 



// class Product {

//     constructor(productName, productCategory, productQuantity, productDescription, productRating){

//         this.name = productName; // Laptop
//         this.category = productCategory; // Electronics
//         this.quantity = productQuantity; // 12
//         this.description = productDescription; // Hp Laptop
//         this.rating = productRating // 4.0

//     }
//     addToCart(){
//         console.log('product added to the cart')
//     }
// }

// const productOne = new Product('Laptop','Electronics',12, 'Hp Laptop', '4.0')

// // aggar apko new data members add karna hai toh aap object ke help se kar sakhte ho called variable ko leke for example; 

// productOne.color = "black"

// console.log(productOne.name)


// class Product {
//     name;
//     age;

//     constructor(){

//     }
// }

// const data = new Product()
// data.name = "deepak"
// data.age = 30

// console.log(data)

// Example with private data-member; 
// class Product {
//     #name;
//     #quantity;
//     #rating;
//     review;
//     price;

//     constructor(productName, productQuantity, productRating, productReview, productPrice){
//         this.#name = productName;                   
//         this.#quantity = productQuantity;
//         this.#rating = productRating;
//         this.review = productReview;
//         this.price = productPrice;
//     }

//     //accessing private data-member inside the class
//     getname(){
//         console.log(this.#name)
//     }

//     // updating the private data-member .. name .. inside the class
//     setName(changeName){
//         if(changeName != this.#name){
//             this.#name = changeName
//         }
//     }



// }
// const productOne = new Product('hp-laptop','14','4.2','Good One',67000)

// productOne.setName('HP')
// console.log(productOne)

// class Product {
//     #name;
//     #quantity;
//     #rating;
//     review;
//     price;

//     constructor(productName, productQuantity, productRating, productReview, productPrice){
//         this.#name = productName;                   
//         this.#quantity = productQuantity;
//         this.#rating = productRating;
//         this.review = productReview;
//         this.price = productPrice;
//     }

//     // how to writer a actual setter and getter function by using set and get so i have done this by using get and set keyword

//     set price(p){
//         if(p > this.price){
//             this.price = p
//         }else{
//             console.log('please choose a higher/updated price')
//         }
//     }
//     get price(){
//         return this.price
//     }

// }
// const productOne = new Product('hp-laptop','14','4.2','Good One',67000)

// //productOne.setName('HP')
// productOne.price = 90000;
// console.log(productOne.price)
// console.log(productOne)

// function Product(n,d,p){
//     this.name = n;
//     this.description = d;
//     this.price = p;

//     this.displayProductDetails = function(){
//         console.log(this.name,this.description,this.price)
//     }

// }

// const data = new Product('laptop','hp-laptop',78999)
// data.displayProductDetails()

// class Product {
//     name;
//     modelno;
//     quantity;
//     price;

//     constructor(obj){
//         this.name = obj.name;
//         this.modelno= obj.modelno;
//         this.quantity = obj.quantity;

//         // adding validation in constructor
//         if(obj.price > 0 && typeof(obj.price) === "number"){
//             this.price = obj.price
//         }else{
//             return null
//         }

//     }

//     getDetails(){
//         return `
//         ${this.name}, ${this.modelno},${this.quantity}, ${this.price}
//         `
//     }
// }

// const Iphone = new Product({
//     name: 'Iphone',
//     modelno : 'Iphone14',
//     quantity: 14,
//     price : 10,
// })

// console.log(Iphone.getDetails())

// Builder Pattern Example 2: 


// class Product {
//     #name
//     #price
//     #quantity

//     constructor(builder){
//         this.#name = builder.name;
//         if(builder.price>0){
//             this.#price = builder.price
//         }else{
//             return {}
//         }
//         this.#price = builder.price;
//         this.#quantity = builder.quantity;
//     }

//     displayProduct(){
//         console.log(this.#name, this.#price, this.#quantity)
//     }
//     static get Builder(){
//         class Builder {
//             constructor(){
//                 this.name = "";
//                 this.price = 0;
//                 this.quantity = 1;
//             }
//             setName(newname){
//                 this.name = newname
//                 return this
//             }
//             setPrice(newprice){
//                 this.price = newprice
//                 return this
//             }
//             setQuantity(newquantity){
//                 this.quantity = newquantity
//                 return this
//             }
//             build(){
//                 return new Product(this)
//             }
//         }

//         return Builder;
//     }
// }

// const iPhone = new Product.Builder()
// iPhone.setName('IPhone').setPrice(150000).setQuantity(10)
// console.log(iPhone)

// Example for object destructuring: 
// const product = {name: 'Iphone',price:80000,quantity:30}
// const {name:nameee,price,quantity} = product

// console.log(nameee)
// console.log(price)
// console.log(quantity)

// const productData = {review : 'Its very Costly', description: 'The Phone is Very Good But Very Costly' ,  ...product}
// console.log(productData)

// const product = {name: 'Iphone',price:80000,quantity:30, product_Info: {review : 'Its very Costly', description: 'The Phone is Very Good But Very Costly' }}

// const {product_Info: {review,description}} = product
// console.log(review)
// console.log(description)

// const bioData = {name: 'deepak',surname: 'kumar', address:{location:'odisha', district:'cuttack',area:'CDA', Hobbies:{hobbieOne:'cricket', hobbbieTwo:'Coding', hobbieThree: 'Listening Songs'}}}


// const {address:{Hobbies:{hobbieThree,hobbieOne,hobbbieTwo}}} = bioData
// console.log(hobbieThree)
// console.log(hobbbieTwo)
// console.log(hobbieOne)

// just for more details how does the builder pattern works
// class Product {
//     static get Builder(){
//         class Builder {

//             setName(inc){
//                 this.name = inc
//                 return this
//             }
//             setPrice(pc){
//                 this.price = pc
//                 return this

//             }
//         }
//         return new Builder()
//     }

// }

// const product = Product.Builder.setName('deepak').setPrice(12000)
// console.log(product)

// class Product {
//     constructor(name,price){
//         this.name = name;
//         this.price = price
//     }
// }
// Product.prototype.display = function(){
//     console.log(this.name)
// }

// const p = new Product('Iphone',12000)
// p.display()


// class Events {
//     bookEvents(name){
//         this.name = name
//         console.log('Event Booking Done for',this.name)
//     }
// }

// class Movie extends Events {
//     showTime(){
//         console.log('movie-show')
//     }
// }

// const m = new Movie()
// m.showTime()
// m.bookEvents('movies')

// Uisng Call / Apply / Bind: 

// const product = {
//     name : 'Iphone',
//     productInfo : function(){
//         console.log(this.name)
//     }
// }

// const productTwo = {
//     name : 'Audi car'
// }

// product.productInfo.call(productTwo)

// const product = {
//     name : 'Iphone',
//     productInfo : function(price){
//         console.log(this.name, 'and the price is',price)
//     }
// }

// const productTwo = {
//     name : 'Samsung Galaxy'
// }

// product.productInfo.apply(productTwo, [120000])

// // call example

// const product_one = {
//     name : 'Iphone',
//     getInfo : function(price){
//         console.log(this.name,'price is',price)
//         // so here i am passing a parameter as price in getInfo function
//     }
// }

// const productTwo = {
//     name : 'Macbook'

// }

// //product_one.getInfo(50000)
// product_one.getInfo.call(productTwo, 67000)
// // 67000 mein esliye pass kar raha hoon kyun ki getinfo ko ek parameter chahiye and woh parameter aise hi paas hogi after comma and more than one ham pass kar sakhte hein. 

// var name = "Earpods"
// const obj = {
//     name : "Iphone",
//     getInfo : function(){
//         console.log(this.name)
//     }
// }

// const newObj = {
//     name :'Macbook'
// }

// const f = obj.getInfo.bind(newObj)
// console.log(f)

// Acheiving Inheritance without class: 

// function Events(date){
//     this.date = date
// }
// Events.prototype.bookEvent = function(eventname){
//     if(eventname === 'Movie'){
//         console.log('Congratulations Ticket Book Successfully for',this.name)
//     }else if(eventname === 'Comedy'){
//         console.log('Congratulations Ticket Book Successfully for',this.name)
//     }else{
//         console.log('Congratulations Ticket Book Successfully for',this.name)
//     }
// }

// function Movie(name){
//     this.name = name
// }

// function Comedy(name){
//     this.name = name
// }
// function Circus(name){
//     this.name = name
// }

// Movie.prototype.__proto__ = Events.prototype
// Comedy.prototype.__proto__ = Events.prototype
// Circus.prototype.__proto__ = Events.prototype

// const m = new Movie('KGF')
// //m.bookEvent('Movie')

// const c = new Comedy('Kapil Sharma Show')
// //c.bookEvent('Comedy')

// const cir = new Circus('The Circus Show')
// cir.bookEvent('Circus')

// How to do the same thing using class

// class Events {
//     constructor(dateofEvent) {
//         this.dateofEvent = dateofEvent
//     }
//     bookEvent(eventname) {
//         if (eventname === 'Movie' || 'movie') {
//             console.log('Congratulations Ticket Booked Successfully for', this.name)
//         } else if (eventname === 'Comedy' || 'comedy') {
//             console.log('Congratulations Ticket Booked Successfully for', this.name)
//         } else {
//             console.log('Congratulations Ticket Booked Successfully for', this.name)
//         }
//     }
// }

// class Movie extends Events {
//     constructor(name, date) {
//         super(date)
//         this.name = name
//     }
// }

// class Comedy extends Events {
//     constructor(name,date){
//         super(date)
//         this.name = name
//     }
// }

// const m = new Movie('KGF', '19-02-2025')
// //m.bookEvent('movie')

// const c = new Comedy('Kapil Sharma Show', '19-02-25')
// c.bookEvent('comedy')


// Now lets do the same thing again with function 
// But remember one thing super is not used in function

// function Events(eventDate){
//     this.eventDate = eventDate
// }
// Events.prototype.BookEvent = function(eventname){
//     console.log('Event Booked Successfully for',eventname)
// }

// function Movie(name,date){
//     Events.call(this,date)
//     this.name = name
// }
// Movie.prototype.setMovie = function(){
//     console.log('movie')
// }



// Movie.prototype = Object.create(Events.prototype)

// const m = new Movie('kgf', '12-10-25')
// m.BookEvent('Movie')


// Builder Pattern Understanding
// class Product {

//     name;
//     surname;

//     constructor(builder){
//         this.name = builder.name
//         this.surname = builder.surname
//     }

//     setsurName(sur_name){
//         if(sur_name === this.surname){
//             console.log('we already have this surname we need some unique surname')
//             return
//         }
//         this.surname = sur_name
//     }

//     set name(n){
//         this.name = n
//     }
//     get name(){
//         return this.name
//     }


// }

// const data = new Product({
//     name:'deepak',
//     surname: 'nayak'
// })

// data.name = 'Deepak'
// data.setsurName('rahulwa')

// console.log(data)

