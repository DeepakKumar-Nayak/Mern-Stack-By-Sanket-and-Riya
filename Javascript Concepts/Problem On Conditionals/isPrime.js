// find out the prime number write a function and check its a prime number or not. 
// a numner which is divisible by 1 and the number itself is a prime number and if the number is divisbile by any other number 
// then its not a prime number

function isPrime(number){
    let factor =0; 
    for(let i=2; i<number; i++){
        if(number % i == 0){
            factor+=1;
            break
        }
    }
    if(factor>0){
        console.log(number,'it not a primenumber')
    }
    else{
        console.log(number,'is a prime number')
    }
}
isPrime(8)