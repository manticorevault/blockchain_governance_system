import web3 from "./web3";
import ProjectFactory from "./build/ProjectFactory.json";

// Create a contract instance and export it
const contractInstance = new web3.eth.Contract(
    JSON.parse(ProjectFactory.interface),
    "0x12B30014784623Be3ea4EE643c8990b6dd9C69E1" // Address where the contract was deployed
)

export default contractInstance;