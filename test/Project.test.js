const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const compiledFactory = require("../ethereum/build/ProjectFactory.json");
const compiledProject = require("../ethereum/build/Project.json");

let accounts;
let factory;
let project;
let projectAddress;

beforeEach(async () => {
    // Get the list of accounts
    accounts = await web3.eth.getAccounts();

    // Create an instance of the Factory Contract, passing in the ABI
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode }) // Deploy it
        .send({ from: accounts[0], gas: "1000000" }) // Send the transaction to the network

    await factory.methods.createProject("100").send({
        from: accounts[0],
        gas: "1000000"
    });

    // Assign the first element of the array from the deployed
    // projects to projectAddress
    [projectAddress] = await factory.methods.getDeployedProjects().call();

    // Assign an address to a deployed project
    project = await new web3.eth.Contract(
        JSON.parse(compiledProject.interface),
        projectAddress
    );
});

// Tests 

// Make sure both contracts were successfully deployed
describe("Projects", () => {
    it("deploys a factory and a project", () => {
        assert.ok(factory.options.address);
        assert.ok(project.options.address);
    })
})