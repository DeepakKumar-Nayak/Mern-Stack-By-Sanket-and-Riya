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
            return {}
        }
        this.#price = builder.price;
        this.#quantity = builder.quantity;
    }

    // if i use the approach of creating a product without conatructor then i will face a number of problems like i will not be able to do the validatuon before object creation. suppose u got a senario where before object creation you have to do some validatons aur aggar apka validation fulfill nahi hua then apka object creation bandh ho jaega and ham getter and setter bhi nahi use kar paenge toh dono issue hamko solvbe karna hai

    displayProduct(){
        console.log(this.#name, this.#price, this.#quantity)
    }

    // this is what i have done 
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
                console.log(this)
            }
        }

        return Builder;
    }
}

const iPhone = new Product.Builder()
iPhone.setName('IPhone').setPrice(150000).setQuantity(10)
iPhone.build()