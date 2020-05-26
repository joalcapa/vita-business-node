import {apiCall} from '../../middleware';

const getWallet = (uuid: string) => {

};

const getWallets = () => {

};

const createWallet = (token: string) => {
    return apiCall({
        url: '',
        method: '',
        data: {token},
    });
}

export default {
    getWallet,
    getWallets,
    createWallet,
};
