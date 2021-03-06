/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number };
type MaybeErrorWithCode = ErrorWithCode | null | undefined;

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map();
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map();

/**
 * MissingCollection: 'NFT metadata doesn't have a collection!'
 *
 * @category Errors
 * @category generated
 */
export class MissingCollectionError extends Error {
  readonly code: number = 0x1770;
  readonly name: string = 'MissingCollection';
  constructor() {
    super("NFT metadata doesn't have a collection!");
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MissingCollectionError);
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new MissingCollectionError());
createErrorFromNameLookup.set('MissingCollection', () => new MissingCollectionError());

/**
 * CollectionMismatch: 'NFT collection doesn't match the collection manager collection!'
 *
 * @category Errors
 * @category generated
 */
export class CollectionMismatchError extends Error {
  readonly code: number = 0x1771;
  readonly name: string = 'CollectionMismatch';
  constructor() {
    super("NFT collection doesn't match the collection manager collection!");
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CollectionMismatchError);
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new CollectionMismatchError());
createErrorFromNameLookup.set('CollectionMismatch', () => new CollectionMismatchError());

/**
 * UnverifiedCollection: 'NFT collection isn't verified!'
 *
 * @category Errors
 * @category generated
 */
export class UnverifiedCollectionError extends Error {
  readonly code: number = 0x1772;
  readonly name: string = 'UnverifiedCollection';
  constructor() {
    super("NFT collection isn't verified!");
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnverifiedCollectionError);
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new UnverifiedCollectionError());
createErrorFromNameLookup.set('UnverifiedCollection', () => new UnverifiedCollectionError());

/**
 * PublicKeyMismatch: 'Public key mismatch!'
 *
 * @category Errors
 * @category generated
 */
export class PublicKeyMismatchError extends Error {
  readonly code: number = 0x1773;
  readonly name: string = 'PublicKeyMismatch';
  constructor() {
    super('Public key mismatch!');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PublicKeyMismatchError);
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new PublicKeyMismatchError());
createErrorFromNameLookup.set('PublicKeyMismatch', () => new PublicKeyMismatchError());

/**
 * NicknameTooLong: 'Nickname can't be longer than 32 characters!'
 *
 * @category Errors
 * @category generated
 */
export class NicknameTooLongError extends Error {
  readonly code: number = 0x1774;
  readonly name: string = 'NicknameTooLong';
  constructor() {
    super("Nickname can't be longer than 32 characters!");
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NicknameTooLongError);
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new NicknameTooLongError());
createErrorFromNameLookup.set('NicknameTooLong', () => new NicknameTooLongError());

/**
 * BlobIsFull: 'You can't feed your Blob more than once a day!'
 *
 * @category Errors
 * @category generated
 */
export class BlobIsFullError extends Error {
  readonly code: number = 0x1775;
  readonly name: string = 'BlobIsFull';
  constructor() {
    super("You can't feed your Blob more than once a day!");
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, BlobIsFullError);
    }
  }
}

createErrorFromCodeLookup.set(0x1775, () => new BlobIsFullError());
createErrorFromNameLookup.set('BlobIsFull', () => new BlobIsFullError());

/**
 * BlobNotStarving: 'The Blob can't lose a life due to starving unless it hasn't been fed for a week!'
 *
 * @category Errors
 * @category generated
 */
export class BlobNotStarvingError extends Error {
  readonly code: number = 0x1776;
  readonly name: string = 'BlobNotStarving';
  constructor() {
    super("The Blob can't lose a life due to starving unless it hasn't been fed for a week!");
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, BlobNotStarvingError);
    }
  }
}

createErrorFromCodeLookup.set(0x1776, () => new BlobNotStarvingError());
createErrorFromNameLookup.set('BlobNotStarving', () => new BlobNotStarvingError());

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code);
  return createError != null ? createError() : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name);
  return createError != null ? createError() : null;
}
