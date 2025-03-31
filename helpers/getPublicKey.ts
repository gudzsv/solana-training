import { PublicKey } from '@solana/web3.js';
import { PUBLIC_KEY } from '../constatns/index.js';

export const getPublicKey = () => {
	const publicKey = new PublicKey(PUBLIC_KEY);
	return publicKey;
};
