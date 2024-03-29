//This program is build to perform a virtual task in a virtual world

const roads = [
    "Alice's House-Bob's House" , "Alice's House-Cabin" , 
    "Alice's House-Post Office" , "Bob's House-Town Hall" , 
    "Daria's House-Ernie's House" , "Daria's House-Town Hall" , 
    "Ernie's House-Grete's House" , "Grete's House-Farm" , 
    "Grete's House-Shop" , "Marketplace-Farm" , 
    "Marketplace-Post Office" , "Marketplace-Shop",
    "Marketplace-Town Hall" , "Shop-Town Hall"
] ;

//Now we will build the function which will convert the list of roads to a data structure 

function buildGraph(edges) {
    let graph = Object.create(null) ; 
    function addEdge(from , to) {
        if (graph[from] == null){
            graph[from] = [to] ;
        } else {
            graph[from].push(to) ; 
        }
    }
    for (let[from , to] of edges.map(r => r.split("-"))){
        addEdge(from , to) ;
        addEdge(to , from) ; 
    }
    return graph ;
}

const roadGraph = buildGraph(roads) ; 

//Let's define the class to hold the information of the parcels
class VillageState {
    constructor(place , parcels) {
        this.place = place ; 
        this.parcels = parcels ; 
    }

    //Now we will define movement 
    move(destination){
        if(!roadGraph[this.place].includes(destination)) {
            return this ; 
        } else {
            let parcels = this.parcels.map(p => {
                if(p.place != this.place) {
                    return p ;
                }
                return {
                    place : destination ,
                    address: p.address 
                } ;
            }).filter(p => p.place != p.address) ; 
            return new VillageState(destination , parcels) ;
        }
    }
}

//The move method is where the action happens
let first = new VillageState(
    "Post Office" , 
    [{place: "Post Office" , address: "Alice's House"}]
) ; 

let next = first.move("Alice's House") ; 

//Let's check the added code
/* 
    console.log(next.place) ; 
    console.log(next.parcels) ; 
    console.log(first.place) ;
*/ 

//Let us explore the property of Object.freeze({value})

/*

    let object = Object.freeze({value: 5}) ; 
    object.value = 10 

    console.log(object.value) ; 
*/

/* 
    A robot is a function that takes a VillageState object and returns the name of a nearby place .    
*/

//Let's create another function 

function runRobot(state , robot , memory) {
    for (let turn = 0 ;; turn++){
        if(state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`) ; 
            break ; 
        }
        let action = robot(state , memory) ; 
        state = state.move(action.direction) ;
        memory = action.memory ; 
        console.log(`Moved to ${action.direction}`) ; 
    }
}

//Let us create a function to pick randomly 
function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length) ; 
    return array[choice];
}

//Let us create the function for random movement
function randomRobot(state) {
    return {
        direction : randomPick(roadGraph[state.place])
    };
}

//Now we will add the static method which will create a new state with some parcels

VillageState.random = function (parcelCount = 5) {
    let parcels = [] ; 
    for (let i = 0 ; i < parcelCount ; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place; 
        do {
            place = randomPick(Object.keys(roadGraph)) ;
        } while (place == address);
        parcels.push({place , address});
    }
    return new VillageState("Post Office" , parcels) ;
} ;

//Now let's run the robot
runRobot(VillageState.random() , randomRobot);

//Now we will modify our code in the following way in which we find the route that passes through all the places
//Robot can go on that route only two times

const mailRoute = [
    "Alice's House " , "Cabin" , 
    "Alice's House" , "Bob's House" , "Town Hall" , 
    "Daria's House" , "Ernie's House" , "Grete's House" , 
    "Shop" , "Grete's House" , "Farm" , 
    "Marketplace" , "Post Office" 
] ; 

//Now we have to create the function through which robot remembers route in his memory
function routeRobot(state , memory) {
    if (memory.length == 0) {
        memory = mailRoute ; 
    }
    return {
        direction: memory[0] , 
        memory: memory.slice(1)
    } ;
}

/*
function routeRobot(state, memory) {
    if (!memory.route || memory.route.length == 0) {
        memory.route = mailRoute.slice(); // Make a copy of the mailRoute
    }

    if (memory.route.length == 0) {
        return { direction: "done", memory: memory }; // Signal that the route is completed
    }

    let direction = memory.route.shift(); // Take the next direction from the route
    return { direction: direction, memory: memory };
}
*/

//Now we will add a function to find path

function findRoute(graph , from , to){
    let work = [{at: from ,
        route: [] 
    }];
    for(let i = 0 ; i < work.length ; i++){
        let { at , route} = work[i] ; 
        for(let place of graph[at]){
            if(place == to) {
                return route.concat(place) ; 
            }
            if(!work.some(w => w.at == place)){
                work.push({at: place , 
                route: route.concat(place)});
            }
        }
    }
}

//Let add goal oriented function
function goalOrientedRobot({place , parcels} , route){
    if (route.length == 0){
        let parcel = parcels[0] ; 
        if(parcel.place != place) {
            route = findRoute(roadGraph , place , parcel.place) ;
        } else {
            route = findRoute(roadGraph , place , parcel.address);
        }
    }
    return {
        direction: route[0] , 
        memory: route.slice(1) 
    } ;
}