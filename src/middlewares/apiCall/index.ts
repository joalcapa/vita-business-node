import axios from 'axios';
import Configuration from '../../config';

const apiCall = async (preConfig: any) => {
    const {data = {}, type = ''} = preConfig;

    if (!Configuration.isCredentials()) {
        return {
            error: 1,
            message: 'Invalid credentials',
        }
    }

    const config = {
        ...preConfig,
        headers: Configuration.prepareHeaders(data, type),
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (e) {
        return e.response.data;
    }
};

export default apiCall;
