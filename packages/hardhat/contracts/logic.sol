
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Logic {

    event Added(uint256 result);
    event Fallback();

    uint256 private newValue;

    function initial() external  {
        newValue = 10;
    }
    
    function add(uint256 a, uint256 b) external  {
        console.log("new Value = ", newValue);

        console.log("msg.sender = %s, tx.origin = %s", msg.sender, tx.origin);
        uint256 value  = a +b;
        newValue = value;
        emit Added(value);
    }

    function getValue() external view returns(uint256) {
        return newValue;
    }
    
    fallback() external {
        emit Fallback();
    }

}