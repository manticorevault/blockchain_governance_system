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

// -------------------Tests--------------------

// Make sure both contracts were successfully deployed
describe("Projects", () => {
    it("Deploys a factory and a project", () => {
        assert.ok(factory.options.address);
        assert.ok(project.options.address);
    });

    // Check if the manager of the campaign is accounts[0]
    it("Checks caller as the campaign manager", async () => {
        const manager = await project.methods.manager().call();
        assert.strictEqual(accounts[0], manager);
    });

    // Check if it's possible to contribute to the project
    // and assign that account's address as a voter
    it("Allows people to contribute and assigns them as voters", async () => {
        await project.methods.contribute().send({
            value: "200",
            from: accounts[1]
        });

        const isAVoter = await project.methods.voters(accounts[1]).call();
        assert(isAVoter);
    });

    // Check if a project has a minimum amount attached to it
    it("Requires a minimum contribution", async () => {
        try {
            await project.methods.contribute().send({
                value: "50",
                from: accounts[1]
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    // Assures that the manager has the ability to add a request 
    it("Allows a manager to add a request", async () => {
        await project.methods
            .addRequest("Testing is okay!", "100", accounts[1])
            .send({
                from: accounts[0],
                gas: "1000000"
            });

        const request = await project.methods.requests(0).call();

        assert.strictEqual("Testing is okay!", request.description);
    });

    // End-to-end test
    it("Processes the request", async () => {
        await project.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei("10", "ether")
        });

        await project.methods
            .addRequest("Testing!", web3.utils.toWei("5", "ether"), accounts[1])
            .send({ from: accounts[0], gas: "1000000" });

        await project.methods.approveRequest(0).send({
            from: accounts[0],
            gas: "1000000"
        });

        await project.methods.completeRequest(0).send({
            from: accounts[0],
            gas: "1000000"
        });

        // Converts the total balance from wei to ether
        let totalBalance = await web3.eth.getBalance(accounts[1]);
        totalBalance = web3.utils.fromWei(totalBalance, "ether");

        totalBalance = parseFloat(totalBalance);
        console.log(totalBalance)
        // Compare the values to check if the money was transferred
        assert(totalBalance > 103);
    });
});

