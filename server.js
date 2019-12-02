const { createServer } = require('grpc-kit');
const server = createServer();
const debug = require('debug')('server');

server.use({
    protoPath: `${__dirname}/protos/greeter.proto`,
    packageName: 'greeter',
    serviceName: 'Greeter',
    routes: {
        hello: (call, callback) => {
            debug('Hello request')
            callback(null, { message: `Hello ${call.request.name}` });
        },
        goodbye: async (call) => {
            debug('Goodbye request')
            return { message: `Goodbye, ${call.request.name}` };
        }
    },
    options: {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    }
});

server.listen("0.0.0.0:50051");