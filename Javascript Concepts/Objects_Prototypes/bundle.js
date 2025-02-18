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
                console.log(this)
            }
        }

        return Builder;
    }
}

const iPhone = new Product.Builder()
iPhone.setName('IPhone').setPrice(150000).setQuantity(10)
iPhone.build()