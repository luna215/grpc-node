const { createClient } = require('grpc-kit');
const client = createClient({
    protoPath: `${__dirname}/protos/greeter.proto`,
    packageName: 'greeter',
    serviceName: 'Greeter',
    options: {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
}, '0.0.0.0:50051');

client.hello({ name: 'Paul'}, (err, { message }) => {
    if(err) throw err;
    console.log(message);
});

client.goodbye({name: 'Paul'}, (err, { message }) => {
    if(err) throw err;
    console.log(message);
});