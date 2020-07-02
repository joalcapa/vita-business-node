import crypto from 'crypto';
import Business, {Wallet} from './src';

Business.config({
    X_Login: '0c8a34768609857c92384290e52b1c21544c84b2',
    X_Trans_Key: '3LDn9e/oNtACL8sgmBkTtteSlqA=',
    secret: '3ecd29fdcc92ab203d2eb51fa704806e8f0802b8',
    env: 'qa',
});

const f = async () => {
    try {
        let wallets: Wallet = <Wallet> await Business.wallets().get();
        console.log('Wallets: ', wallets);
        const receive_wallet = '6fda8102-f09a-4e79-9bd0-2699948c8313';
        const sender_wallet = '6400990a-baae-4c5d-ac82-c282c1da6a7b';
        let wallet: Wallet = <Wallet> await Business.wallets(sender_wallet).get();
        const transactions = await wallet.transactions();
        console.log('Wallet: ', wallet);
        console.log('Transactions: ', transactions);
        /*const purchase = await wallet.purchase(
            {
                currency: 'clp',
                order: crypto.randomBytes(64).toString('hex'),
                amount: 80,
            }
        );
        console.log('Purchase: ', purchase);*/
        /*const send = await wallet.send(
            {
                currency: 'clp',
                order: crypto.randomBytes(64).toString('hex'),
                amount: 10,
                wallet_recipient: receive_wallet,
            }
        );
        console.log('Send: ', send);*/
        //let wallet: Wallet = <Wallet> await Business.wallets().create('goodbb');
        /*const recharge = await wallet.recharge({
            currency: 'clp',
            order: crypto.randomBytes(64).toString('hex'),
            amount: 7777,
            url_complete: 'https://ur.com/complete',
            url_cancel: 'https://ur.com/cancel',
        });

        console.log('Recharga: ', recharge);*/
    } catch (e) {
        console.log(e);
    }
};

f();
