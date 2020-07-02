interface RequestPurchase {
    amount: number;
    currency: string;
    order: string;
}

export interface RequestPurchaseBusiness {
    amount: number;
    currency: string;
    order: string;
    wallet: string;
    transactions_type: string;
}

export default RequestPurchase;
