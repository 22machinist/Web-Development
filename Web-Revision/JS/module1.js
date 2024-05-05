const weekDay = function () {
    const names = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return {
        name(number) {return names[number] ;},
        number(name) {return names.indexOf(name);}
    };
}() ;

//Now we will run the code that we created above
console.log(weekDay.name(weekDay.number("Sunday")));

//Now we will try to understand how we can use String as a code in javascript
const x = 1 ; //Declaring the constant
function evalAndReturnX(code) {
    eval(code);
    return x ;
}

//Now we will execute string first 
console.log(evalAndReturnX("var x = 2"));

//Now we will return the actual value of X
console.log(x);

//Now we will introduce a little bit different code
let plusOne = Function("n" , "return n + 1;");
console.log(plusOne(4));

//Now we will add the function called addTwo
let addTwo = Function("n" , "y" , "return n + y ;");
console.log(addTwo(3 , 4));

//Now let us try to understand NPM's require

const ordinal = require("ordinal");
const {days , months} = require("date-names");

//Let us export 
exports.formateDate = function(date , format) {
    return format.replace(/YYYY|M(MMM)?|Do?|dddd/g , tag => {
      if (tag == "YYYY") return date.getFullYear() ;
      if (tag == "M") return date.getMonth() ;
      if (tag == "MMMM") return months[date.getMonth()]  ;
      if (tag == "D") return date.getDate() ;
      if (tag == "Do") return ordinal(date.getDate());
      if (tag == "dddd") return days[date.getDay()];
    });
};

//This is showing an error we have to import the js file the
//Now we will enter lots of code 

const {formatDate} = require("./format-date");
console.log(formateDate(new Date(2017 , 9 , 19),"dddd to Do"));


require.cache = Object.create
