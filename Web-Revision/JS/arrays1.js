//In this file we will add the code to create a function for adding the events in object

let journal = [] ; //First we defined the empty object

//Now we will create a function to add the new entries in object
function addEntry(events , squirrel){
    journal.push({events , squirrel}) ;
}

//Now we will test the above function
addEntry(["worked" , "touched tree" , "pizza" , "running" , "television"] , false) ; 
console.log(journal);