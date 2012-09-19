var app = angular.module('gradsar', ['sar_service']);


app.config(function($routeProvider) {
  $routeProvider.
    when('/', {controller:SARController, templateUrl:'/static/index.html'}).    
    when('/upload', {controller:UploadController, templateUrl:'/static/upload.html'}).
    when('/:saryear', {controller:SARController, templateUrl: '/static/urlRouter.html'}).
    when('/:saryear/:element', {controller:SARController, templateUrl:'/static/urlRouter.html'});
	
});


function UploadController($scope,SarDB) {
  $scope.file_item = SarDB.get({year:'2555',element:'1',type:'1.1',item:'1'});
  console.log($scope.file_item);
  
  
  $scope.elements = [
    {id:'1', name:'องค์ประกอบที่ 1', description:'ปรัชญา ปณิธาน วัตถุประสงค์ และแผนดำเนินการ', id1:true},
    {id:'7', name:'องค์ประกอบที่ 7', description:'การบริหารและการจัดการ', id7:true},
    {name:'white', shade:'light'},
    {name:'red', shade:'dark'},
    {name:'blue', shade:'dark'},
    {name:'yellow', shade:'light'}
  ];
  
  $scope.types1 = [
    {element_id:'1', id:'1_1', name:'กระบวนการพัฒนาแผน',id1_1:true},    
  ];
  
  $scope.items1_1 = [
    {type_id:'1_1', id:'1', name:'มีการจัดทำแผนกลยุทธ์ที่สอดคล้องกับนโยบายของสภาสถาบัน โดยการมีส่วนร่วมของบุคลากรในสถาบัน และได้รับความเห็นชอบจากสภาสถาบันโดยเป็นแผนที่เชื่อมโยงกับปรัชญาหรือ ปณิธานและพระราชบัญญัติสถาบัน ตลอดจนสอดคล้องกับจุดเน้นของกลุ่มสถาบัน กรอบแผนอุดมศึกษาระยะยาว 15 ปี ฉบับที่ 2 (พ.ศ. 2551-2565) และแผนพัฒนาการศึกษาระดับอุดมศึกษา ฉบับที่ 10 (พ.ศ. 2551-2554)'},    
  ];
  
  
  $scope.types7 = [    
    {element_id:'7', id:'7_1', name:'ภาวะผู้นำของสภาสถาบันและผู้บริหารทุกระดับของสถาบัน', type7_1:true},
    {element_id:'7', id:'7_2', name:'การพัฒนาสถาบันสู่สถาบันเรียนรู้ ', type7_2:true},
    {element_id:'7', id:'7_3', name:'การพัฒนาสถาบันสู่สถาบันเรียนรู้ ', type7_3:true},
  ];
  
  
  $scope.$watch($scope.element, function(x) {
    console.log('change');
  });
        
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

