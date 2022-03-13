//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract LCTokenERC721 is ERC721PresetMinterPauserAutoId {
    constructor() ERC721PresetMinterPauserAutoId("LC NFT", "LC", "") {}
    uint256 private _count;

    event MintToken(address indexed to, uint256 indexed tokenId);

    function mint(address to) public override {
        require(
            hasRole(MINTER_ROLE, _msgSender()),
            "ERC721PresetMinterPauserTokenId: must have minter role to mint"
        );
        uint256 tokenId = uint256(keccak256(abi.encode(_count)));
        _count += 1;
        _mint(to, tokenId);
        emit MintToken(to, tokenId);
    }
}
