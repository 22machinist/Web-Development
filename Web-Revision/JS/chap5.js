function greaterthan(n) {
    return m => m > n ;
}

let greaterthan10 = greaterthan(10) ; 
console.log(greaterthan10(11)) ;

//Let's define the object which contains lot's of informations

let info = {
    name: "Coptic" , 
    ranges: [[994,1008] , [11392 , 11508] , [11513 , 11520]] , 
    direction: "ltr" , 
    year: -200 , 
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
} ; 

console.log(info.name) ; 
console.log(info.ranges) ; 
console.log(info.link) ; 

//Let's filter out the array
function filter(array , test) {
    let passed = [] ; 
    for (let element of array){
        if(test(element)) {
            passed.push(element) ;
        }
    }
    return passed;
}

//Now we will add the map function
//This function will map the things up
function map(array , transform) {
    //This function will map the array of different files 
    let mapped = [] ; 
    for (let element of array) {
        mapped.push(transform(element)) ; 
    }
    return mapped ;
}