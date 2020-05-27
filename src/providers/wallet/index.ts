import Configuration from '../../config';
import {apiCall} from '../../middleware';

const getWallet = (uuid: string) => {

};

const getWallets = () => {

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
