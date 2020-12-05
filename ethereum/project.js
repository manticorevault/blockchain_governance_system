import web3 from "./web3";
import Project from "./build/Project.json";

// Access the Project contract ABI and retrieve the address, 
// to translate it to the URL, retrieving information from it
export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(Project.interface),
        address
    );
};