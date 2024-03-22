if (false != true) {
    console.log("That makes sense !") ; 
    if (1 < 2) {
        console.log("No surprise !!");
    } ;
};

//Now let us make for loop
for (let number = 0 ; number <= 12 ; number = number + 2) {
    console.log(number) ;
}

//Now let us make another example of for loop 
let result = 1 ; 
for (let counter = 0 ; counter < 10 ; counter = counter + 1) {
    result = result * 2 ; 
    console.log(result);
}

console.log(result) ; 

//Now let us use break in for loop
for (let current = 20 ; ; current = current + 1){
    if (current % 7 == 0) {
        console.log(current) ; 
        break ; 
    } ;
} ; 

for (let number = 0 ; number <= 12 ; number += 2) {
    console.log(number) ; 
}