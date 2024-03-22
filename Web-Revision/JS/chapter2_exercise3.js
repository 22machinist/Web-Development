let gridsize = 8 ;
let grid = '' ;

//Outer loop for rows 
for (let row = 0 ; row < gridsize ; row++){
    //Inner loop for columns
    for (let col = 0 ; col < gridsize ; col++) {
        //Check if the sum of row and column indexes is even
        if ((row + col) % 2 === 0) {
            //Append a space for even-indexed cells
            grid += ' ' ;
        } else {
            //Append a hash symbol for odd-indexed cells
            grid += '#' ; 
        }
    }
    // Add a newline character after each row
    grid += '\n' ; 
}

//Output the grid 
console.log(grid) ;