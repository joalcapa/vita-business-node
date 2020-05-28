import Configuration from '../../config';
import {apiCall} from '../../middleware';

const getTransactions = () => {
    return apiCall({
        url: Configuration.getTransactionsUrl(),
        method: 'get',
        type: Configuration.GET_TRANSACTIONS,
    });
};

const getTransaction = (id: string) => {
    return apiCall({
        url: `${Configuration.getTransactionsUrl()}/${id}`,
        method: 'get',
        type: Configuration.GET_TRANSACTIONS,
    });
};

const createRecharge = (data: any) => {
    return apiCall({
        url: Configuration.getTransactionsUrl(),
        method: 'post',
        type: Configuration.CREATE_RECHARGE,
        data,
    });
};

const createPurchase = (data: any) => {
    return apiCall({
        url: Configuration.getTransactionsUrl(),
        method: 'post',
        type: Configuration.CREATE_PURCHASE,
        data,
    });
};

const createWithdrawal = (data: any) => {
    return apiCall({
        url: Configuration.getTransactionsUrl(),
        method: 'post',
        type: Configuration.CREATE_WITHDRAWAL,
        data,
    });
};

const createSend = (data: any) => {
    return apiCall({
        url: Configuration.getTransactionsUrl(),
        method: 'post',
        type: Configuration.CREATE_SEND,
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
