interface RequestSend {
    wallet_recipient: string;
    amount: number;
    currency: string;
    order: string;
}

export interface RequestSendBusiness {
    wallet_recipient: string;
    amount: number;
    currency: string;
    order: string;
    transactions_type: string;
    wallet: string;
}

export default RequestSend;
