import * as  http from "http"

/**
 * Http的客户端
 */
export class HttpClient {
    constructor() { }

    /**
     * 启动客户端
     */
    public start() {
        http.get(`http://localhost:3000/helloworld`, res => {
            var html = '';
            res.on('data', data => {

                html += data;
            });
            res.on('end', () => {

                console.log(html);
            })
        }).on('error', (e) => {
            console.log(`Got error: ${e.message}`);
        });
    }
}

//实例化一个HttpClient类，设置其端口为3000
var httpClient = new HttpClient();
httpClient.start();
