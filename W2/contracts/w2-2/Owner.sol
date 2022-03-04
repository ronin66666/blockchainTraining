//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Owner {
    address private _owner;
    
    constructor() {
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "msg.sender permission denied");
        _;
    }
}