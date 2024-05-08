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
//Now we will add some more codes regarding the above command
console.log(weapons.test("35 artillery"));
//The abive will give true
console.log(weapons.test("45 fighters"));
//The above will be true
console.log(weapons.test("75 submarines"));
//The above will be false

//Now let us try more stuff to understand the above code 
let forces = /\b\d+ (Russian|American|French|British) forces?\b/;

//Now let us test the above code it was slightly different
//Now let us try the above code with different results
console.log(forces.test("7500 Russians"));
console.log(forces.test("7510 Americans"));
console.log(forces.test("3546 Frenchs"));
console.log(forces.test("1200 British Forces"));
console.log(forces.test("234 Russian forces"));
//Let us try something new with the above code 
//Let us try something different with the above code
let cars = /\b\d+ (Mercedes|BMW|Macleran|Porsche)s?\b/;

//Let's try the code 
console.log(cars.test("123 Mercedess"));
console.log(cars.test("1244 BMWs"));
console.log(cars.test("12 Maclerans"));
//Let's change the code
console.log(cars.test("145 Porsches"));
//Now we will try the different code 
//Now we will try it with const variable
const  vasr = /\b\d+ (American|Muscle)s?\b/;

//Let us add other codes in it

//Let us right the code that no one had ever written on it 
//Let us code indiscriminantely
//In this code we will manipulate the basic writting of everything
//Let us code a little hard and tough in this process we will brew some hard facts 
//In this file we will code a bit differently 
//We will go for it indistcimently
//Let us code with the indiscremenently inside the venue of  
//Let us take the offensive aspect first let us be we what we are




