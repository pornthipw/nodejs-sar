angular.module('sar_service', ['ngResource']).
  factory('SarDB', function($resource) {
    var SarDB  = $resource('/files/:year/:element/:type/:item/', 
      {year:'@year',element:'@element',type:'@type',item:'@item'},
      {}            
    );           
    return SarDB;
});

