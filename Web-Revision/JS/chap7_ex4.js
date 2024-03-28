let obj = {
    hasOwnProperty: 'custom property'
} ;

console.log(Object.prototype.hasOwnProperty.call(obj , 'hasOwnProperty')) ; 