console.log("Hello World ! ");

//The code given below contains addition program
let total = 0 , count = 1 ;
while (count <= 10) {
    total += count ; 
    count += 1 ;
}
console.log(total) ; 

//Let us make the function for factorial operation of javascript and it will take input from user

function factorial(n) {
    if ( n == 0) {
        return 1 ; 
    } else {
        return factorial(n-1) * n ; 
    }
}
console.log(factorial(8)) ;