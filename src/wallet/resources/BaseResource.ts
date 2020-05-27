class BaseResource {
    public promise (callback: any = () => {}) {
        return new Promise((resolve, reject) => {
            callback(resolve, (error: any) => {
                reject(new Error(JSON.stringify(error)));
            });
        });
    }
}

export default BaseResource;
