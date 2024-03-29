function transfer(from , amount) {
    if (accounts[from] < amount) return ;
    let progress = 0 ;
    try {
        accounts[from] -= amount;
        progress = 1 ;
        accounts[getAccount()] += amount;
        progress = 2 ;
    } finally {
        if (progress == 1){
            accounts[from] += amount ;
        }
    }
}