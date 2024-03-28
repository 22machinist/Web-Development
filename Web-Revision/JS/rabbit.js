let rabbit = {} ; 
function speak(line) {
    console.log(`The ${this.type} Rabbit says ${line}`) ; 
}
let whiteRabbit = {type: "white" , speak} ; 
let hungryRabbit = {type: "hungry" , speak} ;
//Let's test the code 
whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!") ; 
hungryRabbit.speak("I could use a carrot right now. ") ; 

//Now let's modify the code
speak.call(hungryRabbit , "Burp!") ;
