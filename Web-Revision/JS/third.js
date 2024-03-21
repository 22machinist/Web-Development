//Now let us add while loop 

let number = 0 ; 
while ( number < 14) {
    console.log(number) ; 
    number = number + 2 ; 
}; 


const readline = require('readline') ; 

//Now we will create the interface for reading input 
const r1 = readline.createInterface({
    input: process.stdin ,
    output: process.stdout 
}) ; 

//Now we will write the required code 
//We will test if-else statement

//Creating prompt for the user 
r1.question('Enter the number here : ' , (input) => {
    let num = parseInt(input) ; 

    //Adding the else-if statement
    if ( num < 10 ) {
        console.log(" Smaller ") ;
    } else if (num < 100) {
        console.log("medium") ; 
    } else {
        console.log("LArge") ;
    } ;
    r1.close() ;
}) ;

