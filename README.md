---
typora-root-url: ./
---

## 环境搭建

### 文件夹

deploy ： 部署脚本
scripts： 其他脚本: 如增发代币脚本

创建react项目

```shell
yarn create react-app react-app --template typescript
```

### `yarn start`

 Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

### 启动本地节点

yarn chain
```shell
W3 % yarn chain
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/
```
### deploy

1. 部署合约，导出部署`json`文件到web项目中
   `yarn deploy --export-all ../react-app/src/contracts/deployment.json`

   ![deploy](/img/deploy.png) 


## 开盲盒
###  `NFT`合约` Card721.sol`

1. 部署`nft`合约`card721`

2. 新建`nft`卡片种类及相关信息

   ```typescript
   async function newCards() {
     const cardContract = await ethers.getContract<Card721>("Card721");
     const cardS = new CardInfo("s", 1, 100, 1, 1000, ""); //s卡
     const cardSS = new CardInfo("ss", 2, 100, 2, 1000, ""); //ss卡
     const cardSSS = new CardInfo("sss", 3, 100, 3, 1000, "");//sss卡
   
     const cardlist  = [cardS, cardSS, cardSSS];
   
     for (let index = 0; index < cardlist.length; index++) {
       const card = cardlist[index];
       const result = await newCard(cardContract, card); //调用合约新建卡片
       console.log("name = ", card.name," result = ", result);
     }
   ```

### 盲盒合约

开盲盒需要用到随机数，这里使用的是`ChainLink`的`vrf`随机数**v1**版本

1. 部署`RandomGenerator`随机数合约，（v1部署相关配置：https://docs.chain.link/docs/vrf-contracts/v1/）

  部署成功后需要向该合约地址转入Likn币，BSC测试链`Link`代币领取地址 https://faucets.chain.link/chapel， 一次领取10个，没有限制次数，v1版本每次调用需要扣除0.1个Link币

2. 部署盲盒合约`HeroBoxV1`

   1. 部署成功后，进行初始化`initialize()`, 初始化NFT地址，和卡片种类和每种卡片的数量， 随机合约地址，当前交易NFT所使用的代币

3. 在NFT合约Card721种初始化盲盒地址` initialize(box.address)`, 在调用`setSuperMinter(address newSuperMinter_)`合约方法将`HeroBoxV1`合约设置为`SuperMinter`角色，在开盲盒成功后才能成功铸造NFT

4. 购买盲盒

   授权ERC20Token给`HeroBoxV1`合约，用于购买盲盒

    调用`mintMulti(uint amount)`购买N个盲盒，生成盲盒的`tokenId = (_tokenIdTracker.current())`

5. 开盲盒

   1. `open(uint tokenId) whenNotPaused onlyEOA external `该方法会调用随机函数生成随机数

   2. 回调`HeroBoxV1`的`runFulfillRandomness(uint256 tokenId_, address user_, uint256 randomness_)`方法

   3. 根据随机数选择`cardId`，铸造`nft`,交易给用户

   ```
   uint nftId = nftToken.mint(cardId);
   nftToken.safeTransferFrom(address(this), user, nftId);
   ```
