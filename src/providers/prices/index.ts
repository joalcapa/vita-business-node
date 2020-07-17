import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';

const getPrices = () => {
    return apiCall({
        endpoint: endpoints.GET_PRICES,
    });
};

export default {
    getPrices,
};
