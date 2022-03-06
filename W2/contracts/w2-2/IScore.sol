//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IScore {

    function addStudentScore(uint32 studentNo, uint8 score) external;

    function changeStudentScore(uint32 studentNo, uint8 score) external;

    function getStudentScore(uint32 studentNo) external view returns(uint8);
}