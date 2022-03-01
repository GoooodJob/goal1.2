const http = require("http")
/**
 * Http的客户端
 */
export class HttpClient {
    private port: number;
    constructor(port: number) {
        this.port = port;
    }

    private getmessage() {
        http.get(`http://localhost:${this.port}/helloworld`, (res) => {
            console.log(`Got response: ${res.statusCode}`);

            // consume response body
            res.resume();
        }).on('error', (e) => {
        console.log(`Got error: ${e.message}`);
        });
    
    }

    
}

//实例化一个HttpClient类，设置其端口为3000
var httpClient = new HttpClient(3000);

