pragma solidity 0.4.18;

contract SimpleBoard {
    struct Topic {
        address owner;
        string title;
    }
    struct Response {
        address owner;
        string str;
    }
    address[100] owner;
    string[100] str;
    
    function postRes(string str) external {
        if (responses.length > 100) return;

        Response memory temp;
        temp.owner = msg.sender;
        temp.str = str;
        
        //responses.push(temp);
        responses[responses.length] = temp;
    }
    function getResponsesAmount() public constant returns(uint){
        return responses.length;
    }
    function getAllResponses() public constant returns(Response[100]){
        return responses;
    }
    function getResponseOwner(uint8 resNum) public constant returns (address) {
        return responses[resNum].owner;
    }
    function getResponseStr(uint8 resNum) public constant returns (string) {
        return responses[resNum].str;
    }
}
