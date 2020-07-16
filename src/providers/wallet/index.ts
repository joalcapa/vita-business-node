import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';

const getWallet = (uuid: string) => {
    return apiCall({
        endpoint: endpoints.GET_WALLET,
        resource: uuid,
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

const getWalletMaster = () => {
    return apiCall({
        endpoint: endpoints.GET_WALLETS,
        params: {
            is_master: true,
        },
    });
};

export default {
    getWallet,
    getWallets,
    createWallet,
    getWalletMaster
};
