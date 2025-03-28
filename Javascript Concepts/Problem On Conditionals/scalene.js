// How to check a scalene triangle, equilateral triangle: 
// if every side have diffrent legtth and diffrent angle then its a Scalene triangle

// if all the length are equal and all the angke are equal to 60 degree then its a equilateral triangle.
// let a = 7, b=7 and c =7 here all the sides are equal.

//if any of the two sides are equal then its an isosceles triangle. 
// like if AB and AC are equal then its an isosceles triangle.

let a = 7, b = 9, c = 10;

if(a == b  && b == c && c ==a){
    console.log('its an equilateral triangle')
}else if(a !== b && b !== c && c !== a ){
    console.log('its an scalene triangle')
}else(
    console.log('its an isosceles triangle')
)