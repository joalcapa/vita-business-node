class Configuration {
    private static instance: Configuration;
    private credentials: any = null;

    static QA_URL: string = 'https://vita-wallet-api-qa-2.appspot.com/api/businesses';
    static PROD_URL: string = 'https://api.vitawallet.io/api/businesses';
    static QA: string = 'qa';
    static PROD: string = 'prod';

    private constructor() { }

    public static getInstance(): Configuration {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }

        return Configuration.instance;
    }

    public getCredentials() {
        return this.credentials;
    }

    public setCredentials(credentials: object) {
        this.credentials = credentials;
    }

    public getUrl() {
        return Configuration.instance.credentials.env === Configuration.QA ? Configuration.QA_URL : Configuration.PROD_URL;
    }

    public static getWalletsUrl() {
        return `${Configuration.instance.getUrl()}/wallets`;
    }

    public static getTransactionsUrl() {
        return `${Configuration.instance.getUrl()}/transactions`;
    }

    public static getPricesUrl() {
        return `${Configuration.instance.getUrl()}/prices`;
    }

    public static getBanksUrl() {
        return `${Configuration.instance.getUrl()}/banks`;
    }
}

export default Configuration;
