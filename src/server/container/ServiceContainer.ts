import ContainerInterface from "../contracts/container/ContainerInterface";
import ContainerResolver from "../contracts/container/ContainerResolver";
import SingletonDependency from './SingletonDependency'

export default class ServiceContainer implements ContainerInterface {
    container: Map<string, ContainerResolver> = new Map<string, ContainerResolver>()

    singleton(key: string, concrete: any) {
        this.container.set(key, new SingletonDependency(concrete))
    }

    make(key: string): any {
        const dependency = this.container.get(key);

        return dependency != null ? this.container.get(key).make() : null;
    }
}