import { createServer, Server } from 'http'
import * as express from 'express'

export default class HttpServer {

    protected httpServer: Server;
    protected app: any;

    constructor(protected port: number) {
        this.app = express()
        this.httpServer = createServer(this.app)
    }
    
    use (...args: any[]): any {
        return this.app.use(...args)
    }

    getHttpServer(): Server {
        return this.httpServer
    }

    start(): void {
        this.httpServer.listen(this.port, () => {
            console.log('Application is Running')
        })
    }
}