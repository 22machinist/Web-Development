function lastElement(array) {
    if (array.length == 0 ){
        return {
            failed: true 
        };
    } else {
        return {
            element: array[array.length - 1] 
        } ;
    }
}