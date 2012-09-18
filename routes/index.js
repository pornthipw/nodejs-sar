//Add routes from other files

exports.index = function(req, res) {
    var ctx = {
       title : 'Graduate SAR', 
    };    
    res.render('index', ctx);
}
