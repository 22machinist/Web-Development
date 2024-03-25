//Ih this file we will add code to get the input from the user to fill an empty object

//Creating input
const { stdin, stdout } = require('process');
const readline = require('readline');

//Now we will create the interface to accept the input from the user 
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout
}) ;

//Now creating prompt for the user 
r1.question("Characteristics of Animal : " , (anim1) => {
    //Now we will create the prompt for name of the animal
    r1.question("Name : " , (name) => {
        //This will accept the name of the animal 
        //Now we will create the object 

        const animal = {
            "characteristic" : anim1 , 
            "Name" : name 
        }
        r1.close() ;
        console.log(animal);
    });
}) ;