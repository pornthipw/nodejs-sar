angular.module('sar_service', ['ngResource']).
    factory('SarDB', function($resource) {
        var SarDB  = $resource('/sar/:collection/:element/:type/:item/', 
            {collection:'@collection'},
            {}            
        );           
        return SarDB;
});

