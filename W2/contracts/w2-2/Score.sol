//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "./IScore.sol";
import "./TeacherRole.sol";

contract Score is IScore, TeacherRole {

    mapping(uint32 => uint8) private _studentScore;

    event AddStudentScore(uint32 indexed studentNo, uint8 score);
    event ChangeStudentScore(uint32 indexed studentNo, uint8 score);

    function addStudentScore(uint32 studentNo, uint8 score) external override onlyTeacher() {
        _studentScore[studentNo] = score;
        emit AddStudentScore(studentNo, score);
    }

    function changeStudentScore(uint32 studentNo, uint8 score) external override onlyTeacher() {
        _studentScore[studentNo] = score;
        emit ChangeStudentScore(studentNo, score);
    }

    function getStudentScore(uint32 studentNo) external view override returns(uint8) {
        return _studentScore[studentNo];
    }
}