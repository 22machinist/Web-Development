function countBy(items , groupName) {
    let counts = [] ; 
    for (let item of items) {
        let name = groupName(item) ; 
        let known = counts.findIndex(c => c.name == name) ; 
        if (known == -1){
            counts.push({name , count: 1}) ;
        } else {
            counts[known].count++ ;
        }
    } 
    return counts ;
}

console.log((countBy[1,2,3,4,5] , n => n > 2)) ;

//Now we will add another function
function textScripts(text) {
    let script = countBy(text , char => {
        let script = characterScript(char.codePointAt(0)) ;
        return script ? script.name : "none" ; 
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n , {count}) => n + count , 0) ; 
    if(total == 0 ) return "No Script Found" ; 

    return scripts.map(({name , count}) => {
        return `${Math.round(count * 100 / total)} % ${name}` ;
    }).join(",") ;
}

//Concole code 
console.log(textScripts("woof"));