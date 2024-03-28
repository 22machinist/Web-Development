class Rabbit {
    constructor(type) {
        this.type = type ;
    }
    speak (line) {
        console.log(`${this.type} rabbit says '${line}'`) ; 
    }
}


let killerRabbit = new Rabbit("killer") ; 
let blackRabbit = new Rabbit("black") ; 

let object = new class {getWord() {return "hello" ;}} ;
console.log(object.getWord());

//Let us try something different
let ages = {
    Boris : 29 , 
    Liang : 22 , 
    Julia : 62
}; 

//Now let us manipulate the property of the above codes
console.log(`Julia's age is : ${ages["Julia"]}`);
console.log(`Liang's age is : ${ages["Liang"]}`);
console.log(`Boris's age is : ${ages["Boris"]}`);

//Now let us check true and false ability 
console.log("Jack's age is known ? ", "Jack" in ages);

//Now let us use the map property of the Language
let ages1 = new Map() ; //This property will set the ability to connect the strings
ages1.set("Pollard" , 45) ; //This will be added in ages1 
ages1.set("Gayle" , 46) ; 
ages1.set("Bravo" , 40) ; 

//Now let's get the output
console.log(ages1) ; 

//Now let us use the symbol property
let sym = Symbol("name") ;
console.log(sym == Symbol("name")) ; 

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]) ; 

//Let us use more 
const toStringSymbol = Symbol("toString") ; 
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn` ; 
}; 

console.log([1,2].toString()) ; 

console.log([1,2][toStringSymbol]()) ; 

//Let us add other strings
let stringObject = {
    [toStringSymbol]() {
        return "a jute rope" ;
    }
} ;

console.log(stringObject[toStringSymbol]()) ; 

//Now let us try iterators 
let okIterator = "OK"[Symbol.iterator]() ;

console.log(okIterator.next()) ; //This will give the value of character one by one 
console.log(okIterator.next()) ; 
console.log(okIterator.next()) ; //The value given by this is {value: undefined , done: true}