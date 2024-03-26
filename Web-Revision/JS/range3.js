//In this file we will create range finder with method of steps

//Let's code 
const readline = require('readline') ; 
const { start } = require('repl');

//Now we will create interface 
const r1 = readline.createInterface({
    input: process.stdin , 
    output: process.stdout
}) ; 

//Now we will create the prompt
r1.question("Start : " , (start) => {
    //Now we will convert the number 
    start = parseInt(start) ; 

    //Now we will create prompt for the end 
    r1.question("End : " , (end) => {
        //Now let's convert it
        end = parseInt(end) ; 

        //Now we will create the prompt for steps 
        r1.question("Steps: " , (steps) => {
            //Converting it
            steps = parseInt(steps) ; 

            //Now we add the function
            function range(start , end , step) {
                let result = [] ; 
                for (let i = start ; i < end ; i+= steps){
                    result.push(i) ; 
                }
                return result ; 
            }
            const resultrang = range(start , end , steps) ; 
            console.log(resultrang) ;
            r1.close(); 
        }) ;
    })
})