import Configuration from './config';
import wallet from './wallet';

export const config = (credentials: any) => {
    const {X_Login = null, X_Trans_Key = null, secret = null} = credentials;

    if (!X_Login || !X_Trans_Key || !secret)
        throw("Invalid credentials")

    Configuration.getInstance().setCredentials(credentials);
};

export default {
    config,
    wallet,
};
