//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Counter {

    uint256 private count = 0;

    function getCount() public view returns (uint256) {
        return count;
    }

    function add(uint256 _count) public {
        count += _count;
        console.log("count change value = ", count);
    }


}