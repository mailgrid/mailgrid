export default interface ContainerInterface {
    
    singleton(key: string, concrete: any): any
    
    make<T>(key: string): T
}