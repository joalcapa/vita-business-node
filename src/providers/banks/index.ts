import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';

const getBanks = () => {
    return apiCall({
        endpoint: endpoints.GET_BANKS,
    });
};

export default {
    getBanks,
};
