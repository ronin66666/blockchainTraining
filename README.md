---
typora-root-url: ../W3
---



# 文件夹
deploy ： 部署脚本
scripts： 其他脚本: 如增发代币脚本



创建react项目

```shell
yarn create react-app react-app --template typescript
```

### `yarn start`

 Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

# 启动本地节点

yarn chain
```shell
W3 % yarn chain
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/
```
# deploy
1. 部署合约，导出部署`json`文件到web项目中
   `yarn deploy --export-all ../react-app/src/contracts/deployment.json`

   ![deploy](/img/deploy.png) 

2. 调用`setVaultRole.ts`脚本设置`Vault`合约为`VaultRole`角色

   `yarn run-script scripts/setVaultRole.ts  `

   ![setVaultRole](/img/setVaultRole.png)







W3_1作业

* 发⾏⼀个 ERC20 Token： 
   * 可动态增发（起始发⾏量是 0） 
   * 通过 ethers.js. 调⽤合约进⾏转账
* 编写⼀个Vault 合约：
   * 编写deposite ⽅法，实现 ERC20 存⼊ Vault，并记录每个⽤户存款⾦额 ， ⽤从前端调⽤（Approve，transferFrom） 
   * 编写 withdraw ⽅法，提取⽤户⾃⼰的存款 （前端调⽤）
   * 前端显示⽤户存款⾦额