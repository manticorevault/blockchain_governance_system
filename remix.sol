pragma solidity ^0.4.17;

contract Project {
    address public manager;
    uint public minimumAmount;
    
    // Define - as argument - a minimum amount one must pay
    // in order to participate as a contributor
    function Project(uint minimum) public {
        // Define the manager as the one calling the contract
        manager = msg.sender;
        
        minimumAmount = minimum;
    }
}