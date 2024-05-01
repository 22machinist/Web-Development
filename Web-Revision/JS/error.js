class InputError extends Error {}

function promptDirection(question) {
    let result = prompt(question) ; 
    if (result.toLowerCase() == "left") return "L" ; 
    if (result.toLowerCase() == "right") return "R" ; 
    throw new InputError("Invalid direction: " + result) ; 
}

function firstElement(array) {
    if (array.length == 0){
        throw new Error("firstElement called with []") ; 
    } 
    return array[0] ;
}