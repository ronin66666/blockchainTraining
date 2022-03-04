//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./TeacherRole.sol";
import "./IScore.sol";

contract Teacher is TeacherRole {

    IScore private _scoreContract;

    constructor(address scoreAddress) {
        _scoreContract = IScore(scoreAddress);
    }

    function addStudentScore(uint32 student, uint8 score) external  onlyTeacher() {
        _scoreContract.addStudentScore(student, score);
    }

    function changeStudentScore(uint32 student, uint8 score) external  onlyTeacher() {
        _scoreContract.changeStudentScore(student, score);
    }

}
