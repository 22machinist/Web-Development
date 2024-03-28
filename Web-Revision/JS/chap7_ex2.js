class Group {
    constructor() {
        this.members = [] ;
    }

    add (value){
        if(!this.has(value)){
            this.members.push(value);
        }
    }

    delete(value){
        let index = this.members.indexOf(value);
        if(index !== -1){
            this.members.splice(index ,1);
        }
    }

    has(value) {
        return this.members.includes(value) ;
    }

    static from(iterable){
        let group = new Group() ; 
        for (let value of iterable){
            group.add(value) ;
        }
        return group ;
    } 
}

//Example usage : 
let group = new Group() ; 
group.add(1);
group.add(2);
group.add(3);

console.log(group.has(2)); //Output: true 
console.log(group.has(4)); //Output: false

group.delete(2);
console.log(group.has(2)) ; //Output: false

let iterable = [4,5,6] ; 
let newGroup = Group.from(iterable) ;

console.log(newGroup.has(5)) ; //Output: true 
console.log(newGroup.has(7)) ; //Output: false 