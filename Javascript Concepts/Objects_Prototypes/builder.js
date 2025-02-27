class Product {
    #name
    #price
    #quantity

    // yahan meine private data-memebers banaya hai kyun ki mein nahi chahta hoon ki koi bhi akke mere data-memebers mein idhar udhar ki value pass kar de, and private ki vajeh se bhi class ke bahar se koi value aise update nahi kar paenge jab tak ham getter and setter use na kare

    

    constructor(builder){
        this.#name = builder.name;
        if(builder.price>0){
            this.#price = builder.price
        }else{
            throw new Error ('Price should be greater than 0')
        }
        this.#quantity = builder.quantity;
    }

    // if i use the approach of creating a product without conatructor then i will face a number of problems like i will not be able to do the validatuon before object creation. suppose u got a senario where before object creation you have to do some validatons aur aggar apka validation fulfill nahi hua then apka object creation bandh ho jaega and ham getter and setter bhi nahi use kar paenge toh dono issue hamko solve karna hai

    displayProduct(){
        console.log(this.#name, this.#price, this.#quantity)
    }

    // this is what i have done 
    static get Builder(){

        class Builder {
            constructor(){
                this.name = "deepak";
                this.price = 90000;
                this.quantity= 10
            }
            setName(p){
                this.name = p
                return this
            }
            setPrice(p){
                this.price = p;
                return this
            }
            setQuantity(q){
                this.quantity = q;
                return this
            }
            build(){
                return new Product(this)
            }
        }
        return new Builder();
    }
}

const iPhone = Product.Builder
.setName("iPhone")
.setPrice(60000)
.setQuantity(10)
.build()

iPhone.displayProduct()