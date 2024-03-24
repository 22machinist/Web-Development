//In this file we will take the input from the user
//Just the upgraded version of last farm.js file

//Let us  try to upgrade the file 

const { parse } = require('path');
const readline = require('readline') ; 

//Creating the interface for user input 
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout
}) ;

//Now we will prompt the user 
r1.question("Number of Cows : " , (num1) => {
    //Now we will convert the input into number 
    num1 = parseInt(num1) ; 

    //Creating the second input 
    r1.question("Number of Chickens : " , (num2) => {
        //Now we will convert it 
        num2 = parseInt(num2) ; 

        //Now we will check if the inputs are valid or not 
        if (!isNaN(num1) && !isNaN(num2)) {
            function printFarmInventory(cows , chickens) {
                let CowString = String(cows) ; 
                while (CowString.length < 3){
                    CowString = "0" + CowString ;
                } 
                console.log(`${CowString} Cows`);
                let chickenString = String(chickens) ; 
                while (chickenString.length < 3) {
                    chickenString = "0" + chickenString ;
                }
                console.log(`${chickenString} Chickens`) ;
            }
            
            printFarmInventory(num1, num2) ;
        } else {
            console.log("Invalid Input !") ; 
        } ;
        r1.close() ;
    }) ;
}) ;