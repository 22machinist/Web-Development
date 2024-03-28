class Vec {
    constructor(x,y){
        this.x = x ; 
        this.y = y ;
    }

    plus(otherVec) {
        return new Vec(this.x + otherVec.x , this.y + otherVec.y) ; 
    }

    minus(otherVec) {
        return new Vec(this.x - otherVec.x , this.y - otherVec.y) ; 
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y) ;
    }
}

//Example Usage : 
let vec1 = new Vec(3,4) ; 
let vec2 = new Vec(1,2) ; 

//To get sum
let sumVec = vec1.plus(vec2) ;
console.log("Sum Vector: " , sumVec) ; //This will give the sum 

let diffVec = vec1.minus(vec2);
console.log("Difference Vector: " , diffVec) ; 

console.log("Length of Vec1: ", vec1.length) ;