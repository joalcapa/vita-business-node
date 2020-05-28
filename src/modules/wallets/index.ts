import Wallet from './model';

const wallets = (uuid: string = '') => {
    return new Wallet(uuid);
};

export default wallets;
