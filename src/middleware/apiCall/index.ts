import crypto from 'crypto';
import axios from 'axios';
import Configuration from '../../config';

const prepareResult = (hash: any = {}, type: string = '') => {
    switch(type) {
        case 'WALLET_CREATE': {
            const {token} = hash;
            return `token${token}`;
        }
        default: {
            return '';
        }
    }
};

const prepareHeaders = (credentials: any, hash: any = {}) => {
    const {X_Login, X_Trans_Key, secret} = credentials;
    const X_Date = new Date().toISOString();
    const result = prepareResult(hash, 'WALLET_CREATE');

    let signature: any = crypto.createHmac('sha256', secret);
    signature.update(`${X_Login}${X_Date}${result}`);
    signature = signature.digest('hex');

    return {
        "X-Date": X_Date,
        "X-Login": X_Login,
        "X-Trans-Key": X_Trans_Key,
        "Content-Type": "application/json",
        "Authorization": `V2-HMAC-SHA256, Signature: ${signature}`,
    }
};

const apiCall = async (preConfig: any) => {
    const {data = {}} = preConfig;
    const credentials = Configuration.getInstance().getCredentials();

    if (!credentials)
        throw("Invalid credentials")

    const config = {
        ...preConfig,
        headers: prepareHeaders(credentials, data),
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (e) {
        return e.response.data;
    }
};

export default apiCall;
