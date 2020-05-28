interface RequestWithdrawal {
    url_notify: string;
    beneficiary_document_type: string;
    beneficiary_document_number: number;
    account_type_bank: string;
    account_bank: number;
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

}

export default RequestWithdrawal;
