var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://Shovit69:Messidona69%40@ac-5usl56b-shard-00-00.5ispzmk.mongodb.net:27017,ac-5usl56b-shard-00-01.5ispzmk.mongodb.net:27017,ac-5usl56b-shard-00-02.5ispzmk.mongodb.net:27017/Shopping?ssl=true&replicaSet=atlas-rca0c5-shard-0&authSource=admin&retryWrites=true&w=majority';
var _connection = null;

//set connecton
var open = function () {
        MongoClient.connect(dburl, function (err, db) {
            if(err){
                console.log("DB connection failed");
                return;
            }
            _connection = db;
            console.log("DB connection open", db);
        });
};
//get a connection when its been created
var get = function () {
    return _connection;
};

module.exports = {
    open: open,
    get: get
};