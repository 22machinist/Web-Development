const contractAddress = 'CONTRACT_ADDRESS';
const abi = [/* CONTRACT_ABI */];
const web3 = new Web3(window.ethereum);

const contract = new web3.eth.Contract(abi, contractAddress);

async function registerVoter() {
    const voterAddress = document.getElementById('voterAddress').value;
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const from = accounts[0];
        const result = await contract.methods.registerVoter(voterAddress).send({ from });
        console.log(result);
        document.getElementById('output').innerHTML = `Voter ${voterAddress} registered successfully`;
    } catch (error) {
        console.error(error);
        document.getElementById('output').innerHTML = 'Error registering voter';
    }
}

async function castVote() {
    const candidate = web3.utils.utf8ToHex(document.getElementById('candidate').value);
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const from = accounts[0];
        const result = await contract.methods.castVote(candidate).send({ from });
        console.log(result);
        document.getElementById('output').innerHTML = `Vote cast for ${web3.utils.hexToUtf8(candidate)}`;
    } catch (error) {
        console.error(error);
        document.getElementById('output').innerHTML = 'Error casting vote';
    }
}
