//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IWWTokenERC20.sol";

//ERC20PresetMinterPauser ： 拥有者可暂停， 默认部署者 可增发，可销毁代币
contract WWTokenERC20 is  ERC20PresetMinterPauser, Ownable, IWWTokenERC20 {

    //只有VAULT_ROLE角色可以调用提现操作
    bytes32 public constant VAULT_ROLE = keccak256("VAULT_ROLE");

    constructor() ERC20PresetMinterPauser("WW Token", "WW")  {
        _mint(msg.sender, 0);
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    //只能具有 VAULT_ROLE 的角色 能调用该合约
    //需要合约部署者调用设置该角色
    function withdraw(address account, uint256 amount) external override onlyRole(VAULT_ROLE){
        _transfer(msg.sender, account, amount);
    }

    //设置VAULT_ROLE 角色
    function setValutRole(address valut) external onlyOwner() {
        require(valut != address(0), "valut role address not zero");
        grantRole(VAULT_ROLE, valut);
    }



}

