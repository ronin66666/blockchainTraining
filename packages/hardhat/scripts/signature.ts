import { BigNumberish } from "ethers";
import { defaultAbiCoder, keccak256, recoverAddress, solidityPack, toUtf8Bytes } from "ethers/lib/utils";
import { ecsign } from "ethereumjs-util";

//函数签名
//代币名, 代币版本，链Id， 合约地址
const TYPE_HASH = keccak256(
    toUtf8Bytes("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)")
);

const PERMIT_TYPEHASH =
    keccak256(toUtf8Bytes("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"));

export const userPrivateKey: string = 'e09e39069782cbc06053bcf647dd2be8b328e6a60cf0416cdca7193cc1741bc9';
                               

export const sign = (digest: any, privateKey: any) => {
    return ecsign(Buffer.from(digest.slice(2), 'hex'), Buffer.from(privateKey, 'hex'))
}

// Returns the EIP712 hash which should be signed by the user
// in order to make a call to `permit`
export function getPermitDigest(
    name: string,
    address: string,
    chainId: number,
    approve: {
        owner: string
        spender: string
        value: BigNumberish
    },
    nonce: BigNumberish,
    deadline: BigNumberish
) {
    const DOMAIN_SEPARATOR = getDomainSeparator(name, address, chainId)
    
    const structHash = keccak256(
        defaultAbiCoder.encode(
            ['bytes32', 'address', 'address', 'uint256', 'uint256', 'uint256'],
            [PERMIT_TYPEHASH, approve.owner, approve.spender, approve.value, nonce, deadline]
        )
    );

    return keccak256(
        solidityPack(
            ['bytes1', 'bytes1', 'bytes32', 'bytes32'],
            [
                '0x19',
                '0x01',
                DOMAIN_SEPARATOR,
                structHash,
            ]
        )
    )
}

// Gets the EIP712 domain separator
export function getDomainSeparator(name: string, contractAddress: string, chainId: number) {
    return keccak256(
        defaultAbiCoder.encode(
            ['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'],
            [
                TYPE_HASH,
                keccak256(toUtf8Bytes(name)),
                keccak256(toUtf8Bytes('1')),
                chainId,
                contractAddress,
            ]
        )
    )
}

