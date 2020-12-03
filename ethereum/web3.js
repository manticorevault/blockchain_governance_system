import Web3 from "web3";

// Access the web3 provider on the browser
let web3;

// Handle the case of the code being executed inside
// the browser, and MetaMask is available

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    // It's inside the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);

} else {
    // It's inside the server OR metamask isn't running
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/aeba19e82daa4e8783d9627729b2402e"
    );

    // Create an instance of Web3
    web3 = new Web3(provider);
}

export default web3;