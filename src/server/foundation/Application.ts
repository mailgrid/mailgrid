import ApplicationInterface from "../contracts/foundation/ApplicationInterface";
import ServiceProviderInterface from "../contracts/foundation/ServiceProviderInterface";
import ContainerInterface from "../contracts/container/ContainerInterface";
import ServiceContainer from "../container/ServiceContainer";

export default class Application implements ApplicationInterface {
    providers: Array<ServiceProviderInterface> = [];
    container: ContainerInterface;

    constructor() {
        this.container = new ServiceContainer();
    }

    register(provider: ServiceProviderInterface): void {
        this.providers.push(provider)
    }

    getContainer(): ContainerInterface {
        return this.container;
    }

    start(): void {
        // Register Providers
        this.providers.forEach(provider => provider.register(this));

        // Go again and Boot them
        this.providers.forEach(provider => provider.boot(this));
    }
}