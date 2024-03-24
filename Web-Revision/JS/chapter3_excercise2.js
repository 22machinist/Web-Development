function countBs(String){
    //Spliting the string
    const characters = String.split('') ;

    //Filtering out the uppercase characters
    const upper = characters.filter(char => char === char.toUpperCase() && char !== char.toLowerCase());

    //Return the count of uppercase 
    return upper.length ; 
}

//Testing the function
console.log(countBs("HeLlO")) ;

//Now let us create a function which will count only specified uppercase characters
function countChar(str , char) {
    //Initializing the counter for uppercase characters
    let count = 0 ; 

    //Iterating through each character in the string
    for (let i = 0 ; i < str.length ; i++) {
        //Checking if the character natches with the specified character
        if(str[i] === char) {
            //Checking if the character is uppercase or not
            if(str[i].toUpperCase() === str[i] && str[i] !== str[i].toLowerCase()){
                count++ ;
            }
        }
    }

    //Returning the count of uppercase character
    return count ;
}

//Testing
console.log(countChar("BbBbBbBb" , "b"));