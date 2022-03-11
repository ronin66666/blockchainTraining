//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./IWWTokenERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Vault is ReentrancyGuard {
    event Withdraw(address indexed user, uint256 amount);
    event Deposite(address indexed user, uint256 amount);

    IWWTokenERC20 private token;

    mapping(address => uint256) private userDepositAmount;
    uint256 private totalAmount;

    constructor(address tokenAddress) {
        token = IWWTokenERC20(tokenAddress);
    }

    function deposite(uint256 amount) external nonReentrant()  {
        require(amount > 0, "deposite amount not zore");
        token.transferFrom(msg.sender, address(this), amount);
        userDepositAmount[msg.sender] += amount;
        totalAmount += amount;
        emit Deposite(msg.sender, amount);
    }
    
    function withdraw(uint256 amount) external nonReentrant() {
        require(token.balanceOf(msg.sender) >= amount, "not enough balance");
        userDepositAmount[msg.sender] -= amount;
        totalAmount -= amount;
        token.withdraw(msg.sender, amount);
    }

    function getOwnerDepositAmount(address account) external view returns (uint256) {
        require(account != address(0), "account not zero");
        return userDepositAmount[account];
    }

    function getTotalAmount() external view returns (uint256) {
        return totalAmount;
    }

}
