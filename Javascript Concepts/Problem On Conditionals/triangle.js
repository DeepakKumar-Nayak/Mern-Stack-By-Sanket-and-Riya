// how to form a triangle
// so basically we have three sides of we want to check that its a triable or not 
// then we have check the sum of two sides must be greater than the othersie for example
// we have a = 10, b=12, c=5

let a = 10; 
let b = 12; 
let c = 5

if(a + b > c && b + c> a && a+c>b){
    console.log('its a valid triangle')
}else{
    console.log('Its not a triangle')
}