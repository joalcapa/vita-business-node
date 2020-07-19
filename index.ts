import crypto from 'crypto';
import Business, {Wallet, Bank, Price} from './src';

Business.config({
    X_Login: 'e65828b2cf13b7eb125e5b855bfbdee4e4b51d00',
    X_Trans_Key: '8KqvGE3AMtNSOvZ8JQxya7jnrUY=',
    secret: 'a44e5a5b70baeb9ca33700e66e3667d1c55ad449538a0463dae69090f3a2455ab6e7ccb6885e880900f1cc05a251252371a63c9863007410e4cdb802583f0fa372056ba723c14b2c8eaee5ba99b603effe61e05e2b7048c7277254390cfda4ccf42fbec979b142eaca8a6d5854556a222194b5fbffda2d818c874e4a21f5f164546da09148bde2cd529b398be14c91778ef0753eef118cf3595dc6710ada32a8a6608e99e9db2f239a262e6afc357b0f3672239f2cd888caf38c239b5d51fea0535caedc8ad24c06896046dfd29de2363d5477ffc1303755157cab437b9250a291e208a3aeea644f29a658a1dbfc6bb7c83128b3782f8c0b3fc8f06e771faf192771a269d3998a3521e7260d974dd8a7388b1045f6e4fb3c0810b4116c9ba5561ab93605717e98126279766e',
    env: 'qa',
});

const recharge = async () => {
    try {
        //let wallet: Wallet = <Wallet> await Business.wallets('6400990a-baae-4c5d-ac82-c282c1da6a7b').get();
        let wallet: Wallet = <Wallet> await Business.wallets('6400990a-baae-4c5d-ac82-c282c1da6a7b');
        const redirect_url = await wallet.recharge({
            currency: 'clp',
            order: crypto.randomBytes(64).toString('hex'),
            amount: 7777,
            url_complete: 'https://ur.com/complete',
            url_cancel: 'https://ur.com/cancel',
        });

        console.log('redirect_url for recharge: ', redirect_url);
    } catch (e) {
        console.log(e);
    }
};

const banks = async () => {
   try {
       let banks: Bank = <Bank> await Business.banks('co');
       const banksAll = await banks.get();
       console.log('banks: ', banksAll);
   } catch (e) {
       console.log(e);
   }
};

const master = async () => {
    try {
        let wallet: Wallet = <Wallet> await Business.wallets();
        const walletMaster = await wallet.getMaster();
        console.log('walletMaster: ', walletMaster);
    } catch (e) {
        console.log(e);
    }
};

const prices = async () => {
    try {
        const prices: any = await Business.prices().get();
        console.log('prices: ', prices.withdrawal.prices.attributes);
    } catch (e) {
        console.log(e);
    }
};

const transactions = async () => {
    try {
        const transactions = await Business.transactions(190).get();
        console.log('transactions: ', transactions);
    } catch (e) {
        console.log(e);
    }
};

// recharge();
// banks();
// master();
// prices();
transactions();
