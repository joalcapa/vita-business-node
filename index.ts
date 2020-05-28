import Business from './src';

Business.config({
    X_Login: 'X_Login',
    X_Trans_Key: 'X_Trans_Key',
    secret: 'secret',
    env: 'qa',
});

const f = async () => {
    try {
        await Business.wallets('start477').get()
    } catch (e) {
        console.log(e);
    }
};

f();
