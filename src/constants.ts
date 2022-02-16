import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// export const FACTORY_ADDRESS = '0xb7926c0430afb07aa7defde6da862ae0bde767bc'

// export const INIT_CODE_HASH = '0xecba335299a6693cb2ebc4782e74669b84290b6378ea3a3873c7231a8d7d1074'

// 0x12935a417c26a30b0fFC7fa3d9d075acB1437317  -- ninance test 01
// 0x68aa23589540dffeba33d95cdb0a9e9129646632cd18c332a43e3688c6893126 01

export const FACTORY_ADDRESS = '0x13d68E686b4db4d6aAFc9B4129433484E79E99F2'

export const INIT_CODE_HASH = '0x6080415155078c6cd12efb9ddae06b2e232cc51a9943efc2bd718c1d924671ab'
// export const FACTORY_ADDRESS = '0xAc78e3edfccA3b239BCEAb8F5805C0EC5E223585'

// export const INIT_CODE_HASH = '0xea6e57cd3911a626a540e0ba7da597dbec28808581dc33346714eb2b87d15109'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
