import axios from 'axios';
import Configuration from '../../config';

const apiCall = async (preConfig: any) => {
    const {data = {}, resource = '', endpoint = '', params = {}} = preConfig;

    if (!Configuration.isCredentials()) {
        return {
            error: 1,
            message: 'Invalid credentials',
        }
    }

    const config = {
        ...preConfig,
        ...Configuration.getUri(endpoint, resource, params),
        ...Configuration.prepareHeaders(data, endpoint),
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (e) {
        return e.response.data;
    }
};

export default apiCall;
