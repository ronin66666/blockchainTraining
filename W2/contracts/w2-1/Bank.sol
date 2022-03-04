
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Bank {

    //indexed: 表示对这个字段建立索引，方便外部对该字段过滤查找
    event WithdrawSuccess(address indexed  withdrawAddr, uint256 amount);
    
    mapping(address => uint256) private _ownerOfAmount;

    receive() external payable { //通过metamask 向该合约地址转账会走该方法
        require(msg.value > 0, "deposit amount must > 0");
        _ownerOfAmount[msg.sender] = msg.value;
    }

    //也可以通过调用deposit方法存入
    function deposit() external payable {
        require(msg.value > 0, "deposit amount must > 0");
        _ownerOfAmount[msg.sender] = msg.value;
    }

    function getTotalEther() external view returns (uint256){
        return address(this).balance;
    }

    function getOwnerDeposit(address owner) external view returns (uint256) {
        return _ownerOfAmount[owner];
    }

    function withdraw() external {
        require(address(this).balance > 0, "no balance can withdraw");

        //transfer 方法有 2300 gas限制
        // payable (msg.sender).transfer(address(this).balance); 

        //call方法没有gas限制
       (bool success, ) = msg.sender.call{value: address(this).balance }(""); 

       require(success, "withdraw fail");

       emit WithdrawSuccess(msg.sender, address(this).balance);

    }

    
}