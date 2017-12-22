pragma solidity 0.4.18;

contract Simpleboard {
    struct Topic {
        address owner;
        string title;
    }
    struct Response {
        address owner;
        string str;
    }
    Response[] responses;
    
    function postRes(string str) external {
        if (responses.length > 100) return;

        Response memory temp;
        temp.owner = msg.sender;
        temp.str = str;
        
        responses.push(temp);
    }
    function getResponsesAmount() public constant returns(uint){
        return responses.length;
    }
    function getResponseOwner(uint8 resNum) public constant returns (address) {
        return responses[resNum].owner;
    }
    function getResponseStr(uint8 resNum) public constant returns (string) {
        return responses[resNum].str;
    }
}
