//In this file we will take input from the user and than we will count 
//The uppercase character and than in later function we will count the specified character


const readline = require('readline') ; 

//Now we will create interface for the prompt
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout 
}) ; 

//Now we will create the prompt 
r1.question("Input : " , (word) => {
    //Now we will define the function to count the uppercase character
    function countBs(word) {
        //We will split the string first
        const characters = word.split('') ; 

        //Now we will filter out the uppercase characters
        const upper = characters.filter(char => char === char.toUpperCase() && char !== char.toLowerCase()) ; 

        //Return the count of uppercase
        return upper.length ; 
    }
    r1.close() ;
    console.log(countBs(word)) ;
}) ; 