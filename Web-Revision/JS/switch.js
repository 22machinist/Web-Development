const readline = require('readline') ; 
//Now we will create an interface for user input

const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout
});

//Now we will create prompt for the user 
let a = r1.question('What is the weather like ? ' , (input) => {
    switch (input) {
        case "rainy" : 
        console.log("Remeber to bring an umbrella .") ; 
        break ; 
        case "sunny" :
            console.log("Dress lightly.");
        case "cloudy" : 
            console.log("Go outside. ");
        break ; 
        default : 
            console.log("Unkown weather type!") ;
        break ;  
    }
    r1.close() ; 
}) ; 