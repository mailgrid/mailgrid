import ServiceProviderInterface from "../../contracts/foundation/ServiceProviderInterface";
import ApplicationInterface from "../../contracts/foundation/ApplicationInterface";
import HttpServer from "../HttpServer";

const HTTP_SERVER_KEY = 'Http/HttpServer'

export {
    HTTP_SERVER_KEY
}

export default class HttpServiceProvider implements ServiceProviderInterface {
    register(app: ApplicationInterface): void {
        app.getContainer().singleton(
            HTTP_SERVER_KEY, 
            new HttpServer(3000)
        )
    }

    boot(app: ApplicationInterface): void {
            app.getContainer().make<HttpServer>(HTTP_SERVER_KEY).start()
    }
}