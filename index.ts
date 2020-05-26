import Business from './src';

Business.config({
    X_Login: 'X_Login',
    X_Trans_Key: 'X_Trans_Key',
    secret: 'secret',
});

Business.wallet().get();
