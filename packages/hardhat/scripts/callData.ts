import { defaultAbiCoder, ParamType } from "ethers/lib/utils";
import { ethers } from "hardhat";
 
export function callData(
    method: string, 
    types:  ReadonlyArray<string | ParamType>, 
    values: ReadonlyArray<any>): string {

    const methodId = ethers.utils.hexDataSlice(ethers.utils.id(method), 0, 4);
    let param = defaultAbiCoder.encode(types, values);
    param = param.substring(2, param.length);
    const data = methodId + param;
    console.log("call data = ", data);
    
    return data;
}