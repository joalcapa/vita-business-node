import endpoints from '../../config/endpoints';
import {apiCall} from '../../middlewares';

const getBanks = (iso_code: string) => {
    return apiCall({
        endpoint: endpoints.GET_BANKS,
        params: {
            iso_code,
        },
    });
};

export default {
    getBanks,
};
