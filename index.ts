import crypto from 'crypto';
import Business, {Wallet, Bank} from './src';

Business.config({
    X_Login: 'b04bee5d1ac0e778369e86a1be43029c235454fc',
    X_Trans_Key: '7vnjRK86EkYBUw5NSjCaCLubbn8=',
    secret: '78038eaf2fc3eefa953687d8d20bf9c16b54d778e01559c7b663c7cf0310c1f3934b15edb7ed14caf3e3221b49f80950183f1155ae44712b16bef007456fe81014e6772508acd8f102af1ad14ab7beb8e8e3af095f278ec708809edbe4466fbeb8dcf7751f13b48651be82eddea24e07fb8f997b1e7cf6e947eb77febc0f0298219d689ecc71f46c9ce2e04de063160556a85a2cd5fcbfff469a4fc092e51c3478a94ad340e78c44f938667d3b9fcf9354fa9932335d76d36514e0f05a03e0185194bbe27c6b963a72923c11252c195fbbe583455cd6fa8ab79a7b037a36b1ab2cd510b49dee6e6d17682475f67417bcddd2e760fc2ca9b3052e125f90ab7c959c8884cee3ab8b91f95b5dc1bd83b33d0bc8c60b510b6ecf6de09ed7c5b9970bd64b5b09d3181ab5bbd1244f',
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

// recharge();
banks();
