import web3 from "./web3";
import ProjectFactory from "./build/ProjectFactory.json";

// Create a contract instance and export it
const contractInstance = new web3.eth.Contract(
    JSON.parse(ProjectFactory.interface),
    "0xBEb6E73316927620057825650b384f3182e0c565" // Address where the contract was deployed
)

export default contractInstance;