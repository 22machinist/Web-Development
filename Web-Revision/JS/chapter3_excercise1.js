//In this file we will define a function in which it subtracts the number by 2 and if the 
//Result is 0 it gives true and if the result is 1 it gives false

//Let's Code 
function isEven(a) {
    //Let us add base case
    if( a === 0) {
        return true ;
    } else if (a === 1) {
        return false ; 
    } else if (a < 0) {
        return isEven(-a) ;
    } else {
        return isEven(a - 2) ;
    }
}

//Testing the cases 
console.log(isEven(4)) ; 
console.log(isEven(7)) ;
console.log(isEven(-7)) ;