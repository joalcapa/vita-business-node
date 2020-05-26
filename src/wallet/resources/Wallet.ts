class Wallet {
    private uuid: string = '';

    public constructor(resp: any) {
        const {uuid} = resp;
        this.uuid = uuid;
    }

    public transactions() { }

    public recharge() { }

    public purchase() { }

    public withdrawal() { }

    public send() { }
}

export default Wallet;
