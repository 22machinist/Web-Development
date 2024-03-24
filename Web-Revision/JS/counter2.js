//In this file we will create the input for string as well as character to be counted 

//we will define both the inputs

const readline = require('readline') ; 

//Now we will create the interface for prompt
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout 
}) ;

//Now we will prompt the question
r1.question("Input : " , (word) => {
    //Now we will ask user to choose the character which is needed to be counted 
    r1.question("Char : " , (char) => {
        //Now we will define the function 
        function countChar(word , char) {
            //Initializing the counter for uppercase characters
            let count = 0 ; 

            //Iterating through each character in the string
            for (let i = 0 ; i < word.length ; i++) {
                //Checking if the character matches the specified character or not
                if(word[i] == char) {
                    //Checking if the character is uppercase or not
                    if(word[i].toUpperCase() === word[i] && word[i] !== word[i].toLowerCase()){
                        count++ ; 
                    }
                }
            }

            //Returning the count to uppercase character
            return count ; 
        }
        console.log(countChar(word , char)) ;
        r1.close() ; 
    }) ;
}) ;