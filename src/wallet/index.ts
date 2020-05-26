import {walletProvider} from '../providers';
import Wallet from './resources';

const wallet = (uuid: string = '') => {
    const _uuid = uuid;

    const get = async () => {
        if (_uuid) {
            const resp = await walletProvider.getWallet(_uuid);
            return new Wallet(resp);
        } else {
            await walletProvider.getWallets();
        }
    };

    return {
        get,
    }
};

export default wallet;
