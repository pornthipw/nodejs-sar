var app = angular.module('gradsar', ['sar_service']);

app.config(function($routeProvider) {
    $routeProvider.
	//when('/', {controller:FileController, templateUrl:'/static/index.html'}).    
	//when('/upload', {controller:UploadController, templateUrl:'/static/upload.html'}).
	when('/path/:saryear', {controller:PathController, templateUrl:'/static/urlRouter.html'}).
	when('/path/:saryear/:element', {controller:PathController, templateUrl:'/static/urlRouter.html'}).
	// when('/path/:saryear/:element/:type', {controller:PathController, templateUrl:'/static/urlRouter.html'}).
	// when('/path/:saryear/:element/:type/:item', {controller:PathController, templateUrl:'/static/urlRouter.html'}).
	when('/upload/:saryear/:element/:type/:item', {controller:UploadController, templateUrl:'/static/upload.html'}).
	when('/csv', {controller:CSVController, templateUrl:'/static/csv.html'}).
	when('/:saryear', {controller:SARController, templateUrl: '/static/urlRouter.html'}).	
	when('/:saryear/:element', {controller:SARController, templateUrl:'/static/urlRouter.html'});	
});

app.directive('inlineedit', function() {
    return {
        restrict: 'E',
        scope: {
            model: '=model',            
        },
        controller: function($scope, $element) {
            $scope.editMode = false;
            $scope.changeMode = function() {
                if ($scope.editMode) {
                    $scope.editMode = false;
                } else {
                    $scope.editMode = true;
                }
            };            
        },
        link: function($scope, element, attrs) {

        },
        template: 
'<span ng-hide="editMode" ng-click="changeMode()">{{model}}' + 
'<span><button class="btn btn-link" ng-click="changeMode()">'+
'<i class="icon-edit"></i></button></span></span>'+ 
'<span ng-show="editMode">'+
'<input type="text" ng-model="model">'+
'<button class="btn btn-primary" ng-click="changeMode()">Save</button>'+
'</span>'
    };
});


app.directive('filelist', function(SarDB) {
  return {
    restrict:"E",    
    scope: {
      year:'=year'
    },
    link:function ($scope, element, attrs) {                                                  
      SarDB.query({
        year:$scope.year,
        element:attrs.element,
        type:attrs.type,
        item:attrs.item},function(content) {
          var htmlStr = '<ol>';
          for(var idx in content) {   
            console.log(content[idx]);                   
            htmlStr+='<li><a href="/file/'+content[idx].file_id+'">'+content[idx].title+'</a></li>'
          }
          htmlStr+="</ol>";
          element.replaceWith(htmlStr);
      });                
    }
  };
});


app.directive('getvalue', function(SarDB) {
  return {
    restrict:"E",    
    scope: {
      description:'=model'
    },
    link:function ($scope, element, attrs) {                                                  
        console.log($scope.description);
        var htmlStr = '';
        for(var idx in $scope.description) {
            if($scope.description[idx].type == attrs.type) {                                
                htmlStr = $scope.description[idx][attrs.key];                                
            }
        }        
        element.replaceWith(htmlStr);                          
    }
  };
});


app.directive ('unfocus', function() { 
    return {
        restrict: 'A',
        link: function ($scope, element, attribs) {
            

        }
    } 
});


function PathController($scope, $routeParams, SarDB) {
    $scope.saryear = $routeParams.saryear;
    $scope.templateUrl = '/static/'+$scope.saryear+'/index.html';
    if($routeParams.element) {
	$scope.element = $routeParams.element;
//	$scope.type = $routeParams.type;
//	$scope.item = $routeParams.item;
	$scope.templateUrl = '/static/'+$scope.saryear+'/'+$scope.element+'/index.html';

    } 
    /*
    if($routeParams.type) {
	$scope.type = $routeParams.type;
	$scope.templateUrl = '/static/'+$scope.saryear+'/'+$scope.element+'/'+$scope.type+'/index.html';
    }
    
    if($routeParams.item) {
	$scope.item = $routeParams.item;
	$scope.templateUrl = '/static/'+$scope.saryear+'/'+$scope.element+'/'+$scope.type+'/'+$scope.item+'.html';
	$scope.file_list = SarDB.get({year:$scope.saryear,element:$scope.element,type:$scope.type,item:$scope.item});
    }
    */
    $scope.description = {
        t1_1: {current_score:'5', owner:'พรทิพย์ เม่นสิน'}
    };
        //{type:'1_1', element:'1', current_score:'5', owner:'พรทิพย์ เม่นสิน'},
        //{type:'1_2', element:'1', current_score:'5', owner:'พรทิพย์ '}
    //];
    $scope.saveInfo = function(){
        
    }
    
    //$scope.enableEdit = function() { $scope.edit = true; }
    //$scope.disableEdit = function() { $scope.edit = false;  }

};

function CSVController($scope, CsvDB) {
    $scope.csv_table = CsvDB.query();
};

function FileController($scope, SarDB) { 
    $scope.viewFile = function(){
	$scope.view = SarDB.get({file:'505b8be83d5d583015000003'});
    };
};

function UploadController($scope, $routeParams, SarDB) {
  //$scope.file_item = SarDB.get({year:'2555',element:'1',type:'1.1',item:'1'});
  //$scope.file_item = SarDB.get({year:$routeParams.saryear,element:'1',type:'1_1',item:'1'});
  //$scope.sar_year = $routeParams.saryear;
  //$scope.sar_year = '2555';
  //console.log("test"+JSON.stringify($scope.file_item));
  console.log('Execute');
    $scope.saryear = $routeParams.saryear;
    $scope.element = $routeParams.element;
    $scope.type = $routeParams.type;
    $scope.item = $routeParams.item;
    
        
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
    
function SARController($scope, $routeParams, SarDB) {
    if(!$routeParams.element) {
	    $scope.templateUrl = '/static/'+$routeParams.saryear+'/main.html';
    } else {
	    $scope.templateUrl = '/static/'+$routeParams.saryear+'/'+$routeParams.element+'.html';
    }
   //$scope.file_item = SarDB.get({year:'2555',element:'1',type:'1.1',item:'1'});
    console.log('load SARController');
    console.log($routeParams);
    $scope.sar_year = 2555;
    $scope.sar_list = SarDB.query();    
  
    $scope.list_file = function(element, type, item) {
	return [
	    {'filename':'test2.js', 'name_id':'1.1.1','description':'ทดสอบ 1'},
	    {'filename':'test1.js', 'name_id':'1.1.1','description':'ทดสอบ 2'}
	];
    };   
  

    
    

  
};



