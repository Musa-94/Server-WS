import WServer from './WServer';

const init = () => {
    const port = process.env.PORT || 3000;
    const ws = new WServer(port);

    ws.startServer();
};

init();