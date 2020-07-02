import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';
import {RequestRechargeBusiness} from '../../interfaces/requestRecharge';
import {RequestSendBusiness} from '../../interfaces/requestSend';
import {RequestPurchaseBusiness} from '../../interfaces/requestPurchase';

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

const createRecharge = (data: RequestRechargeBusiness) => {
    return apiCall({
        endpoint: endpoints.CREATE_RECHARGE,
        data,
    });
};

const createPurchase = (data: RequestPurchaseBusiness) => {
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

const createSend = (data: RequestSendBusiness) => {
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
