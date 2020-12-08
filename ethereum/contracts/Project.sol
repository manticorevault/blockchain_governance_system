pragma solidity ^0.4.17;

// >>>> Para: Fazenda Saco (Cliente final)

// Cujo gerenciamento analogico de projetos e de governanca estava causando 
// grandes problemas de organizacao e atrasando as tomadas criticas de decisao.

// O MGMTLinks visa trazer um modelo imutavel, digital e decentralizado de gerenciamento
// de projetos e governanca, fazendo com que todas as decisoes sejam votadas por todos os
// contribuintes relacionados a cada um dos projetos criados, de maneira anonima, digital
// e bem mais rapida. E, por ser uma aplicacao criada em cima do Blockchain do Ethereum,
// essas decisoes podem ser facilmente auditadas, alem de estarem sempre disponiveis.

// Write a Factory contract to create and deploy
// instances of the Project contract, so the costs
// are on the user. One contract to rule 'em all!

contract ProjectFactory {
    address[] public deployedProjects;
    
    // Allow the user to create a new instance of the Project contract
    function createProject(uint minimum) public {
        address newProject = new Project(minimum, msg.sender);
        
        // Push the address of the newly created project to
        // the array of deployed projects.
        deployedProjects.push(newProject);
    }
    
    function getDeployedProjects() view public returns (address[]) {
        return deployedProjects;
    }
}

// Here the Project contract starts: 
contract Project {
    
    // Request struct with all request's info
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint confirmationCount;
        mapping(address => bool) confirmations;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumAmount;
    mapping(address => bool) public voters;
    uint public votersCount;
    
    
    // Create a modifier to lock out senders that
    // are not the contract manager
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    
    // Define - as props - a minimum amount one must pay
    // in order to participate as a votingContributor
    function Project(uint minimum, address creator) public {
        // Define the manager as the one calling the contract
        manager = creator;
        
        minimumAmount = minimum;
    }
    
    function contribute() payable public {
        // Requires a payment > minimumAmount
        require(msg.value > minimumAmount); 
        
        // Adds a new key to the voters mapping
        // and attributes its value to true. 
        voters[msg.sender] = true;
        votersCount++;
    }
    
    // Declare the Request struct and add fields to it
    // with the restricted modifier
    function addRequest(string description, uint value, address recipient) restricted public {
        
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           confirmationCount: 0
        });
        
        // Add the request struct to the request array
        requests.push(newRequest);
    }
    
    // A function to manage our voting system
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        // Confirms that the address calling this function is a voter.
        require(voters[msg.sender]);
        
        // Confirms that the address calling this function didn't already vote.
        require(!request.confirmations[msg.sender]);
        
        // Mark the address as a confirmed vote
        request.confirmations[msg.sender] = true;
        
        // Add the address to the confirmations mapping
        request.confirmationCount++;
        
    }
    
    // Function to conclude a request 
    function completeRequest(uint index) restricted public {
        
        Request storage request = requests[index];
        
        // Confirms that the majority of voters approved a request
        require(request.confirmationCount > (votersCount / 2));
        
        // Confirms if the request isn't marked as Complete 
        require(!request.complete);
        
        // Confirms that money from the request is sent to the recipient
        request.recipient.transfer(request.value);
        
        // Update the bool flag to true
        request.complete = true;
    }

    // Function to retrieve important info about each project
    function getInfo() view public returns (
        uint, uint, uint, uint, address
        ) {
        return (
            minimumAmount,
            this.balance,
            requests.length,
            votersCount,
            manager
            
        );
    }
    
    // Function to return the requests count 
    function getRequestsCount() view public returns (uint) {
        return requests.length;
    }
    
}