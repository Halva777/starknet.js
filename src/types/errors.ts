import { Errors } from 'starknet-types-07';

// NOTE: generated with scripts/generateRpcErrorMap.js
export type RPC_ERROR_SET = {
  FAILED_TO_RECEIVE_TXN: Errors.FAILED_TO_RECEIVE_TXN;
  NO_TRACE_AVAILABLE: Errors.NO_TRACE_AVAILABLE;
  CONTRACT_NOT_FOUND: Errors.CONTRACT_NOT_FOUND;
  BLOCK_NOT_FOUND: Errors.BLOCK_NOT_FOUND;
  INVALID_TXN_INDEX: Errors.INVALID_TXN_INDEX;
  CLASS_HASH_NOT_FOUND: Errors.CLASS_HASH_NOT_FOUND;
  TXN_HASH_NOT_FOUND: Errors.TXN_HASH_NOT_FOUND;
  PAGE_SIZE_TOO_BIG: Errors.PAGE_SIZE_TOO_BIG;
  NO_BLOCKS: Errors.NO_BLOCKS;
  INVALID_CONTINUATION_TOKEN: Errors.INVALID_CONTINUATION_TOKEN;
  TOO_MANY_KEYS_IN_FILTER: Errors.TOO_MANY_KEYS_IN_FILTER;
  CONTRACT_ERROR: Errors.CONTRACT_ERROR;
  TRANSACTION_EXECUTION_ERROR: Errors.TRANSACTION_EXECUTION_ERROR;
  CLASS_ALREADY_DECLARED: Errors.CLASS_ALREADY_DECLARED;
  INVALID_TRANSACTION_NONCE: Errors.INVALID_TRANSACTION_NONCE;
  INSUFFICIENT_MAX_FEE: Errors.INSUFFICIENT_MAX_FEE;
  INSUFFICIENT_ACCOUNT_BALANCE: Errors.INSUFFICIENT_ACCOUNT_BALANCE;
  VALIDATION_FAILURE: Errors.VALIDATION_FAILURE;
  COMPILATION_FAILED: Errors.COMPILATION_FAILED;
  CONTRACT_CLASS_SIZE_IS_TOO_LARGE: Errors.CONTRACT_CLASS_SIZE_IS_TOO_LARGE;
  NON_ACCOUNT: Errors.NON_ACCOUNT;
  DUPLICATE_TX: Errors.DUPLICATE_TX;
  COMPILED_CLASS_HASH_MISMATCH: Errors.COMPILED_CLASS_HASH_MISMATCH;
  UNSUPPORTED_TX_VERSION: Errors.UNSUPPORTED_TX_VERSION;
  UNSUPPORTED_CONTRACT_CLASS_VERSION: Errors.UNSUPPORTED_CONTRACT_CLASS_VERSION;
  UNEXPECTED_ERROR: Errors.UNEXPECTED_ERROR;
};

export type RPC_ERROR = RPC_ERROR_SET[keyof RPC_ERROR_SET];
