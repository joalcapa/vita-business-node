import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';

const getWallet = (uuid: string) => {
    return apiCall({
        endpoint: endpoints.GET_WALLET,
    });
};

const getWallets = () => {
    return apiCall({
        endpoint: endpoints.GET_WALLETS,
    });
};

const createWallet = (token: string) => {
    return apiCall({
        endpoint: endpoints.CREATE_WALLET,
        data: {token},
    });
}

export default {
    getWallet,
    getWallets,
    createWallet,
};
