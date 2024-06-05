import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';

const getVitaEmail = (email: string) => {
    return apiCall({
        endpoint: endpoints.GET_VITA_EMAIL,
        params: {
            email,
        },
    });
};

const getBeneficiary = (data = {}) => {
    console.log("data: ", data)
    return apiCall({
        endpoint: endpoints.GET_BENEFICIARY,
        data,
    });
};

export default {
    getVitaEmail,
    getBeneficiary,
};
