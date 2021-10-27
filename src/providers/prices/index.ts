import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';

const getPrices = (uuid = '') => {
    return apiCall({
        endpoint: endpoints.GET_PRICES,
        params: uuid ? {uuid} : {},
    });
};

export default {
    getPrices,
};
