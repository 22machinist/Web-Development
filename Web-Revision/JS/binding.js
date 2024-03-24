//In this file we will explore difference between global and local bindings

//In this file we will define all type of functions of both global as well as local bindings

const hummus = function(factor){
    const ingredient =  function(amount , unit , name) {
        let ingredientAmount = amount * factor ; 
        if (ingredientAmount > 1) {
            unit += "s" ; 
        }
        console.log('${ingredientAmount} ${unit} ${name}') ; 
    } ;
    ingredient(1 , "can" , "chickpeas");
    ingredient( 0.25, "cup" , "tahini");
    ingredient( 0.25, "cup" , "lemonjuice");
    ingredient( 1, "clove" , "garlic");
    ingredient( 2 , "tablespoon" , "olive oil");
    ingredient( 0.5, "teaspoon" , "cumin");
};

console.log(hummus()) ; 
let launchmissiles = function() {
    missileSystem.launch("now") ;
}; 
if (safeMode) {
    launchmissiles = function() {
        /* Do anything you want */
    }
}
