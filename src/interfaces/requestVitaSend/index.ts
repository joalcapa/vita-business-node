interface RequestVitaSend {
    email: string;
    amount: number;
    currency: string;
    order: string;
}

export interface RequestVitaSendBusiness {
    email: string;
    amount: number;
    currency: string;
    order: string;
    transactions_type: string;
    wallet: string;
}

export default RequestVitaSend;
