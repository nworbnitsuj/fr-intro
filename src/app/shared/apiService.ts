class ApiService {
    private static _url: string = "https://api.staging-fitrankings.com";

    public static fetchResource(resource) {
        const url = this._url + resource.endpoint;
        //perform GET request
    }

    public static timer() {
        let [_ms, _fn] = [0, null];

        return {
            start: () => {},
            stop: () => {},
            result: () => _ms
        }
    }
}


export default ApiService;