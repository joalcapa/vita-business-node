import Wallet from './model';

const wallets = (uuid: string = ''): Wallet => {
    return new Wallet(uuid);
};

export default wallets;
