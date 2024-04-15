import crypto from 'crypto';

import Configuration from '../config';
import {REQUESTS_KEY_STORAGE} from '../config/constants';

export const writeRequestsInStorage = (request: unknown) => {
    if (global.localStorage && Configuration.isDevelopment()) {
        let fromStorage = null;
        let requests = {req: []};

        try {
            fromStorage = global.localStorage.getItem(REQUESTS_KEY_STORAGE);
        } finally {
            if (fromStorage) {
                requests = JSON.parse(fromStorage);
            }

            // @ts-ignore
            requests.req = [
                {
                    ...request,
                    // @ts-ignore
                    id: crypto.randomBytes(8).toString('hex'),
                },
                ...requests.req,
            ];

            global.localStorage.setItem(REQUESTS_KEY_STORAGE, JSON.stringify(requests))
        }
    }
};
