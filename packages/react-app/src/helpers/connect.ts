// https://docs.metamask.io/guide/

import { JsonRpcSigner, Network, Web3Provider } from "@ethersproject/providers";

// interface ConnectInfo {
//     chainId: string;
//   }
  /**
   * 4001
        The request was rejected by the user
    -32602
        The parameters were invalid
    -32603
        Internal error
   */
//   interface ProviderRpcError extends Error {
//     message: string;
//     code: number;
//     data?: unknown;
//   }
//   ethereum.on('connect', handler: (connectInfo: ConnectInfo) => void);
// ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);

// ethereum.on('accountsChanged', handler: (accounts: Array<string>) => void);
// ethereum.on('chainChanged', handler: (chainId: string) => void);
  
// export function connect() {
    
// }

// export function isConnected(): boolean {
//     return window.ethereum.isConnected();
// }


// export function disconnect(handler: (error: any) => void) {

// }

// export async function accounts(): Promise<Array<any>> {
//     return window.ethereum.request({ method: 'eth_requestAccounts' });
// }



// //判断是否安装了小狐狸
// export function isInstallMetaMask(): boolean {
//     return typeof window.ethereum != 'undefined';
// }

// export function chainChanged(handler: (chainId: any) => void)

// export class ProviderModel {
//     account?: string;
//     currProvider?: any;
//     provider?: Web3Provider;
//     signer?: JsonRpcSigner;
//     network?: Network;
    
    // connect() {
        
    // };

    // accountChanged() {

    // }

// }

export class ProviderModel {
    account?: string;
    currProvider?: any;
    provider?: Web3Provider;
    signer?: JsonRpcSigner;
    network?: Network;
}

  
// //监听账户改变
export function accountChanged(handle: (accounts: Array<string>) => void) {
    window.ethereum.on('accountsChanged', handle);
};

export function removeAccountChangedListener(handle: (accounts: Array<string>) => void) {
    window.ethereum.removeListener('accountsChanged', handle);
}

//连接钱包
export async function connectWallet(): Promise<Array<string>> {

    // let providerModel: ProviderModel = new ProviderModel();

    if(typeof window.ethereum !== 'undefined') {
       return window.ethereum.request({ method: 'eth_requestAccounts' });
        // handleAccountsChanged(accounts);

        // providerModel.account = accounts[0];

        // providerModel.currProvider = window.ethereum;
        // providerModel.provider = new ethers.providers.Web3Provider(window.ethereum);
        // providerModel.signer = providerModel.provider.getSigner();
        // providerModel.network = await providerModel.provider.getNetwork();        
    }else {
        console.log('MetaMask is installed!');
    }
    return [];
}
