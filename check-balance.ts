import { Connection, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js';
import 'dotenv/config';
import { addSOL } from './helpers/addSOL.js';
import { getPublicKey } from './helpers/getPublicKey.js';

const connection = new Connection(clusterApiUrl('devnet'));
console.log(`⚡️ Connected to devnet`);

const publicKey = getPublicKey();

// add some solana
await addSOL(publicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
	`💰 The balance for the wallet at address ${publicKey} is: ${balanceInSOL}`
);
