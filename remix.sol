pragma solidity ^0.4.17;

contract Project {
    
    // Request struct with all request's info
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint confirmationCount;
        mapping(address => bool) confirmation;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumAmount;
    mapping(address => bool) public voters;
    
    
    // Create a modifier to lock out senders that
    // are not the contract manager
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    
    // Define - as props - a minimum amount one must pay
    // in order to participate as a votingContributor
    function Project(uint minimum) public {
        // Define the manager as the one calling the contract
        manager = msg.sender;
        
        minimumAmount = minimum;
    }
    
    function contribute() payable public {
        // Requires a payment > minimumAmount
        require(msg.value > minimumAmount); 
        
        // Adds a new key to the voters mapping
        // and attributes its value to true. 
        voters[msg.sender] = true;
    }
    
    // Declare the Request struct and add fields to it
    // with the restricted modifier
    function addRequest(string description, uint value, address recipient) restricted public {
        
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false
        });
        
        // Add the request struct to the request array
        requests.push(newRequest);
    }
    
}