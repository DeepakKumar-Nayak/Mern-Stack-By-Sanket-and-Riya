class Product {
    #name
    #price
    #quantity

    // yahan meine private data-memebers banaya hai kyun ki mein nahi chahta hoon ki koi bhi  bahar se akke mere data-memebers mein idhar udhar ki value pass kar de, and private ki vajeh se bhi class ke bahar se koi value aise update nahi kar paenge jab tak ham getter and setter use na kare

    

    constructor(builder){
        this.#name = builder.name;
        if(builder.price>0){
            this.#price = builder.price
        }else{
            throw new Error ('Price should be greater than 0')
        }
        this.#quantity = builder.quantity;
    }

    // if i use the approach of creating a product without constructor then i will face a number of problems like i will not be able to do the validatuon before object creation. suppose u got a senario where before object creation you have to do some validatons aur aggar apka validation fulfill nahi hua then apka object creation bandh ho jaega and ham getter and setter bhi nahi use kar paenge toh dono issue hamko solve karna hai

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

// Notes aggar mujhe builder ke andar setter and getter use karna hai toh hame toh mujhe us name ke variables ko krna padega declare warna nahi hoga for, aur aggar nahi kiya hai declare then ham ek normal function lik sakhte hai like 
// sursurName 

// example 

class Product {

    name; // then i have to define like this
    surname;// then i have to define like this. 

    constructor(builder){
        this.name = builder.name 
        this.surname = builder.surname 
    }

    setsurName(sur_name){
        if(sur_name === this.surname){
            console.log('we already have this surname we need some unique surname')
            return
        }
        this.surname = sur_name
    }

    set name(n){
        this.name = n
        // if i want to use like this
    }
    get name(){
        return this.name
        // if i want to use like this
    }


}

const data = new Product({
    name:'deepak',
    surname: 'nayak'
})

data.name = 'Deepak'
data.setsurName('rahulwa')

console.log(data)



/////  example with explanation 


class Product {

    name;
    surname;

    constructor(builder) {
        this.name = builder.name
        this.surname = builder.surname
    }

    static get Builder() {
        class Builder {
            constructor() {
                this.name = "";
                this.surname = "";
            }

            setName(n) {
                this.name = n
                return this
            }
            setSurname(sn) {
                this.surname = sn
                return this
            }
            build() {
                return new Product(this)
            }
        }
        return Builder;
    }


}

const data = new Product.Builder()
    .setName('deepak')
    .setSurname('nayak')
console.log(data.build())


class Product {
    //'Product' naam ki ek nayi class shuru ho rahi hai. Ye hamara main object hai jo hum banana chahte hain.

    name;
    //  'Product' class ke andar 'name' naam ki ek property declare ki gayi hai. Ye product ka naam rakhegi.

    surname;
    // 'Product' class ke andar 'surname' naam ki ek aur property declare ki gayi hai. Ye product ka surname rakhegi.

    constructor(builder) {
        // 'Product' class ka constructor. Ye tab chalta hai jab aap 'Product' ka naya object banate ho.
        // Ye ek 'builder' object ko as an argument leta hai.

        this.name = builder.name
        // Constructor ke andar, 'Product' object ki 'name' property ko 'builder' object ki 'name' property se assign kiya jaata hai.

        this.surname = builder.surname
        // Same to same, 'Product' object ki 'surname' property ko 'builder' object ki 'surname' property se assign kiya jaata hai.
    }

    static get Builder() {
        // Ye ek **'static getter' method** hai jiska naam 'Builder' hai.
        // **'static' ka matlab hai ki aap isse 'Product' class ke naam se direct access kar sakte ho (jaise 'Product.Builder'), na ki 'Product' ke kisi object se.**
        // 'get' ka matlab hai ki jab aap 'Product.Builder' likhte ho, toh ye ek function ki tarah call nahi hota, balki ek value (is case mein ek class) return karta hai.

        class Builder {
            // Line 11: **'Builder' naam ki ek nested (andar hi andar) class ko yahi define kiya gaya hai.** Yehi class hai jo hamare 'Product' objects ko banane mein help karegi.

            constructor() {
                // Line 12: Is 'Builder' class ka constructor. Ye tab chalta hai jab aap 'Builder' ka naya object banate ho.

                this.name = ""; // Line 13: 'Builder' object ki 'name' property ko ek empty string se initialize kiya jaata hai.
                this.surname = ""; // Line 14: 'Builder' object ki 'surname' property ko bhi ek empty string se initialize kiya jaata hai.
            }

            setName(n) {
                // 'setName' naam ka ek method. Ye 'Builder' object ki 'name' property ko set karta hai.

                this.name = n // Input 'n' ko 'Builder' object ki 'name' property mein assign kiya jaata hai.
                return this // **Ye method 'this' (yaani current 'Builder' object) ko return karta hai.** Ye **Method Chaining** (kai methods ko ek saath jodne) ko allow karta hai.
            }
            setSurname(sn) {
                // 'setSurname' naam ka ek method. Ye 'Builder' object ki 'surname' property ko set karta hai.

                this.surname = sn // Input 'sn' ko 'Builder' object ki 'surname' property mein assign kiya jaata hai.
                return this // Ye method bhi 'this' (yaani current 'Builder' object) ko return karta hai, jisse chaining chalti rehti hai.
            }
            build() {
                // Line 21: 'build' naam ka method. Ye 'Product' object banane ka final step hai.

                return new Product(this)
                // **Ye ek naya 'Product' object banata hai, aur current 'Builder' object ko uske constructor mein pass karta hai.**
                // 'Product' ka constructor phir 'Builder' object ki 'name' aur 'surname' values ka use karke 'Product' object ko initialize karta hai.
            }
        }
        return Builder; // Line 24: 'static get Builder()' method 'Builder' class ko return karta hai.
    }

}



const dataa = new Product.Builder()
    // Line 26: Yahan se code ka execution start hota hai.
    // // Line 27: 'Product.Builder()' 'Product' class ke andar ke 'static Builder' getter ko access karta hai, jo humein 'Builder' class deta hai.
    // // Line 28: **'new Product.Builder()' 'Builder' class ka ek naya instance (object) banata hai.** Ab 'data' variable ek 'Builder' object ko point kar raha hai.

    .setName('deepak')
    // Line 29: 'data' (jo ek 'Builder' object hai) par 'setName' method ko call karta hai, 'name' property ko 'deepak' set karta hai. Kyunki 'setName' 'this' ko return karta hai, aap isse chain kar sakte ho.
    .setSurname('nayak')
// Line 30: 'data' (jo abhi bhi wahi 'Builder' object hai) par 'setSurname' method ko call karta hai, 'surname' property ko 'nayak' set karta hai.
console.log(data.build())
// Line 31: 'data' (abhi bhi 'Builder' object) par 'build()' method ko call karta hai.
// Line 32: 'build()' method ek naya 'Product' object banata hai, 'deepak' aur 'nayak' naam aur surname ke saath.
// Line 33: Phir is naye bane hue 'Product' object ko console mein print kiya jaata hai.


/** 
 * ### Sabse Zaroori Lines aur Unke Fayde (Most Important Lines & Their Benefits)

Poore code mein, kuch lines aisi hain jo is **Builder Design Pattern** ki functionality aur benefits ko highlight karti hain:

* **Line 8: `static get Builder(){`**
    * **Fayda:** Ye line **Builder** ko ek **static** member banati hai. Iska sabse bada fayda ye hai ki aapko `Product` class ka koi object banane ki zaroorat nahi padti `Builder` ko access karne ke liye. Aap seedhe `Product.Builder` ka use karke `Builder` ko access kar sakte ho. Agar ye `static` nahi hota, toh aapko pehle `Product` ka ek faltu object banana padta, jo is pattern ka maksad hi khatam kar deta. Ye **code ko bahut hi seedha aur easy-to-use** banata hai.

* **Line 11: `class Builder {`**
    * **Fayda:** Ye line `Product` class ke andar ek **nested `Builder` class** ko define karti hai. Ye **clearity** provide karti hai ki ye `Builder` specifically `Product` objects ke liye hai. Ye `Product` ke object creation logic ko `Product` class ke andar hi rakhta hai, jisse **code zyada organized** dikhta hai.

* **Line 17: `return this`** (aur **Line 20: `return this`**)
    * **Fayda:** Ye lines `setName` aur `setSurname` jaise setter methods ko **Method Chaining** ko support karne mein help karti hain. Matlab aap `.setName().setSurname()` ki tarah methods ko ek saath jod sakte ho. Ye **code ko bahut hi easy-to-read aur "fluent" (smooth)** banata hai, jaise ki aap ek sentence padh rahe ho.

* **Line 22: `return new Product(this)`**
    * **Fayda:** Ye line **`build()`** method ka main part hai. Ye finally `Product` object create karta hai. Ye `Builder` object ki internal state (jo name aur surname store karti hai) ko `Product` ke constructor mein pass karta hai. Ye ensure karta hai ki `Product` object **ek baar mein poori tarah se aur sahi tareeke se bane**, jisse **Immutable Objects (aise objects jinhe ek baar banne ke baad change nahi kiya ja sakta)** banane mein help milti hai (agar `Product` ke andar koi setter methods na ho). Ye object creation process ko **controlled aur secure** banata hai.

* **Line 28: `new Product.Builder()`**
    * **Fayda:** Ye line show karti hai ki aap `Builder` ko kaise use karna start karte ho. `static` hone ki wajah se aap `Product` class se directly `Builder` tak pahunch sakte ho. Ye **simple aur direct object creation** ka starting point hai, jo aapko complex constructors se bachata hai.

* **Line 29-30: `.setName('deepak').setSurname('nayak')`**
    * **Fayda:** Ye lines **Method Chaining** ka best example hain. Ye code ko bahut hi **easy-to-read aur easy-to-understand** banata hai. Aapko clearly pata chalta hai ki kaun si property kya set kar rahi hai, jisse code **self-documenting (apne aap ko samjhane wala)** ban jaata hai. Agar `Product` mein 10-15 properties hoti, toh ek normal constructor call ek lambi aur confusing line hoti, jabki `Builder` isse bahut organized rakhta hai.

Toh ab samjha kya, `static` use karne ka asli fayda kya hai aur ye poora `Builder` pattern kaise kaam karta hai?
*/


// Notes:

// Agar static nahi hota toh aisa karna padta (jo galat hai Builder Pattern ke liye):
//const dummyProduct = new Product(); // Ek faltu Product object banao
//const builder = new dummyProduct.Builder(); // Phir Builder ko access karo

/**
 * Agar aap static nahi lagaoge, toh Builder class ko access karne ke liye aapko Product ka ek object banana padega. Socho:
 * Yeh illogical hai, kyunki Builder ka kaam toh Product object banana hai, na ki kisi existing Product object par kaam karna.
 * static banane se aap Product.Builder() likh kar Builder class ko seedha access kar sakte ho, bina Product ka koi object banaye. 
 * Yeh bahut clean aur intuitive tareeka hai.
 */