const solc = require("solc");
const path = require("path");
const fs = require("fs-extra");

// Delete the build folder if it exists
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// Read the Project.sol from contracts folder
const projectPath = path.resolve(__dirname, "contracts", "Project.sol");
const source = fs.readFileSync(projectPath, "utf8");

// Compile both contracts from the Project.sol
const output = solc.compile(source, 1).contracts;

// Checks if the build folder exists, otherwise create it
fs.ensureDirSync(buildPath);

// Creates the JSON related to the contract
for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract + ".json"),
        output[contract]
    );
}