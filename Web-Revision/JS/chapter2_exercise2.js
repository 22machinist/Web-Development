for (let i = 0 ; i <= 100 ; i++ ){
    if ( i % 15 == 0 ){
        console.log("Fizzbuzz") ; 
    } else if ( i % 5 == 0){
        console.log("buzz") ;
    } else if ( i % 3 == 0 ){
        console.log("fizz") ;
    } else {
        console.log(i) ;
    }
}

//Now we have to create a loop which prints fizz for multiple of 3
