import Banks from './model';

const banks = (iso_code: string = ''): Banks => {
    return new Banks(iso_code);
};

export default banks;
