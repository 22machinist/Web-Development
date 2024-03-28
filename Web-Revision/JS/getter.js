let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100) ; 
    }
}

console.log(varyingSize.size) ;
console.log(varyingSize.size) ;

//Now let us add the class
class Temprature {
    constructor(celsius){
        this.celsius = celsius ;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32 ;
    }
    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8 ;
    }
    static fromFahrenheit(value) {
        return new Temprature((value - 32) / 1.8) ;
    }
}

let temp = new Temprature(22) ; 
console.log(temp.fahrenheit) ; 

temp.fahrenheit = 86 ; 
console.log(temp.celsius) ;