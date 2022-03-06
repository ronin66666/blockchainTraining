//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./Owner.sol";

contract TeacherRole is Owner{

    //创建老师角色
    address constant private TEACHER_ROLE  = address(bytes20(keccak256(abi.encodePacked("teacher"))));

    //储存老师角色
    mapping(address => address) internal roles;

    modifier onlyTeacher() {
        require(roles[msg.sender] == TEACHER_ROLE, "not teacher role");
        _;
    }

    //如果直接调用Socre的方法，必须先设置用户地址为老师权限，通过Teacher合约调用，则将先将老师管理权限设置为Teacher合约，再将用户地址设置为老师权限
    function addTeacherRole(address teacher) external onlyOwner() {
        require(teacher != address(0), "teacher address not address(0)");
        roles[teacher] = TEACHER_ROLE;
    }
}