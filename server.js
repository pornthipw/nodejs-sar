var express = require("express");
var mongodb = require('mongodb');
var handlebars = require('hbs');
var _ = require('underscore');

var config = require('./config');
var routes = require('./routes');
var utils = require('./utils');

var app = express();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));    
  app.set('views', __dirname + '/views');
  app.engine('html', handlebars.__express);  
  app.set('view engine', 'html');      
  app.use(express.methodOverride());
});

//Set up database stuff
var host = config.mongodb.server || 'localhost';
var port = config.mongodb.port || mongodb.Connection.DEFAULT_PORT;
var dbOptions = {
  auto_reconnect: config.mongodb.autoReconnect,
  poolSize: config.mongodb.poolSize
};

var database;
var sarinfo = [];

var db = new mongodb.Db('sar', new mongodb.Server(host, port, dbOptions));


var updateSarInfo = function(db, callback) {    
    sarinfo = [];
    db.collectionNames(function(err, result) {        
        for (var r in result) {            
            var coll = utils.parseCollectionName(result[r].name);        
            db.collection(coll.name, function(err, collection) {     
                var self = coll.name;                           
                collection.findOne({type:'sar_info'}, function(err, doc) {
                    if(!err && doc) {
                        console.log('result -> '+JSON.stringify(doc) +'  '+self);
                        sarinfo.push({collection:self, content:doc});
                    }
                });
            });             
        }        
    });
};

db.open(function(err, db) {
    if (err) {
        throw err;
    }
    console.log('Database connected');
    database = db;        
    updateSarInfo(db);        
});


var middleware = function(req, res, next) {
    req.database = database;
    next();
};

app.locals({        
    baseHref:config.site.baseUrl
});




app.get('/sar/:collection/:element/:type/:item', middleware, function(req, res) {
    console.log(req.params.collection);
    req.database.collection(req.params.collection, function(err, collection) {
        
        if(err) {
            console.log(err);
        }
        
        collection.find({'element':req.params.element, 'type':req.params.type, 'item':req.params.item}).toArray(function(err, docs) {            
            res.json(docs);
        });
    });    
});


app.get('/sar', middleware, function(req, res) {
  res.json(sarinfo);  
});

app.get('/', middleware, routes.index);

app.listen(config.site.port || 3000);

console.log("Mongo Express server listening on port " + (config.site.port || 3000));

