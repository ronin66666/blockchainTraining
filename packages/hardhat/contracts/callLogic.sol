// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract CallLogic {

   address proxy;
    
    constructor(address _proxy) {
        proxy = _proxy;
    }
    
    function add(uint256 x, uint256 y) external returns (uint256) {
        bytes memory payload = abi.encodeWithSignature("add(uint256,uint256)", x, y);
        (bool success, bytes memory returnData) = proxy.call(payload);

        require(success, "call to proxy failed");
        return abi.decode(returnData, (uint256));
    }
}