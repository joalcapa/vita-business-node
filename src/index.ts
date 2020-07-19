import Configuration from './config';
import {Credentials} from './interfaces';
import {wallets, banks, prices, transactions} from './modules';
export {default as Wallet} from './modules/wallets/model';
export {default as Bank} from './modules/banks/model';
export {default as Price} from './modules/prices/model';
export {default as Transaction} from './modules/transactions/model'

export const config = (credentials: Credentials) => {
    const {X_Login = null, X_Trans_Key = null, secret = null, env = null} = credentials;
    if (X_Login && X_Trans_Key && secret && env && (env === Configuration.QA || env === Configuration.PROD))
        Configuration.getInstance().setCredentials(credentials);
};

export default {
    config,
    wallets,
    banks,
    prices,
    transactions,
};
