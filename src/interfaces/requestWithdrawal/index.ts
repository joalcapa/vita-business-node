export interface RequestWithdrawal {
    url_notify: string;
    beneficiary_document_type: string;
    beneficiary_document_number: string;
    account_type_bank: string;
    account_bank: string;
    bank_code: string;
    beneficiary_email: string;
    beneficiary_address: string;
    beneficiary_last_name: string;
    beneficiary_first_name: string;
    purpose_comentary: string;
    purpose: string;
    country: string;
    currency: string;
    order: string;
    amount: number;
    city?: string;
    phone?: string;
    beneficiary_type?: string;
    company_name?: string;
    bank_branch?: string;
    swift_bic?: string;
    zipcode?: string;
    routing_number?: string;
}

export interface RequestWithdrawalBusiness {
    url_notify: string;
    beneficiary_document_type: string;
    beneficiary_document_number: string;
    account_type_bank: string;
    account_bank: string;
    bank_code: string;
    beneficiary_email: string;
    beneficiary_address: string;
    beneficiary_last_name: string;
    beneficiary_first_name: string;
    purpose_comentary: string;
    purpose: string;
    country: string;
    currency: string;
    order: string;
    amount: number;
    city?: string;
    phone?: string;
    beneficiary_type?: string;
    company_name?: string;
    bank_branch?: string;
    swift_bic?: string;
    zipcode?: string;
    routing_number?: string;
    wallet: string;
    transactions_type: string;
}

export default RequestWithdrawal;
