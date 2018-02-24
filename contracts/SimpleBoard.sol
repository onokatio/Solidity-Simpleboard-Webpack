pragma solidity ^0.4.19;

contract SimpleBoard {
    // struct Topic {
    //    address owner;
    //    string title;
    // }
    struct Response {
        address owner;
        string str;
    }
		Response[] responses;
    
    function postRes(string poststr) payable external {
        // if (responses.length > 100) return;

        Response memory temp;
				temp.owner = msg.sender;
				temp.str = poststr;

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
