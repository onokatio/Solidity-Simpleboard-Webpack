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
    // address[100] owner;
    // string[100] str;
		Response[] responses;
    
    function postRes(string poststr) payable external {
        if (responses.length > 100) return;

        Response memory temp;
				temp.owner = msg.sender;
				temp.str = poststr;

        // owner[owner.length] = msg.sender;
        // str[str.length] = poststr;
        
        responses.push(temp);
        // responses[responses.length] = temp;
    }
    function getResponsesAmount() public constant returns(uint){
        return responses.length;
    }
		/*
    function getResnum() public constant returns(uint){
        return owner.length;
    }
    function getAllOwner() public constant returns(address[100]){
        return owner;
    }
    function getAllStr() public constant returns(string[100]){
        return str;
    }
		*/
    function getResponseOwner(uint8 resNum) public constant returns (address) {
        return responses[resNum].owner;
    }
    function getResponseStr(uint8 resNum) public constant returns (string) {
        return responses[resNum].str;
    }
}
