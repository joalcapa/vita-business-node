import Configuration from '../../config';
import {apiCall} from '../../middleware';

const getWallet = (uuid: string) => {
    return apiCall({
        url: `${Configuration.getWalletsUrl()}/${uuid}`,
        method: 'get',
    });
};

const getWallets = () => {
    return apiCall({
        url: Configuration.getWalletsUrl(),
        method: 'get',
    });
};

const createWallet = (token: string) => {
    return apiCall({
        url: Configuration.getWalletsUrl(),
        method: 'post',
        data: {token},
    });
}

export default {
    getWallet,
    getWallets,
    createWallet,
};
