//In this file we will create a program that will store the name and number of animals bred in farm

//Let's code bitch

//Let's create the input propmt

const readline = require('readline') ; 

//Now we will create the interface 
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout 
}) ; 

//Now we will create the prompt for name and number of each animal
r1.question("Animal 1 : " , (anim1) => {
    //Now we will create two more prompts
    r1.question("Animal 2 : " , (anim2) => {
        //Now we will create last time for third input
        r1.question("Animal 3 : " , (anim3) => {
            //Now we will create questions number of animals 
            r1.question("Number of " + anim1 + ": " , (num1) => {
                //Now we will convert the input 
                num1 = parseInt(num1) ;
                //Now we will do it two more times 
                r1.question("Number of " + anim2 + ": " , (num2) => {
                    //Now we will convert the input 
                    num2 = parseInt(num2) ;
                    //Now we will do it last time 
                    r1.question("Number of " + anim3 + ": " , (num3) => {
                        //Now we will convert the input 
                        num3 = parseInt(num3) ; 

                        //Now we will check if the numbers are valid or not 
                        if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
                            console.log(`${anim1} : ${num1}`);
                            console.log(`${anim2} : ${num2}`);
                            console.log(`${anim3} : ${num3}`);
                        } else {
                            console.log("Invalid Input !!") ; 
                        } ; 
                        r1.close() ;
                    }) ;
                }) ;
            }) ;
        }) ;
    }) ;
});