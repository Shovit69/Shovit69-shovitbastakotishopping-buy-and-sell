var Product = require('./models/product.model');
var mongoose = require('mongoose');
var mongodbUri = 'mongodb://Shovit69:Messidona69%40@ac-5usl56b-shard-00-00.5ispzmk.mongodb.net:27017,ac-5usl56b-shard-00-01.5ispzmk.mongodb.net:27017,ac-5usl56b-shard-00-02.5ispzmk.mongodb.net:27017/Shopping?ssl=true&replicaSet=atlas-rca0c5-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(mongodbUri);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {

    var products = [
        new Product({
            title:"cake",
            imagePath:"https://s-media-cache-ak0.pinimg.com/736x/a0/92/31/a092319d68f18f2ee9e51676f9f1d740--butterfly-wedding-cake-butterfly-cakes.jpg",
            description:"chocolate cake",
            price:10,
            stars: 3.2,
            reviews:[{
                name: "shovit",
                id : "/user/shovit",
                review: "Great product",
                rating: 4
            }]
        }),
        new Product({
            title:"crab",
            imagePath:"http://www.fengshui-chinese.com/discuz/attachments/forumid_20/f_81089_2_eCwtlvqKVjpf.jpg",
            description:"red crab",
            price:20,
            stars: 3.8,
            reviews:[{
                name: "shovit",
                id : "/user/shovit",
                review: "Great product",
                rating: 4
            }]
        }),
        new Product({
            title:"mantis shrimp",
            imagePath:"http://m.wanhuajing.com/pic/1605/2806/4122308/o_260.jpg",
            description:"delicious shrimp",
            price:15,
            stars: 4.2,
            reviews:[{
                name: "shovit",
                id : "/user/shovit",
                review: "Great product",
                rating: 4
            }]
        }),
        new Product({
            title:"wine",
            imagePath:"http://www.dhresource.com/260x260s/f2-albu-g5-M01-8E-D9-rBVaJFlI6guANVIGAAH22nEO3vs876.jpg/2017-new-pvc-wine-beer-champagne-drink-cooler.jpg",
            description:"riesiling white wine",
            price:15,
            stars: 4.8,
            reviews:[{
                name: "shovit",
                id : "/user/shovit",
                review: "Great product",
                rating: 4
            }]
        })
    ]

//save data to database
    var done = 0;
    for(var i = 0; i < products.length; i++){
        products[i].save(function(err,result){
            done++;
            if(done === products.length){
                exit();
            }
        });
    }
});

function exit(){
    mongoose.disconnect();
}