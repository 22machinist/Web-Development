const arrays = [[1,2] , [3,4] , [5,6]] ; 

const flattenedArray = arrays.reduce((accumulator , currentArray) => {
    return accumulator.concat(currentArray) ; 
} , []) ; 

console.log(flattenedArray) ;