import ServiceProviderInterface from "../../contracts/foundation/ServiceProviderInterface";
import ApplicationInterface from "../../contracts/foundation/ApplicationInterface";
import { HTTP_SERVER_KEY } from "../../http/providers/HttpServiceProvider";
import HttpServer from "../../http/HttpServer";
import NuxtMiddleware from "../http/NuxtMiddleware";

export default class NuxtServiceProvider implements ServiceProviderInterface {
    register(app: ApplicationInterface): void {
        app.getContainer().make<HttpServer>(HTTP_SERVER_KEY).use(
            (new NuxtMiddleware()).get()
        )
    }

    boot(app: ApplicationInterface): void {
        
    }
}