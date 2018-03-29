import ServiceProviderInterface from "./ServiceProviderInterface";
import ContainerInterface from "../container/ContainerInterface";

export default interface ApplicationInterface {
    
    /**
     * Register a new Service Provider
     * 
     * @param provider Service Provider to Register
     */
    register(provider: ServiceProviderInterface): void;

    /**
     * Get DI Container
     */
    getContainer(): ContainerInterface;

    /**
     * Boot the Application and Start Dependencies
     */
    start(): void;
    
}