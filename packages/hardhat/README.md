

# 文件夹
deploy ： 部署脚本
scripts： 其他脚本: 如增发代币脚本

# 启动本地节点
yarn chain
```shell
W3 % yarn chain
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/
```
# deploy
yarn deploy --export-all ../react-app/src/contracts/hardhat_contracts.json

部署后通过脚本调用ERC20Token设置Vault合约地址为VAULT_ROLE角色后，用户才可提现


W3_1作业
* 发⾏⼀个 ERC20 Token： 
   * 可动态增发（起始发⾏量是 0） 
   * 通过 ethers.js. 调⽤合约进⾏转账
* 编写⼀个Vault 合约：
   * 编写deposite ⽅法，实现 ERC20 存⼊ Vault，并记录每个⽤户存款⾦额 ， ⽤从前端调⽤（Approve，transferFrom） 
   * 编写 withdraw ⽅法，提取⽤户⾃⼰的存款 （前端调⽤）
   * 前端显示⽤户存款⾦额