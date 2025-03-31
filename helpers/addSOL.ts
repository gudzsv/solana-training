import { airdropIfRequired } from '@solana-developers/helpers';
import { Connection, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js';

export const addSOL = async (publicKey) => {
	const connection = new Connection(clusterApiUrl('devnet'));
	await airdropIfRequired(
		connection,
		publicKey,
		1 * LAMPORTS_PER_SOL,
		0.5 * LAMPORTS_PER_SOL
	);
};
