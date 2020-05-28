import Configuration from '../../config';
import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';

const getWallet = (uuid: string) => {
    return apiCall({
        url: `${Configuration.getWalletsUrl()}/${uuid}`,
        method: 'get',
        type: endpoints.GET_WALLET,
    });
};

const getWallets = () => {
    return apiCall({
        url: Configuration.getWalletsUrl(),
        method: 'get',
        type: endpoints.GET_WALLETS,
    });
};

const createWallet = (token: string) => {
    return apiCall({
        url: Configuration.getWalletsUrl(),
        method: 'post',
        type: endpoints.CREATE_WALLET,
        data: {token},
    });
}

export default {
    getWallet,
    getWallets,
    createWallet,
};
