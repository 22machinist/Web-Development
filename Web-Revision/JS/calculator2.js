//This JS file contains the function in which we can choose which operation will occur 
//This file will work according to the user 


//First we will define different keys required to perform various operations

console.log("For Addition = A/a \nFor Multiplication = M/m \nFor Subtraction = S/s \nFor Division = D/d \n ");

//Now we will define to take the input from user 
//Creating the prompt for user 

const readline = require('readline') ; 

//Creating the interface for the user 
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout
}) ;

//Now we will prompt the user to provide what operation he want to use 
r1.question("Define operation :" , (a) => {
    //Now we will define different operations selected
    if (a === 'A' || a === 'a' ) {
        console.log("Addition Operation selected ! ") ;

        //Prompt for first number 
        r1.question("Number 1 : " , (num1) => {
            //Now we will convert the entered number 
            num1 = parseInt(num1) ; 

            //Prompt for the second number 
            r1.question("Number 2 : " , (num2) => {
                //Now we will covert the second number 
                num2 = parseInt(num2) ; 

                //Now we will check that numbers are valid or not
                if(!isNaN(num1) && !isNaN(num2)) {
                    let sum = num1 + num2 ; 
                    console.log("Sum : " + sum) ; 
                } else {
                    console.log("Invalid Input !!") ;
                }
                r1.close() ;
            }) ;
        }) ;  
    } else if (a === 'S' || a === 's')  {
        console.log("Subtraction Operation selected ! ") ;

        //Prompt for first number 
        r1.question("Number 1 : " , (num1) => {
            //Now we will convert the entered number 
            num1 = parseInt(num1) ; 

            //Prompt for the second number 
            r1.question("Number 2 : " , (num2) => {
                //Now we will covert the second number 
                num2 = parseInt(num2) ; 

                //Now we will check that numbers are valid or not
                if(!isNaN(num1) && !isNaN(num2)) {
                    let sum = num1 - num2 ; 
                    console.log("Difference : " + sum) ; 
                } else {
                    console.log("Invalid Input !!") ;
                }
                r1.close() ;
            }) ;
        }) ;  
    } else if (a === 'M' || a === 'm')  {
        console.log("Multiplication Operation selected ! ") ;

        //Prompt for first number 
        r1.question("Number 1 : " , (num1) => {
            //Now we will convert the entered number 
            num1 = parseInt(num1) ; 

            //Prompt for the second number 
            r1.question("Number 2 : " , (num2) => {
                //Now we will covert the second number 
                num2 = parseInt(num2) ; 

                //Now we will check that numbers are valid or not
                if(!isNaN(num1) && !isNaN(num2)) {
                    let sum = num1 * num2 ; 
                    console.log("Product : " + sum) ; 
                } else {
                    console.log("Invalid Input !!") ;
                }
                r1.close() ;
            }) ;
        }) ;  
    } else if (a === 'D' || a === 'd')  {
        console.log("Addition Operation selected ! ") ;

        //Prompt for first number 
        r1.question("Number 1 : " , (num1) => {
            //Now we will convert the entered number 
            num1 = parseInt(num1) ; 

            //Prompt for the second number 
            r1.question("Number 2 : " , (num2) => {
                //Now we will covert the second number 
                num2 = parseInt(num2) ; 

                //Now we will check that numbers are valid or not
                if(!isNaN(num1) && !isNaN(num2)) {
                    if (num2 === 0) {
                        console.log("Error !!") ; 
                    } else {
                        let sum = num1 / num2 ; 
                        console.log("Quotient is : " + sum) ; 
                    }
                } else {
                    console.log("Invalid Input !!") ;
                }
                r1.close() ;
            }) ;
        }) ;  
    } else {
        console.log("Unkown Operstion selected !!") ; 
    } ; 
    r1.close() ;
}) ;