
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Logic {

    event Added(uint256 result);
    event Fallback();

    uint256 private newValue = 10;
    
    function add(uint256 a, uint256 b) external returns (uint256) {
        uint256 value  = a +b;
        newValue = value;
        emit Added(value);
        return value;
    }

    function getValue() external view returns(uint256) {
        return newValue;
    }
    
    fallback() external {
        emit Fallback();
    }

}