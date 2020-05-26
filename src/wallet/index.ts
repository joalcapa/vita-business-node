import Wallet from './resources';

const wallets = (uuid: string = '') => {
    return new Wallet(uuid);
};

export default wallets;
