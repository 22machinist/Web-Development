//This file contains various functions defined with different specialities

//First we will create a function with zero parameters 
function greet() {
    console.log("Ram Ram Ji !") ;
} ; 

greet() ;

//Now we will create a function with two parameters 
function power(base , exponent) {
    //We will calculate value
    let result = 1 ;
    for (let count = 0 ; count < exponent ; count++) {
        result *= base ;
    } ;
    return result ; 
} ; 

console.log(power(2 , 2));

//Now we will add the third function which has three parameters
function add(num1 , num2 , num3 ) {
    let sum = 0 ;
    sum = num1 + num2 + num3 ;
    return sum ; 
}

console.log(add(1,2,3)) ;
