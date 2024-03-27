//In this file we will add the correspondence to add the input from the user 

//Let us create the input method 
const readline = require('readline') ; 
const { Script } = require('vm');

//Creating the interface for the input
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout
}) ; 

//Now creating the prompt for the user 
r1.question("Array: " , (arr) => {
    //Now we will add the combine input 
    r1.question("combine : " , (com) => {
        //Now we will add the start method
        r1.question("Start : " , (star) => {
            //Now we will define the function 
            function reduce(array , combine , start){
                let current = start ; 
                for (let element of array) {
                    current = combine(current , element) ; 
                }
                return current ; 
            }
            console.log(reduce(arr , com , star)) ; 
            r1.close() ; 
        }) ;
    }) ;
}) ;