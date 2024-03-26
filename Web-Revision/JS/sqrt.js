//In this file we will learn about computing correlation
function phi(table) {
    return (table[3] * table[0] - table[2] + table[1]) / Math.sqrt ((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2])) ; 
} ;

console.log(phi([76 , 9 , 4 , 1])) ;

//Now we will add the another form of part 

function tableFor(event , journal) {
    let table = [0 , 0 , 0 , 0] ;
    for (let i = 0 ; i < journal.length ; i++){
        let entry = journal[i] , index = 0 ; 
        if(entry.events.includes(event)) index += 1 ; 
        if (entry.squirrel) index += 2 ;
        table[index] += 1 ;
    }
    return table ; 
}

console.log(tableFor("pizza" , JOURNAL)) ;
