const { resolve } = require('path');

function prompts(promptMessage) {
    //Now we will check if we are running it in web browser or in Node.js
    if(typeof window !== 'undefined' && window.prompt){
        //In a web browser enviroment
        return window.prompt(promptMessage) ; 
    } else if (typeof require === 'function'){
        //In a Node.js Enviroment
        const readline = require('readline').createInterface({
            input: process.stdin , 
            output: process.stdout
        }) ; 

        return new Promise((resolve) => {
            readline.question(promptMessage , (input) => {
                readline.close() ; 
                resolve(input) ;
            }) ;
        }) ;
    } else {
        throw new Error("Unsupported enviroment: Unable to prompt user !!") ; 
    }
}

//Now whenever we have to call the prompt we will call prompts
//Let's test the code 
prompts("Name: ").then((username) => {
    console.log("Hello , " + username ) ;
}).catch((error) => {
    console.error(error) ;
}) ; 

