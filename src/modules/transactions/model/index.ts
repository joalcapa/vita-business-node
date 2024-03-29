import Base from './base';
import Wallet from '../../wallets/model';
import {transactionsProvider} from '../../../providers';

class Transaction extends Base {
    private status: string = '';
    private order: string = '';
    private currency: string = '';
    private category: string = '';
    private amount: number = 0;
    private total: number = 0;
    private fee_value: number = 0;
    private total_fee: number = 0;
    private created_at: string = '';
    private recipient_wallet: any = null;
    private sender_wallet: any = null;
    private recipient_email: string = '';
    private included: any = null;
    private vita_transaction_id: string = '';
    private tracking_url: string = '';

    public constructor(
        id: any = null,
        status: string = '',
        order: string = '',
        currency: string = '',
        category: string = '',
        amount: number = 0,
        total: number = 0,
        fee_value: number = 0,
        total_fee: number = 0,
        created_at: string = '',
        recipient_wallet: any = null,
        sender_wallet: any = null,
        recipient_email: string = '',
        included: any = null,
        vita_transaction_id: string = '',
        tracking_url: string = ''
    ) {
        super();

        this.id = id;
        this.status = status;
        this.order = order;
        this.currency = currency;
        this.category = category;
        this.amount = amount;
        this.total = total;
        this.fee_value = fee_value;
        this.total_fee = total_fee;
        this.created_at = created_at;
        this.recipient_wallet = recipient_wallet;
        this.sender_wallet = sender_wallet;
        this.recipient_email = recipient_email;
        this.included = included;
        this.vita_transaction_id = vita_transaction_id;
        this.tracking_url = tracking_url;
    }

    private createWallet(wallet: any = null) {
        if (wallet) {
            const {uuid, token, created_at, is_master, balances} = wallet;
            return new Wallet(uuid, created_at, is_master, balances, token);
        }

        return null;
    }

    public get(filters: object = {}) {
        return this.promise(async (resolve: any, reject: any) => {
            const response: any = this.id ? await transactionsProvider.getTransaction(this.id) : await transactionsProvider.getTransactions(filters);

            if (response.error) {
                reject(response.error);
            } else {
                if (this.id) {
                    const {
                        transaction: {
                            id,
                            attributes: {
                                status,
                                order,
                                currency,
                                category,
                                amount,
                                total,
                                fee_value,
                                total_fee,
                                created_at,
                                recipient_wallet,
                                sender_wallet,
                                recipient_email,
                                included = null,
                                vita_transaction_id = '',
                                tracking_url = '',
                            },
                        },
                    } = response;

                    this.id = id;
                    this.status = status;
                    this.order = order;
                    this.currency = currency;
                    this.category = category;
                    this.amount = amount;
                    this.total = total;
                    this.fee_value = fee_value;
                    this.total_fee = total_fee;
                    this.created_at = created_at;
                    this.recipient_wallet = this.createWallet(recipient_wallet);
                    this.sender_wallet = this.createWallet(sender_wallet);
                    this.recipient_email = recipient_email;
                    this.included = included;
                    this.vita_transaction_id = vita_transaction_id;
                    this.tracking_url = tracking_url;

                    resolve(this);
                } else {
                    const transactions = response.transactions.map((transaction: any) => {
                        const {
                            id,
                            attributes: {
                                status,
                                order,
                                currency,
                                category,
                                amount,
                                total,
                                fee_value,
                                total_fee,
                                created_at,
                                recipient_wallet,
                                sender_wallet,
                                recipient_email,
                                included = null,
                                vita_transaction_id = '',
                                tracking_url = '',
                            },
                        } = transaction;

                        return new Transaction(
                            id,
                            status,
                            order,
                            currency,
                            category,
                            amount,
                            total,
                            fee_value,
                            total_fee,
                            created_at,
                            this.createWallet(recipient_wallet),
                            this.createWallet(sender_wallet),
                            recipient_email,
                            included,
                            vita_transaction_id,
                            tracking_url
                        );
                    });

                    resolve({
                        data: transactions,
                        total: response.total,
                        count: response.count,
                    });
                }
            }
        });
    }
}

export default Transaction;
