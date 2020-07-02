interface RequestRecharge {
    amount: number;
    currency: string;
    order: string;
    url_cancel: string;
    url_complete: string;
}

export interface RequestRechargeBusiness {
    amount: number;
    currency: string;
    order: string;
    url_cancel: string;
    url_complete: string;
    wallet: string;
    transactions_type: string;
}

export default RequestRecharge;
