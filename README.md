---
typora-root-url: ./
---



## 文件夹
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
## deploy
1. 部署合约，导出部署`json`文件到web项目中
   `yarn deploy --tags greeter --export-all ../react-app/src/contracts/deployment.json`

   ![deploy](/img/deploy.png) 


## ERC2612, ERC721, ERC712, EIP1967合约代理, 

