//In this file we will first define an array than we will reverse it

//Let's code

function reverseArray(arr) {
    const reversedarray = [] ; 
    for (let i = arr.length - 1 ; i >= 0; i--) {
        reversedarray.push(arr[i]) ; 
    }
    return reversedarray ;
} 

//Let's run the function
const arr = [1 , 2, 3, 4 , 5, 6] ; 
const reverse = reverseArray(arr) ; 

console.log(reverse) ;