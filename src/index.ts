import Configuration from './config';
import wallets from './wallet';

export const config = (credentials: any) => {
    const {X_Login = null, X_Trans_Key = null, secret = null, env = null} = credentials;

    if (!X_Login || !X_Trans_Key || !secret || !env)
        throw("Invalid credentials")

    if (env !== 'qa' && env !== 'prod')
        throw("Invalid env")

    Configuration.getInstance().setCredentials(credentials);
};

export default {
    config,
    wallets,
};
