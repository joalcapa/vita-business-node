class Base {
    protected uuid: string = '';

    public promise (callback: any = () => {}) {
        return new Promise((resolve, reject) => {
            callback(resolve, (error: any) => {
                reject(new Error(JSON.stringify(error)));
            });
        });
    }

    public createTransaction(callback: any = () => {}) {
        return this.promise((resolve: any, reject: any) => {
            if (this.uuid) {
                callback(resolve, reject);
            } else {
                reject({
                    error: 700,
                    message: 'UUID wallet not found',
                });
            }
        });
    }
}

export default Base;
