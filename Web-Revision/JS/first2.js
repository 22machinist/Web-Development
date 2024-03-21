const readline = require('readline') ; 

//Now we will create interface for reading input
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout
}) ; 

//Creating function to calculate factorial 
function factorial(n) {
    if (n== 0) {
        return 1 ;
    } else {
        return factorial(n-1) * n ; 
    }
}

//Prompt the user for input 
r1.question('Enter the number here : ' , (input) => {
    //Convert the entered value into an integer
    let num = parseInt(input) ; 

    //Check if the entered value is a valid integer
    if (!isNaN(num)) {
        //Calculating the factorial
        let result = factorial(num) ; 
        console.log("Factorial is " + result) ; 
    } else {
        console.log("Invalid Input !") ; 
    }

    //Closing the read line interface
    r1.close() ; 
}) ;