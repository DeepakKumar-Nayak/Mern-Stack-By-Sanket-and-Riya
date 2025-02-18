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


class Product {
    #name
    #price
    #quantity

    constructor(builder){
        this.#name = builder.name;
        if(builder.price>0){
            this.#price = builder.price
        }else{
            return {}
        }
        this.#price = builder.price;
        this.#quantity = builder.quantity;
    }

    displayProduct(){
        console.log(this.#name, this.#price, this.#quantity)
    }
    static get Builder(){
        class Builder {
            constructor(){
                this.name = "";
                this.price = 0;
                this.quantity = 1;
            }
            setName(newname){
                this.name = newname
                return this
            }
            setPrice(newprice){
                this.price = newprice
                return this
            }
            setQuantity(newquantity){
                this.quantity = newquantity
                return this
            }
            build(){
                return new Product(this)
            }
        }

        return Builder;
    }
}

const iPhone = new Product.Builder()
iPhone.setName('IPhone').setPrice(150000).setQuantity(10)
console.log(iPhone)