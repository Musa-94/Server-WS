import http from 'http';
import WebSocket from 'ws';
import App from './App';

class WServer {
    constructor(port) {
        this._port = port;

        this._app = new App();
        this._server = http.createServer(null, this._app.getApp());
        this._webSocketServer = new WebSocket.Server({ server: this._server });

        this._clients = new Set();

        this._webSocketServer.on('connection', this.handleCon.bind(this));
    }

    handleCon = ws => {
        this._clients.add(ws);

        ws.on('message', data => {
            data = JSON.parse(data);

            let linesModel = this._controller.getLines();

            client.send(JSON.stringify(linesModel));
            console.log(linesModel);
            
        });
    }

    startServer = () => {
        console.log('SERVER HAS BEEN STARTED ON PORT:', this._port);
        this._server.listen(this._port);
    }
}

export default WServer;