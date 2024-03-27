//In this file we will add the reduce function
//This file basically contains all the functions tha twill call out the function
//That have the reduce property

/*
    Description : 
    This file holds the code to carry out the precsion to cooperate by diminishing the array size 
    By adding the integers 
*/

function reduce(array , combine , start) {
    let current = start ; 
    for (let element of array) {
        current = combine(current , element) ;
    }
    return current ; 
}

console.log(reduce([1,2,3,4] , (a,b) => a + b , 0)) ;