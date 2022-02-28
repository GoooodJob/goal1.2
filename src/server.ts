import * as express from 'express'
const http = require("http")
/**
 * Http的服务器
 */
export class HttpServer {
    private app: express.Express;
    private port: number;
    constructor(port: number) {
        this.app = express();
        this.port = port;
        //配置所有服务
        this.setupServices();
        this.getmessage()
    }

    /**
     * 配置本服务器所有的服务
     */
    private setupServices() {
        //配置根目录
        this.app.get('/', (req, res) => { res.end('Welcome Home!'); })
        //配置helloworld目录
        this.app.get('/helloworld', (req, res) => {
            console.log('requested helloworld service!')
            res.end('Hello World!')
        })
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

    /**
     * 启动服务器
     */
    public start() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

//实例化一个HttpServer类，设置其端口为3000
var httpServer = new HttpServer(3000);
//调用这个实例的“启动”方法，以启动此服务器。
httpServer.start();