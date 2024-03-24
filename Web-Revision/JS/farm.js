function printFarmInventory(cows , chickens) {
    let CowString = String(cows) ; 
    while (CowString.length < 3){
        CowString = "0" + CowString ;
    } 
    console.log(`${CowString} Cows`);
    let chickenString = String(chickens) ; 
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString ;
    }
    console.log(`${chickenString} Chickens`) ;
}

printFarmInventory(7 , 11) ;