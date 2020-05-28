import Configuration from './config';
import {wallets} from './modules';

export const config = (credentials: any) => {
    const {X_Login = null, X_Trans_Key = null, secret = null, env = null} = credentials;
    if (X_Login && X_Trans_Key && secret && env && (env === 'qa' || env === 'prod'))
        Configuration.getInstance().setCredentials(credentials);
};

export default {
    config,
    wallets,
};
