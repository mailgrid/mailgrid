import ServiceProviderInterface from "../../contracts/foundation/ServiceProviderInterface";
import ApplicationInterface from "../../contracts/foundation/ApplicationInterface";
import SmtpServer from "../SmtpServer";

export default class SmtpServiceProvider implements ServiceProviderInterface {
    register(app: ApplicationInterface): void {
        app.getContainer().singleton(
            'Smtp/SmtpServer',
            new SmtpServer(2525)
        )
    }

    boot(app: ApplicationInterface): void {
        app.getContainer().make<SmtpServer>('Smtp/SmtpServer').start()
    }
}