import ApplicationInterface from "./ApplicationInterface";

export default interface ServiceProviderInterface {
    register(app: ApplicationInterface): void;
    boot(app: ApplicationInterface): void;
}