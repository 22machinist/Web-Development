//When "use strict" ; is implemented Javascript stops ignoring mistakes in the code
function canYouSpotTheProblem(){
    //"use strict" ; 
    for (counter = 0 ; counter < 10 ; counter++) {
        console.log("Happy Happy!!") ;
    }
}

canYouSpotTheProblem() ;

//Now let us see the example
function error(){
    //"use strict" ; 
    //In this code we used strict 
    for (i = 0 ; i < 10 ; i++) {
        console.log("I was implemented after placing let at the right place !") ;
    }
}

error() ;

"use strict" ; 
function identity(name2) {
    this.name2 = name2 ;
}

let ashutosh = identity("Ashutosh") ; //Forgot new 

console.log(name2);

//Now we will see the other example of same thing 
function Person(name) {this.name = name ;}
let ferdinand = Person("Ferdinand") ; 
console.log(name) ; 

//Now we will place the use strict method in same code
