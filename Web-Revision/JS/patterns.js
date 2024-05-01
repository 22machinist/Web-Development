//In this file we will define some patterns to find things

//Let's code 
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
//The above code will check not only the numbers but followed by the words provided later 

//Let's test the above code 
console.log(animalCount.test("15 pigs"));
//This will return true 
console.log(animalCount.test("25 elephants"));
//This will return false 

//Now we will practice more above codes
let weapons = /\b\d+ (tank|gun|artillery|fighter|warship)s?\b/;

//Let's test the above code
console.log(weapons.test("25 tanks"));
