//In this file we will use recursion in innovative manner
//Getting input from user 

const readline = require('readline') ;

//Creating the interface for the user
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout
}) ;

//Now we will prompt the user 
r1.question("Number : " , (num1) => {
    //Now we will convert it into number
    num1 = parseInt(num1) ; 
    
    //Now we will check the number entered is  a valid integer or not
    if(!isNaN(num1)){
        function findSolution(target) {
            function find(current , history) {
                if (current == target) {
                    return history ;
                } else if (current > target) {
                    return null ; 
                } else {
                    return find(current + 5 , `(${history} + 5)`) || 
                    find(current * 3 , `(${history} * 3)`) ;
                }
            }
            return find(1 , "1") ; 
        }
        console.log(findSolution(num1));
    } else {
        console.log("invalid input") ;
    }
    r1.close();
})