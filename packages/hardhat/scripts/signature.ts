import { BigNumberish } from "ethers";
import { BytesLike, defaultAbiCoder, keccak256, recoverAddress, solidityPack, toUtf8Bytes } from "ethers/lib/utils";
import { ecsign, ECDSASignature, ecrecover } from "ethereumjs-util";
import { SignatureLike } from "@ethersproject/bytes";

//函数签名
//代币名, 代币版本，链Id， 合约地址
const TYPE_HASH = keccak256(
    toUtf8Bytes("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)")
);

const PERMIT_TYPEHASH =
    keccak256(toUtf8Bytes("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"));


//生成DOMAIN_SEPARATOR, 这里参考openzeppelin EIP712中实现的实现
//也可直接通过继承ERC2612然后调用合约方法DOMAIN_SEPARATOR获取
function buildDomainSeparator(
    name: string,
    chainId: number,
    contractAddress: string,
    typeHash: string = TYPE_HASH,
    version: string = "1"
): string {

    console.log("versionHash = ", version);

    const separator =  keccak256(defaultAbiCoder.encode(
        ['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'],
        [
            typeHash,
            keccak256(toUtf8Bytes(name)),
            keccak256(toUtf8Bytes(version)),
            chainId,
            contractAddress
        ]
    ))
    return separator
}

/**
 * 
 * @param name 
 * @param version 
 * @param chainId 
 * @param contractAddress 
 * @param nonce nonce需要跟合约上对应上
 * @param deadline 有效时间
 * @param approve 授权信息
 * approve: value: 授权金额
 */
export function getPermit(
    name: string,
    version: string,
    chainId: number,
    contractAddress: string,
    nonce: BigNumberish,
    deadline: BigNumberish,
    approve: {
        owner: string,
        spender: string,
        value: BigNumberish
    }
): string {

    const domainSeparator = buildDomainSeparator(name, chainId, contractAddress, TYPE_HASH, version);
    
    const structHash = keccak256(defaultAbiCoder.encode(
        ['bytes32', 'address', 'address', 'uint256', 'uint256', 'uint256'],
        [PERMIT_TYPEHASH, approve.owner, approve.spender, approve.value, nonce, deadline]
    ))

    return keccak256(solidityPack(
        ['bytes1', 'bytes1', 'bytes32', 'bytes32'],
        ['0x19', '0x01', domainSeparator, structHash]
    ))
}



const userPrivateKey = 'e09e39069782cbc06053bcf647dd2be8b328e6a60cf0416cdca7193cc1741bc9';

// 从[getPermit]中删除0x前缀后，使用ethereumjs-util中的ecsign
//私钥签名，一般用连接钱包签名
export function signatureFromPrivateKey(
    name: string,
    version: string,
    chainId: number,
    contractAddress: string,
    nonce: BigNumberish,
    deadline: BigNumberish,
    approve: {
        owner: string,
        spender: string,
        value: BigNumberish
    }
): ECDSASignature  {
    const permit = getPermit(name, version, chainId, contractAddress, nonce, deadline, approve);

    return ecsign(Buffer.from(permit.slice(2), 'hex'), Buffer.from(userPrivateKey, 'hex'));

} 

export function recover(
         digest: string, signature: ECDSASignature) {

   const  address =  ecrecover(Buffer.from(digest.slice(2), 'hex'), signature.v, signature.r, signature.s);
    
   return address
   
}