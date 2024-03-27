//In this file we Will add the function wchich will add the range from starting to end

//Let's code 
function range(a, b, step) {
    let result = []; // Define the result array outside the loop
    for (let i = a; i < b; i += step) {
        result.push(i);
    }
    return result;
}

//Now let us check the code 
console.log(range(1 , 10 , 1)) ;