import Base from './base';
import {bankProvider} from '../../../providers';

class Bank extends Base {

    public constructor() {
        super();
    }

    public get() {
        return this.promise(async (resolve: any, reject: any) => {
            const response: any = await bankProvider.getBanks();
            if (response.error) {
                reject(response.error);
            } else {
                console.log(response);
                resolve(response);
            }
        });
    }
}

export default Bank;
