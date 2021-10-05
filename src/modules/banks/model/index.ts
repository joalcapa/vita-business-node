import Base from './base';
import {bankProvider} from '../../../providers';

class Bank extends Base {
    private iso_code: string = '';
    private length_of_checking_account_number: any = null;
    private length_of_savings_account_number: any = null;
    private name: string = '';
    private bank_code: any = null;

    public constructor(
        iso_code: string,
        length_of_checking_account_number: any = null,
        length_of_savings_account_number: any = null,
        name: string = '',
        bank_code: any = null
    ) {
        super();

        this.iso_code = iso_code.toUpperCase();
        this.length_of_checking_account_number = length_of_checking_account_number;
        this.length_of_savings_account_number = length_of_savings_account_number;
        this.name = name;
        this.bank_code = bank_code;
    }

    public get() {
        return this.promise(async (resolve: any, reject: any) => {
            const response: any = await bankProvider.getBanks(this.iso_code);
            if (response.error) {
                reject(response.error);
            } else {
                const banks = response.banks.map((bank: any) => {
                    const {
                        attributes: {
                            length_of_checking_account_number,
                            length_of_savings_account_number,
                            name,
                            bank_code
                        }
                    } = bank;

                    return new Bank(
                        this.iso_code,
                        length_of_checking_account_number,
                        length_of_savings_account_number,
                        name,
                        bank_code
                    );
                });

                resolve({
                    data: banks,
                    total: response.total,
                    count: response.count,
                });
            }
        });
    }
}

export default Bank;
