/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category LoseLife
 * @category generated
 */
export const loseLifeStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'LoseLifeInstructionArgs',
);
/**
 * Accounts required by the _loseLife_ instruction
 *
 * @property [_writable_] extensionMetadata
 * @property [_writable_, **signer**] payer
 * @property [] collectionMint
 * @property [] mint
 * @category Instructions
 * @category LoseLife
 * @category generated
 */
export type LoseLifeInstructionAccounts = {
  extensionMetadata: web3.PublicKey;
  payer: web3.PublicKey;
  collectionMint: web3.PublicKey;
  mint: web3.PublicKey;
};

export const loseLifeInstructionDiscriminator = [117, 250, 96, 174, 113, 6, 164, 13];

/**
 * Creates a _LoseLife_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category LoseLife
 * @category generated
 */
export function createLoseLifeInstruction(accounts: LoseLifeInstructionAccounts) {
  const { extensionMetadata, payer, collectionMint, mint } = accounts;

  const [data] = loseLifeStruct.serialize({
    instructionDiscriminator: loseLifeInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: extensionMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: collectionMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: mint,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('BLoBXGoEp1KmFcYNbzFeq9KaFyrqy4A1HH55ceA19qLW'),
    keys,
    data,
  });
  return ix;
}
