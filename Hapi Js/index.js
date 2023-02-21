const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes');

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedtopology: true,
});

const db = mongoose.connection;

const init =  async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.start();
    console.log('Server is running on', server.info.uri);
    server.route(routes);
};

db.on('connected', () => {
    console.log('DB Connected');
    init();
});

db.on('dicconnected', () => {
    console.log('DB Connection terminated');
});

process.on('unhandledRejection', (err) => {
    console.log('Exception occurs', err);
})


