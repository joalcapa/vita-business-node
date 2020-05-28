import Configuration from '../../config';
import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';

const getTransactions = () => {
    return apiCall({
        url: Configuration.getTransactionsUrl(),
        method: 'get',
        type: endpoints.GET_TRANSACTIONS,
    });
};

const getTransaction = (id: string) => {
    return apiCall({
        url: `${Configuration.getTransactionsUrl()}/${id}`,
        method: 'get',
        type: endpoints.GET_TRANSACTIONS,
    });
};

const createRecharge = (data: any) => {
    return apiCall({
        url: Configuration.getTransactionsUrl(),
        method: 'post',
        type: endpoints.CREATE_RECHARGE,
        data,
    });
};

const createPurchase = (data: any) => {
    return apiCall({
        url: Configuration.getTransactionsUrl(),
        method: 'post',
        type: endpoints.CREATE_PURCHASE,
        data,
    });
};

const createWithdrawal = (data: any) => {
    return apiCall({
        url: Configuration.getTransactionsUrl(),
        method: 'post',
        type: endpoints.CREATE_WITHDRAWAL,
        data,
    });
};

const createSend = (data: any) => {
    return apiCall({
        url: Configuration.getTransactionsUrl(),
        method: 'post',
        type: endpoints.CREATE_SEND,
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
