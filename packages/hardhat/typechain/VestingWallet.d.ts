/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface VestingWalletInterface extends ethers.utils.Interface {
  functions: {
    "beneficiary()": FunctionFragment;
    "duration()": FunctionFragment;
    "release(address)": FunctionFragment;
    "released()": FunctionFragment;
    "start()": FunctionFragment;
    "vestedAmount(uint64)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(functionFragment: "release", values: [string]): string;
  encodeFunctionData(functionFragment: "released", values?: undefined): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vestedAmount",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vestedAmount",
    data: BytesLike
  ): Result;

  events: {
    "ERC20Released(address,uint256)": EventFragment;
    "EtherReleased(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC20Released"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EtherReleased"): EventFragment;
}

export type ERC20ReleasedEvent = TypedEvent<
  [string, BigNumber] & { token: string; amount: BigNumber }
>;

export type EtherReleasedEvent = TypedEvent<
  [BigNumber] & { amount: BigNumber }
>;

export class VestingWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: VestingWalletInterface;

  functions: {
    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    "release(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "release()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "released()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    "released(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    start(overrides?: CallOverrides): Promise<[BigNumber]>;

    "vestedAmount(uint64)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "vestedAmount(address,uint64)"(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  beneficiary(overrides?: CallOverrides): Promise<string>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  "release(address)"(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "release()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "released()"(overrides?: CallOverrides): Promise<BigNumber>;

  "released(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  start(overrides?: CallOverrides): Promise<BigNumber>;

  "vestedAmount(uint64)"(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "vestedAmount(address,uint64)"(
    token: string,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    beneficiary(overrides?: CallOverrides): Promise<string>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    "release(address)"(token: string, overrides?: CallOverrides): Promise<void>;

    "release()"(overrides?: CallOverrides): Promise<void>;

    "released()"(overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    "vestedAmount(uint64)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vestedAmount(address,uint64)"(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "ERC20Released(address,uint256)"(
      token?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    ERC20Released(
      token?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { token: string; amount: BigNumber }
    >;

    "EtherReleased(uint256)"(
      amount?: null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;

    EtherReleased(
      amount?: null
    ): TypedEventFilter<[BigNumber], { amount: BigNumber }>;
  };

  estimateGas: {
    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    "release(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "release()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "released()"(overrides?: CallOverrides): Promise<BigNumber>;

    "released(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    start(overrides?: CallOverrides): Promise<BigNumber>;

    "vestedAmount(uint64)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vestedAmount(address,uint64)"(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "release(address)"(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "release()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "released()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "released(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    start(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vestedAmount(uint64)"(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vestedAmount(address,uint64)"(
      token: string,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
