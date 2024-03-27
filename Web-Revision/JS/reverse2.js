//In this file we will take input from user and than reverse it

//Let's code 

//Let's create prompt first

const readline = require('readline') ; 

//let's create the input method 
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout
}) ; 

//Let's create prompt
r1.question("Enter Array : " , (arr) => {
    //Now we will create a function to reverse arr
    
    //Let's create the function
    function reverse(arr) {
        const reversed = [] ; 
        for (let i = arr.length - 1 ; i >= 0 ; i--){
            reversed.push(arr[i]) ; 
        }
        return reversed ; 
    } 
    console.log(reverse(arr)) ;
    r1.close() ;
}) ;