import Business from './src';

Business.config({
    X_Login: 'X_Login',
    X_Trans_Key: 'X_Trans_Key',
    secret: 'secret',
    env: 'qa',
});


   // Business.wallets().create().then(r => console.log(r)).catch(e => console.log(e));

    const f = async () => {
        try {
            await Business.wallets().create()
        } catch (e) {console.log(e);
        }
    };
f();
