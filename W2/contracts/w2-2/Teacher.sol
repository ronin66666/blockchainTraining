//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./TeacherRole.sol";
import "./IScore.sol";

contract Teacher is TeacherRole {
    IScore private _scoreContract;

    constructor(address scoreAddress) {
        _scoreContract = IScore(scoreAddress);
    }

    modifier scoreVerify(uint8 score) {
        require(score >= 0 && score <= 100, "score illegal");
        _;
    }

    function addStudentScore(uint32 student, uint8 score) external onlyTeacher() scoreVerify(score) {
        _scoreContract.addStudentScore(student, score);
    }

    function changeStudentScore(uint32 student, uint8 score)
        external
        onlyTeacher() scoreVerify(score)
    {
        _scoreContract.changeStudentScore(student, score);
    }
}
