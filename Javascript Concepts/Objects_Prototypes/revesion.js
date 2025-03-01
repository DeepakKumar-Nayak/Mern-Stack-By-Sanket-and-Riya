class Product {
    constructor(name,price,rating){
        this.name = name;
        this.price = price
        this.rating = rating
    }

    displayDetails(){
        console.log(this.name, this.price,this.rating)
    }
}

const data = new Product('IPhone',12000,'4.5')
const result = data.prototype()