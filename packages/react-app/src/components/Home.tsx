
import { Button, Input } from 'antd';
import "./Home.css";
import { accountChanged, connectWallet, ProviderModel, removeAccountChangedListener } from '../helpers/connect';
import { useEffect, useState } from 'react';
import { Transfer } from './Transfer';

import { ethers } from 'ethers';



function Home() {

    const [providerModel, setProviderModel] = useState<ProviderModel>();

    
    async function test1(): Promise<Array<string>> {
        return new Promise((resolve, reject) => {
            resolve(["aaaa", "bbbb"])
        });
    }
    
    const connectHandle = () => {
        console.log("连接钱包");
        connectWallet()
        .then((accounts) => {
            console.log("accounts = ", accounts);
            
            handleAccountsChanged(accounts);
        })
        .catch(error => console.log(error));
    }

    function handleAccountsChanged(accounts: Array<string>) {
        console.log("handleAccountsChanged accounts = ", accounts);
        const model = new ProviderModel();
        model.account = accounts[0];

        model.currProvider = window.ethereum;
        model.provider = new ethers.providers.Web3Provider(window.ethereum);
        model.signer = model.provider.getSigner();

        setProviderModel(model); 
     }

    //  const getNetwork = async () => {
    //     const network = await providerModel?.provider?.getNetwork();  
    //     console.log(network);
        
    //  } 

    useEffect(() => {

        accountChanged(handleAccountsChanged);

        return () => {
            removeAccountChangedListener(handleAccountsChanged);
        }
    });

    return (
        <div className='content'>
           <div>
           <Button type="primary" onClick={connectHandle} >{
                    typeof providerModel == 'undefined' ? "连接钱包" : providerModel.account
                }
                </Button>
           </div>
           
           <Transfer model={providerModel}/>
        </div>
    );
}

export default Home;