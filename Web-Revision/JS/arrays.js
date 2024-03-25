//We will create arrays

let listofNumbers = [1 , 2 , 3 , 4 , 5] ; 

console.log(listofNumbers[2]) ;
console.log(listofNumbers[0]) ;

//Now we will add a property in the object

//Defining the object
let day1 = {
    squirrel : false , 
    events: ["work" , "trees" , "pizza"]
}

//getting output
console.log(day1) ;
//Now we will gwt the output of particular property
console.log(day1.squirrel) ;

//Adding the new propety in the object using array
day1.wolf = false ; 
console.log(day1) ;

//We can call outh the properties by using string method
let anObject = {
    left : 1 , 
    right : 2 
}

console.log("left" in anObject) ;  //This will check the property lies in the object or not

delete anObject.left ; //This will delete the property of the object

let object = {
    x : 0 ,
    y : 0 ,
    z : 2 
}

console.log(Object.keys(object)) ;

//Now we will use Object.assign property

let objectA = {
    a : 1 ,
    b : 2
} ;

Object.assign(objectA , {b : 3 , c : 4}) ;
console.log(objectA);

//Now we will us [] notation

let journal = [
    {events : ["Work" , "touched tree" , "pizza" , "running" , "television"] , 
squirrel : false} ,
{events : ["work" , "ice cream" , "cauliflower" , "lasagna" , "touched tree" , "brushed tree"] , 
squirrel: false},
{events: ["weekend" , "cycling" , "break" , "peanuts" , "beer"] , 
squirrel: true}
] ;

console.log(journal) ;

