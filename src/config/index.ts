class Configuration {
    private static instance: Configuration;
    private credentials: any = null;

    private constructor() { }

    public static getInstance(): Configuration {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }

        return Configuration.instance;
    }

    public setCredentials(credentials: object) {
        this.credentials = credentials;
    }
}

export default Configuration;
