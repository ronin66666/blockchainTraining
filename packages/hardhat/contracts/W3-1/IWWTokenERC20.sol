//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IWWTokenERC20 is IERC20 {
    //提现
    function withdraw(address account, uint256 amount) external;

}