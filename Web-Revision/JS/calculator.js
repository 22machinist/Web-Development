//We will code this fill in this way that it can be  able to solve binary multipliaction , addition , subtraction and division operations

//Let's code it bitch 

//First we will define the function for every operation

//Function for addition
function add(x,y) {
    //It will take two inputs from user 
    var z = x + y ; 
    console.log("Sum is " + z) ;
}

//Function for subtraction 
function sub(x,y) {
    var a = x - y ; 
    console.log("Difference is " + a) ;
}

//Function for multiplication
function multi(x , y) {
    var b = x * y ;
    console.log("Product is " + b) ; 
}

//Function for Division
function div(x , y) {
    var c = x / y ; 
    console.log("Division is " + c) ;
}

//Now we will add readers that will read the input provided by the user 
const readline = require('readline') ; 

//Now we will create interface to read the input 
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout
}) ; 


//Now we will prompt the user for input of numbers
let a = r1.question('Enter the first Number: ' , (input1) => {
    //Coverting the input into number
    let num1 = parseInt(input1) ;
    
    //Prompt for the second question for user
    let b = r1.question("Enter the Second Number : " , (input2) => {
        //Converting the number into integer 
        let num2 = parseInt(input2) ; 
        //Adding condition to check that both the numbers are integers or not?
        if (!isNaN(num1) && !isNaN(num2)) {
            console.log(add(num1 , num2)) ; 
            console.log(sub(num1 , num2)) ; 
            console.log(multi(num1 , num2)) ; 
            console.log(div(num1 , num2)) ;
        } else {
            console.log("INvalid Entries !!") ; 
        } ; 
        //Closing the readline interface
        r1.close() ;
    }) ; 
}) ; 
