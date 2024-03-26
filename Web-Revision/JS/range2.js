//In this file we will add the concept of range 
//But this is going to be the complex file because we will gonna get the input from the user 


//Now we will first define the input method and prompt 

const { parse } = require('path');
const readline = require('readline') ;

//Now we will create the interface 
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) ; 

//Now we will create the prompt for the user 
r1.question("Starting : " , (num1) => {
    //Now converting the input into number 
    num1 = parseInt(num1) ; 
    //Above prompt is for the starting number 
    //Now i will prompt for the ending number of range
    r1.question("Ending : " , (num2) => {
        num2 = parseInt(num2) ; 

        //Now we will check for valid input 
        if (!isNaN(num1) && !isNaN(num2)) {
            //Now we will create the function for range 
            function range(num1 , num2) {
                //We will define the empty array
                let result = [] ; 
                for( let i = num1 ; i < num2 ; i++) {
                    result.push(i) ;  
                }
                return result ;
            }
            const resultRange = range(num1 , num2) ;
            console.log(resultRange) ;
        } else {
            console.log("Invalid Input !!");
        }
        r1.close() ;
    }) ;
}) ;