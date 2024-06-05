// @ts-nocheck
import axios from 'axios';

import Configuration from '../../config';
import {writeRequestsInStorage} from "../../utils";

const apiCall = async (preConfig: any) => {
    console.log(preConfig)
    const {data = {}, resource = '', endpoint = '', params = {}} = preConfig;

    if (!Configuration.isCredentials()) {
        return {
            error: 1,
            message: 'Invalid credentials',
        }
    }

    let result = null;
    const config = {
        ...preConfig,
        ...Configuration.getUri(endpoint, resource, params),
        ...Configuration.prepareHeaders(data),
        isSuccessful: true,
    };

    try {
        console.log("condig: ", config)
        const response = await axios(config);
        result = response.data;
    } catch (e) {
        config.isSuccessful = false;
        result = e.response.data;
    }

    if (Configuration.isDevelopment()) {
        writeRequestsInStorage({...config, result});
    }
    return result;
};

export default apiCall;
