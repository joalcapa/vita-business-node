import Configuration from '../../config';
import {apiCall} from '../../middleware';

const getWallet = (uuid: string) => {
    return apiCall({
        url: `${Configuration.getWalletsUrl()}/${uuid}`,
        method: 'get',
        type: Configuration.GET_WALLET,
    });
};

const getWallets = () => {
    return apiCall({
        url: Configuration.getWalletsUrl(),
        method: 'get',
        type: Configuration.GET_WALLETS,
    });
};

const createWallet = (token: string) => {
    return apiCall({
        url: Configuration.getWalletsUrl(),
        method: 'post',
        type: Configuration.CREATE_WALLET,
        data: {token},
    });
}

export default {
    getWallet,
    getWallets,
    createWallet,
};
