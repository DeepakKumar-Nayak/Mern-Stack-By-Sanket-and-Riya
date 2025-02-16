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



class Product {

    constructor(productName, productCategory, productQuantity, productDescription, productRating){

        this.name = productName; // Laptop
        this.category = productCategory; // Electronics
        this.quantity = productQuantity; // 12
        this.description = productDescription; // Hp Laptop
        this.rating = productRating // 4.0

    }
    addToCart(){
        console.log('product added to the cart')
    }
}

const productOne = new Product('Laptop','Electronics',12, 'Hp Laptop', '4.0')

// aggar apko new data members add karna hai toh aap object ke help se kar sakhte ho called variable ko leke for example; 

productOne.color = "black"

console.log(productOne.name)

