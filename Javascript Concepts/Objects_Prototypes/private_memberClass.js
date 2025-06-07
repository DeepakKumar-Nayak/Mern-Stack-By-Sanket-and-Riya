// lets build an class with private members

class Product {
    #name      // this is private member 
    #surname   // this is private member
    fullname

    constructor(name,surname,fullname){
        this.#name = name
        this.#surname = surname
        this.fullname = fullname
    }
    displayData(){
        console.log(this.#name, this.#surname)
        // this is the only way to access private-members because aggar koi data member ko aap private bana rahe hon 
        // then aap usko class ke andar hi access kar sakhte ho bahar nahi.
    }

    updateName(name){
        this.#name = name

        // this is how i can update the name from inside the class 
        // why because its a private-member and private members can only be update inside the class not outside
    }

}

let data = new Product('deepak','kumar','deepak kumar nayak')
data.updateName('Deepak')

data.fullname = "Deepak Kumar Nayak" // i can do the changes to this datmemeber as it is not a private data member

//console.log(data) // Product { fullname: 'Deepak Kumar Nayak' }
// the other ones are private so cannot access then outside the outside the class

//data.displayData() 

for(let key in data){
    console.log(key)
}


// Note:: ===
//------------


// to make a data member private we just need to add # beore its declaration like 
// constructor(name,surname,fullname){
//     this.#name = name
//     this.#surname = surname
//     this.fullname = fullname
// }