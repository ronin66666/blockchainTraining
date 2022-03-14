import { Input, Button } from "antd";
import { useEffect, useState } from "react";
import { ProviderModel } from "../helpers/connect";
import { balanceOf, depositeToken, getDepositeBalance, withdrawToken } from "../helpers/contract";


export function Transfer({model}: {model?: ProviderModel}) {

    const [balance, setBalance] = useState<string>();
    const [depositeBalance, setDepositeBalance] = useState<string>();

    let depositeAmount: string;
    let withdrawAmount: string;

    const depositeAmountChange = (event: any) => {
        depositeAmount = event.target.value;
    }

    const withdrawAmountChange = (event: any) => {
        withdrawAmount = event.target.value;
    }

    const withdraw = async () => {
        console.log("提取金额", withdrawAmount);

        if (Number(depositeBalance) < Number(withdrawAmount)) {
            console.log("超出提现金额");
            return
        }

        await withdrawToken(model!.signer!, withdrawAmount);
        
        //获取存款金额
        await getDepositeAmount();
    }

    const deposite = async () => {
        console.log("存款金额", );
        if (Number(balance) < Number(depositeAmount)) {
            console.log("超出金额");
            return
        }

        await depositeToken(model!.account!, model!.signer!, depositeAmount);
        
        //获取存款金额
        await getDepositeAmount();
    }

    const getBalance = async () => {
        setBalance(await balanceOf(model!.account!, model!.signer!));
    }

    const getDepositeAmount = async () => {
        setDepositeBalance(await getDepositeBalance(model!.account!, model!.signer!));
    }

    useEffect(() => {
        getBalance();
        getDepositeAmount();
    });

    return (
        <div>
            <p>余额： {balance}</p>
            <div>
                <Input placeholder='请输入存款金额：' type="number" onChange={depositeAmountChange}></Input>
                <Button type='primary' onClick={deposite}>存款</Button>
                <p>存款金额 = {depositeBalance}</p>
                <Input placeholder='请输入提取金额：' type="number" onChange={withdrawAmountChange}></Input>
                <Button type='primary' onClick={withdraw}>提取</Button>
            </div>

        </div>
    );
}