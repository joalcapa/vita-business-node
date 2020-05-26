class Wallet {
    private uuid: string = '';

    public constructor(uuid: string = '') {
        this.uuid = uuid;
    }

    public get() { }

    public transactions() { }

    public recharge() { }

    public purchase() { }

    public withdrawal() { }

    public send() { }
}

export default Wallet;
