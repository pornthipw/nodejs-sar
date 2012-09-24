var app = angular.module('sar_service', ['ngResource']);

app.factory('SarDB', function($resource) {
    var SarDB  = $resource('/files/:year/:element/:type/:item/', 
      {year:'@year',element:'@element',type:'@type',item:'@item'},
      {}            
    );           
    return SarDB;
});

app.factory('CsvDB', function($resource) {
    var CsvDB  = $resource('/csv', 
      {},
      {}            
    );           
    return CsvDB;
});

app.factory('SarInfoDB', function($resource) {
    var SarInfoDB  = $resource('/info/:year/:element/:type/', 
      {year:'@year',element:'@element',type:'@type'},
      {}            
    );           
    return SarInfoDB;
});
