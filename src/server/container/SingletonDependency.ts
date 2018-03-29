import ContainerResolver from "../contracts/container/ContainerResolver";

export default class SingletonDependency implements ContainerResolver {
    constructor(protected concrete: any) {

    }

    make(): any {
        return this.concrete
    }
}