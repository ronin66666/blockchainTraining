//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;
import "./uniswap/v2-periphery/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "hardhat/console.sol";

contract MyTokenMarket {

    IUniswapV2Router02 public router02;

    using SafeERC20 for IERC20;

    constructor(address router) {
        router02 = IUniswapV2Router02(router);
    }

    /**
      token: 代币地址
      amountTokenDesired： 添加数量
      to: 账户地址
     */
    function addLiquidity(
        address token,
        uint256 amountTokenDesired
    ) external payable returns (uint amountToken, uint amountETH, uint liquidity) {
        //先转到market合约
        IERC20(token).safeTransfer(address(this), amountTokenDesired);

        //market授权Router2
        IERC20(token).safeApprove(address(router02), amountTokenDesired);
        
       return router02.addLiquidityETH{value: msg.value} (token, amountTokenDesired, 0, 0, msg.sender, block.timestamp);
    }

}
