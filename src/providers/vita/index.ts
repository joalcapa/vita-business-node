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

export default {
    getVitaEmail,
};
