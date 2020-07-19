import Transaction from './model';

const transactions = (id: any = null): Transaction => {
    return new Transaction(id);
};

export default transactions;
