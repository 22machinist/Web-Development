const SCRIPTS = [{
    name: "Coptic" , 
    ranges: [[994 , 1008] , [11392 , 11508] , [11513 , 11520]] ,
    direction: "ltr",
    year: -200 ,
    living: false ,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}];
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from , to]) => {
            return code >= from && code < to ;
        })) {
            return script ;
        }
    }
    return null ; 
}

console.log(characterScript(121)) ;