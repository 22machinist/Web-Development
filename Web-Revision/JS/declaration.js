//In this file we will see that the function can be placed anywhere in the code 
//Function will always be placed at the top of the file 

function square(x) {
    return x * x ;
}
//The function defined above i will use it now 

console.log(square(7)) ; //Use of the above function

//Now i will define the use and after this i will define the function

console.log("The future says : " + future()) ;

function future () {
    return "Your future is bright ." ;
}

//Now we will test arrow function
const power = (base, exponent) => {
    let result = 1 ;
    for (let count = 0 ; count < exponent ; count++) {
        result *= base ; 
    }
    return result ;
}

console.log(power(3,2)) ;

//Now we will add greet function
function greet(who) {
    console.log("Radhe Radhe" + who) ; 
}

//Calling the function
greet("Harry") ; 
console.log("Bye") ; 

//We will now define a function in which the value of one parameter is fixed if the parameter is missing than that value will be used 

function powe(base , exponent = 2) {
    //In this function the value of exponent parameter is predeined 
    //If the exponent parameter is missing than the default value "2 is used"

    let result = 1 ; 
    for (let count = 0 ; count < exponent ; count++) {
        result *= base 
    }
    return result ; 
}

//calling the function
console.log(powe(2,3)) ; 
console.log(powe(4)) ; //In this call exponent parameter is missing therefore it will use the default value of parameter 


//Now we will try to understand the Closure 

function wrapValue(n) {
    let local = n ;
    return () => local ; 
}

let wrap1 = wrapValue(1) ; 
let wrap2 = wrapValue(2) ; 
console.log(wrap1()) ; 
console.log(wrap2()) ; 
//Now eventually both wrap1 and wrap2 will work anonymously as functions 

//Now we will approach functions in different ways 
//Now let us define the function

function multiplier(factor) {
    return number => number * factor ; 
}

//Defining it to multiply it by two
let twice = multiplier(2) ; 
console.log(twice(5)) ; 


