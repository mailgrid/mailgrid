import { Server } from "http";

declare module 'socket.io' {
    function socketio(httpServer: Server): any {}
    export { socketio };
}