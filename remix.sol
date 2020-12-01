pragma solidity ^0.4.17;

contract Project {
    
    // Request struct with all request's info
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        
        
    }
    
    address public manager;
    address[] public voters;
    uint public minimumAmount;
    
    
    
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
        
        // Add the payer to the voters array
        voters.push(msg.sender);
    }
    
}