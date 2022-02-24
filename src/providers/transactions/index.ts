import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';
import {RequestRechargeBusiness} from '../../interfaces/requestRecharge';
import {RequestSendBusiness} from '../../interfaces/requestSend';
import {RequestVitaSendBusiness} from '../../interfaces/requestVitaSend';
import {RequestPurchaseBusiness} from '../../interfaces/requestPurchase';
import {RequestWithdrawalBusiness} from '../../interfaces/requestWithdrawal';

const getTransactions = (filters: object = {}) => {
    return apiCall({
        endpoint: endpoints.GET_TRANSACTIONS,
        params: filters,
    });
};

const getTransaction = (id: string = '') => {
    return apiCall({
        endpoint: endpoints.GET_TRANSACTIONS,
        resource: id,
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

const createWithdrawal = (data: RequestWithdrawalBusiness) => {
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

export const createVitaSend = (data: RequestVitaSendBusiness) => {
    return apiCall({
        endpoint: endpoints.CREATE_VITA_SEND,
        data,
    });
};

export const getWithdrawalRules = () => {
    return apiCall({
        endpoint: endpoints.GET_WITHDRAWAL_RULES,
    });
};

export default {
    getTransactions,
    getTransaction,
    createRecharge,
    createPurchase,
    createWithdrawal,
    createSend,
    createVitaSend,
    getWithdrawalRules,
};
