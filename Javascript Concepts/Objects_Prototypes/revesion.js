function Product(name,price,rating){
    this.name = name,
    this.price = price,
    this.rating = rating
}

Product.prototype.getDetails = function(){
    console.log(this.name, this.price,this.rating)
}

const data = new Product('Iphone',12000,"4.8")