class Group {
    constructor() {
        this.members = [] ;
    }

    add(value) {
        if(!this.has(value)){
            this.members.push(value) ;
        }
    }

    delete(value) {
        let index = this.members.indexOf(value) ;
        if(index !== -1){
            this.members.splice(index , 1) ;
        }
    }

    [Symbol.iterator]() {
        let index = 0;
        let members = this.members ; 

        return {
            next(){
                if (index < members.length){
                    return {value: members[index++] , done: false};
                } else {
                    return {done : true} ;
                }
            }
        };
    }
    static from(iterable) {
        let group = new Group() ;
        for (let value of iterable){
            group.add(value) ;
        }
        return group ;
    }
}

//Example usage: 
let group = new Group() ; 
group.add(1);
group.add(2);
group.add(3);

for (let value of group){
    console.log(value) ;
}