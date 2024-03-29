const { resolve, relative } = require('path');

function prompt(promptMessage){
    //Now we will check if we are running it in web browser or in Node.js
    if(typeof window !== 'undefined' && window.prompt){
        //In a web browser enviroment
        return window.prompt(promptMessage) ; 
    } else if (typeof require === 'function') {
        //In a node.js enviroment
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
    }  else {
        throw new Error('Unsupported enviroment: Unable to prompt user.') ;
    }
}

//Now let's test the code 

//Now we will add the function to check the prompt function
function promptDirection(question){
    let result = prompt(question) ; 
    if(result.toLowerCase() == "left"){
        return "L" ;
    }
    if (result.toLowerCase() == "right") {
        return "R" ; 
    }
    throw new Error("Invalid direction: " + result) ;
}

//Now we will add the another function
function look(){
    if (promptDirection("Which way ? ") == "L"){
        return "a house" ; 
    } else {
        return "two angry bears" ;
    }
}

try {
    console.log("You see" , look()) ;
} catch (error) {
    console.log("Something went wrong: " + error);
}
