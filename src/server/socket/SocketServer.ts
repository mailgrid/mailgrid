import * as socketio from 'socket.io'
import { Server } from 'http';

export default class SocketServer {
    protected io: any

    constructor(httpServer: Server) {
        this.io = socketio(httpServer)
    }
}