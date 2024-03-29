//First we will define  all the stuff tha twe need 

function generateTask() {
    let tasks = [] ;
    for (let i = 0 ; i < 100 ; i++) {
        //Generating tasks randomly , you can modify this according to your requirements
        tasks.push(Math.floor(Math.random() * 100) + 1) ; 
    }
    return tasks ; 
}

function solveTask(robot , task){
    //We will create function for a task 

    const roads = [
        "Alice's House-Bob's House" , "Alice's House-Cabin" , 
        "Alice's House-Post Office" , "Bob's House-Town Hall" , 
        "Daria's House-Ernie's House" , "Daria's House-Town Hall" , 
        "Ernie's House-Grete's House" , "Grete's House-Farm" , 
        "Grete's House-Shop" , "Marketplace-Farm" , 
        "Marketplace-Post Office" , "Marketplace-Shop",
        "Marketplace-Town Hall" , "Shop-Town Hall"
    ]

    //Now we will buil the function which will convert the list of roads to a data structure
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

    class VillageState {
        constructor(place , parcels) {
            this.place = place ; 
            this.parcels = parcels ; 
        }

        //Now we will define the movement
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

    let first = new VillageState(
        "Post Office" , 
        [{place: "Post Office" , address: "Alice's House"}]
    ) ; 

    let next = first.move("Alice's House") ; 

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

    function randomPick(array) {
        let choice = Math.floor(Math.random() * array.length) ; 
        return array[choice];
    }
    

    function randomRobot(state) {
        return {
            direction : randomPick(roadGraph[state.place])
        };
    }

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

    runRobot(VillageState.random() , randomRobot);

    const mailRoute = [
        "Alice's House " , "Cabin" , 
        "Alice's House" , "Bob's House" , "Town Hall" , 
        "Daria's House" , "Ernie's House" , "Grete's House" , 
        "Shop" , "Grete's House" , "Farm" , 
        "Marketplace" , "Post Office" 
    ] ; 

    function routeRobot(state , memory) {
        if (memory.length == 0) {
            memory = mailRoute ; 
        }
        return {
            direction: memory[0] , 
            memory: memory.slice(1)
        } ;
    }

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
    return Math,floor(Math.random() * 10) + 1 ; //Placeholder for the number of steps taken
}

//Now we will create function to compare robots 
function compareRobots(robot1 , robot2 , startingMemory) {
    let tasks = generateTask() ; 
    let totalStepsRobot1 = 0 ;
    let totalStepsRobot2 = 0 ;

    for (let task of tasks) {
        let robot1Memory = {...startingMemory} ; 
        let robot2Memory = {...startingMemory} ; 

        let stepsRobot1 = solveTask(robot1 , task) ; 
        let stepsRobot2 = solveTask(robot2 , task) ; 

        totalStepsRobot1 += stepsRobot1  ; 
        totalStepsRobot2 += stepsRobot2 ;

    }
    let avgStepsRobot1 = totalStepsRobot1 / tasks.length ; 
    let avgStepsRobot2 = totalStepsRobot2 / tasks.length ;
    
    return {avgStepsRobot1 , avgStepsRobot2} ;
}