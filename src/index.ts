import Configuration from './config';
import {Credentials} from './interfaces';
import {wallets, banks, prices, transactions} from './modules';
import vitaProvider from './providers/vita';
import {getWithdrawalRules} from './providers/transactions';
export {default as Wallet} from './modules/wallets/model';
export {default as Bank} from './modules/banks/model';
export {default as Price} from './modules/prices/model';
export {default as Transaction} from './modules/transactions/model';

export const config = (credentials: Credentials) => {
    const {X_Login = null, X_Trans_Key = null, secret = null, env = null} = credentials;
    if (X_Login && X_Trans_Key && secret && env && (
        env === Configuration.LOCAL ||
        env === Configuration.QA ||
        env === Configuration.STAGE ||
        env === Configuration.PROD
    ))
        Configuration.getInstance().setCredentials(credentials);
};

export const isCredentials = () => {
    return Configuration.isCredentials();
};

export const isDevelopment = () => {
    return Configuration.isDevelopment();
};

export default {
    vitaProvider,
    rulesProvider: {
        getWithdrawalRules,
    },
    config,
    isCredentials,
    isDevelopment,
    wallets,
    banks,
    prices,
    transactions,
};
