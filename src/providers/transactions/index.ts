import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';

const getTransactions = () => {
    return apiCall({
        endpoint: endpoints.GET_TRANSACTIONS,
    });
};

const getTransaction = (id: string) => {
    return apiCall({
        endpoint: endpoints.GET_TRANSACTIONS,
    });
};

const createRecharge = (data: any) => {
    return apiCall({
        endpoint: endpoints.CREATE_RECHARGE,
        data,
    });
};

const createPurchase = (data: any) => {
    return apiCall({
        endpoint: endpoints.CREATE_PURCHASE,
        data,
    });
};

const createWithdrawal = (data: any) => {
    return apiCall({
        endpoint: endpoints.CREATE_WITHDRAWAL,
        data,
    });
};

const createSend = (data: any) => {
    return apiCall({
        endpoint: endpoints.CREATE_SEND,
        data,
    });
};

export default {
    getTransactions,
    getTransaction,
    createRecharge,
    createPurchase,
    createWithdrawal,
    createSend,
};
