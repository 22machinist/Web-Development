const prompt = require('./direction') //Calling function from different file
const accounts = {
    a: 100 , 
    b: 0 , 
    c: 20
} ; 

function getAccount(){
    let accountName = prompt("Enter the account name : ") ; 
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`) ;
    }
    return accountName ;
}

function transfer(from , amount){
    if (accounts[from] < amount) return ;
    accounts[from] -= amount ;
    accounts[getAccount()] += amount ;
}