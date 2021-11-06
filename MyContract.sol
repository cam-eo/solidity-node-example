// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract MyContract{
    string value;

    constructor() public{
        value='myValue';
    }

    function get() public view returns(string memory){
        return value;
    }

    function set(string _value) public{
        value= _value;
    }
}