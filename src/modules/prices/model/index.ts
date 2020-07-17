import Base from './base';
import {pricesProvider} from '../../../providers';

class Price extends Base {

    public constructor() {
        super();
    }

    public get() {
        return this.promise(async (resolve: any, reject: any) => {
            const response: any = await pricesProvider.getPrices();
            if (response.error) {
                reject(response.error);
            } else {
                resolve(response);
            }
        });
    }
}

export default Price;
