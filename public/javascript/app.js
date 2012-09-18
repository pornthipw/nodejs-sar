var app = angular.module('gradsar', ['sar_service']);


app.config(function($routeProvider) {
  $routeProvider.
    //when('/', {controller:SARController, templateUrl:'/static/main.html'}).
    when('/2555', {controller:SARController, templateUrl:'/static/main.html'}).
    when('/2555/1', {controller:SARController, templateUrl:'/static/2555/1.html'});
});


app.directive('filecontent',function () {
    return {                
        restrict:'E',
        link:function ($scope, element, attrs) {
            console.log(attrs.element);
            console.log(element);            
            
            console.log($scope.sar_list);
            
            var htmlText= "<ol>";
            var file_list = $scope.list_file(attrs.element, attrs.type, attrs.item);
            for(var idx in file_list) {
                htmlText += "<li>&nbsp; ("+file_list[idx].name_id+")  "+file_list[idx].filename+" "+file_list[idx].description+"</li>";
            }
            htmlText+="</ol>";
            
            //for(var result in results) {
            //    console.log('result '+result);
             //   htmlText += result;
            //}
            
            $scope.$watch(attrs.element, function (x) {
                console.log(' element = '+x);                
            });
            $scope.$watch(attrs.y, function (y) {
                element.css('top', y + 'px');
            });
            $scope.$watch(attrs.color, function (color) {
                element.css('backgroundColor', color);
            });
            
            element.replaceWith(htmlText);
        }
    };
    });
    
function SARController($scope,SarDB) {
  $scope.sar_year = 2555;
  $scope.sar_list = SarDB.query();    
  
  $scope.list_file = function(element, type, item) {
      return [
        {'filename':'test2.js', 'name_id':'1.1.1','description':'ทดสอบ 1'},
        {'filename':'test1.js', 'name_id':'1.1.1','description':'ทดสอบ 2'}
      ];
  }; 
  
  $('iframe#upload_target').load(function() {
    var data = $.parseJSON($('iframe#upload_target').contents().find("body")[0].innerHTML);
    if(data.success) {
      $scope.$apply(function(){
        $scope.success = true;
      });
    } else {
      $scope.$apply(function() {
        $scope.success = false;
        $scope.message = data.message;
      });
    }
  });      
  

  $scope.setFile = function(element) {
    $scope.$apply(function() {
      $scope.theFile = element.files[0];
    });
  };
  
};

