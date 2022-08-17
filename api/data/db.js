var mongoose = require('mongoose');
var dburl = 'mongodb://Shovit69:Messidona69%40@ac-5usl56b-shard-00-00.5ispzmk.mongodb.net:27017,ac-5usl56b-shard-00-01.5ispzmk.mongodb.net:27017,ac-5usl56b-shard-00-02.5ispzmk.mongodb.net:27017/Shopping?ssl=true&replicaSet=atlas-rca0c5-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.Promise = global.Promise;
mongoose.connect(dburl);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connnected to ' + dburl);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnnected to' );
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connnected error' + dburl);
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination(SIGINT)');
        process.exit(0);
    });
});

process.on('SIGTERM', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination(SIGTERM)');
        process.exit(0);
    });
});

process.once('SIGUSR2', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination(SIGUSR2)');
        process.kill(process.pid, 'SIGUSR2');
    });
});

//bring in schemas and models
require('./models/product.model.js');
require('./models/user.model.js');
require('./models/cart.model.js');
// require('./models/order.model.js');
