class Product {
    #name;
    price
    
    constructor(name,price){
        this.#name = name;
        this.price = price
    }

    getdetails(){
        return this.#name
    }
    
}

const data = new Product('deepak',120000)
console.log(data.getdetails())