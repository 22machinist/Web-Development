function promptNumber(question) {
    let result = Number(prompt(question));
    if (Number.isNaN(result)){
        return null ;
    } else {
        return result ;
    }
}

console.log(promptNumber("How many trees do you see ? ")) ;