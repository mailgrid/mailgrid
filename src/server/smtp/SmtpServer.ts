const NodeMailerSMTPServer = require('smtp-server').SMTPServer;

export default class SmtpServer {

    protected host:any = false
    protected server:any
    
    constructor (protected port:number) {
        this.server = new NodeMailerSMTPServer({
            logger: false,
            banner: 'Welcome to MailGrid Fake SMTP Server',
            size: 10 * 1024 * 1024,
            useXClient: true,
            hidePIPELINING: true,
            useXForward: true,
            onAuth: this.onAuth,
            onMailFrom: this.onMailFrom,
            onRcptTo: this.onRcptTo,
            onData: this.onData
        })

        this.server.on('error', this.onError);
    }

    start ():any {
        return this.server.listen(this.port, this.host);
    }

    protected onAuth(auth: any, session: any, callback: any): any {
        return callback(null, {
            user: 'userdata'
        })
    }

    protected onMailFrom(address: any, session: any, callback: any): any {
        callback()
    }

    protected onRcptTo(address: any, session: any, callback: any): any {
        callback()
    }

    protected onData(stream: any, session: any, callback: any): any {
        stream.pipe(process.stdout)
        stream.on('end', () => {
            let err;
            if (stream.sizeExceeded) {
                err = new Error('Error: message exceeds fixed maximum message size 10 MB')
                err.responseCode = 552
                return callback(err)
            }
            callback(null, 'Message queued as abcdef')
        });
    }

    protected onError(err: any): void {
        console.log('Error occurred');
        console.log(err);
    }
}