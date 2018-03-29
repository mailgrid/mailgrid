import ServiceProviderInterface from "../../contracts/foundation/ServiceProviderInterface";
import ApplicationInterface from "../../contracts/foundation/ApplicationInterface";
import SocketServer from '../SocketServer'
import HttpServer from "../../http/HttpServer";
import { HTTP_SERVER_KEY } from "../../http/providers/HttpServiceProvider";

const SOCKET_SERVER_KEY = 'Socket/SocketServer'

export {
    SOCKET_SERVER_KEY
}

export default class SocketServiceProvider implements ServiceProviderInterface {
    register(app: ApplicationInterface): void {
        app.getContainer().singleton(
            SOCKET_SERVER_KEY,
            new SocketServer(
                app.getContainer().make<HttpServer>(HTTP_SERVER_KEY).getHttpServer()
            )
        )
    }
    boot(app: ApplicationInterface): void {
        
    }
}