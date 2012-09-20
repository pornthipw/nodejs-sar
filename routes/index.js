var mongodb = require('mongodb');
var config = require('../config');


//Add routes from other files

exports.index = function(req, res) {
  var ctx = {
     title : 'Graduate SAR', 
  };    
  res.render('index', ctx);
};

exports.getFile = function(req, res, next) {
  // var gridStore = new mongodb.GridStore(req.database, mongodb.ObjectID,req.files.file.name, 'w');
};


exports.listFile = function(req, res, next) {  
  // req.params [year, element, type, item]  
  console.log('listFile');  
  req.database.collection('sar'+req.params.year, function(err, collection) {
    if(err) {            
      res.json({success:false,message:err});              
    }
    collection.find({
        element:req.params.element, 
        type:req.params.type, 
        item:req.params.item}).toArray(function(err, docs) {
          if(err) {
            res.json({success:false,message:err});              
          }                                         
          var file_ids = [];
          for(var idx in docs) {
            file_ids.push(docs[idx].file_id);
          }          
          var gridStore = new mongodb.GridStore(req.database, new mongodb.ObjectID(), 'w');    
          gridStore.open(function(err, gridStore) {
            if(err) {
              console.log('GridStore '+err);
              res.json({success:false,message:err});              
            }                                                     
            gridStore.collection(function(err, collection) {
              if(err) {
                res.json({success:false,message:err});              
              }                                         
              collection.find({_id:{ $in: file_ids}}).toArray(function(err, docs) {
                console.log(docs.length);
                res.json({success:true,files:docs});            
                
              });
            });
          });
          
    });            
  });                    
};

exports.storeFile = function(req, res, next) {      
  // req.body { year: '2555', element: '1', type: '1.1', item: '1' , title:'namefile'}  
  
  // console.log(req.files.file);
  
  
  if(req.files.file) {          
    var gridStore = new mongodb.GridStore(req.database, new mongodb.ObjectID(),req.files.file.name, 'w', {content_type:req.files.file.type});    
    gridStore.open(function(err, gridStore) {
      gridStore.writeFile(req.files.file.path, function(err, doc) {                
        if(err) {          
          res.send(JSON.stringify({success:false,message:err}));              
        }

        gridStore.close(function(err, result) {
          if(err) {            
            res.send(JSON.stringify({success:false,message:err}));              
          }
          console.log('File id :'+result._id);          
          req.database.collection('sar'+req.body.year, function(err, collection) {
            if(err) {            
              res.send(JSON.stringify({success:false,message:err}));              
            }
            collection.insert({
                element:req.body.element, 
                type:req.body.type, 
                item:req.body.item,
                title:req.body.title,
                file_id:result._id}, function(err, result) {
                  if(err) {
                    res.send(JSON.stringify({success:false,message:err}));              
                  }                  
                  console.log('Doc id :'+result[0]._id);          
                  res.send(JSON.stringify({success:true,id:result[0]._id}));  
            });            
          });                  
        });
      });
    });    
  }
};
