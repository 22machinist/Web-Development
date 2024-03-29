//In this file we will write the program to change in uppercase 

function test(label , body){
    if (!body()) {
        console.log(`Failed: ${label}`) ; 
    }
}

//Now let us test the code 
test("Convert Latin text to uppercase : ", () =>{
    return "hello".toUpperCase() == "HELLO" ; 
}) ; 

test("Convert Greek to uppercase : " , () => {
    return "xaipete".toUpperCase() == "XAIPETE" ;
}) ; 

console.log(test()) ;