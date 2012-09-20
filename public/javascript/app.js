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
    {id:'8', name:'องค์ประกอบที่ 8', description:'การเงินและงบประมาณ', id8:true},
    {id:'9', name:'องค์ประกอบที่ 9', description:'การเงินและงบประมาณ', id9:true},
    {id:'10', name:'องค์ประกอบที่ 10', description:'การเงินและงบประมาณ', id10:true},
  ];
  
    $scope.types1 = [
	{element_id:'1', id:'1_1', name:'กระบวนการพัฒนาแผน',id1_1:true},    
    ];
  
    $scope.items1_1 = [
        {type_id:'1_1', id:'1', name:'เกณฑ์ประเมินข้อ 1', description:'มีการจัดทำแผนกลยุทธ์ที่สอดคล้องกับนโยบายของสภาสถาบัน โดยการมีส่วนร่วมของบุคลากรในสถาบัน และได้รับความเห็นชอบจากสภาสถาบันโดยเป็นแผนที่เชื่อมโยงกับปรัชญาหรือ ปณิธานและพระราชบัญญัติสถาบัน ตลอดจนสอดคล้องกับจุดเน้นของกลุ่มสถาบัน กรอบแผนอุดมศึกษาระยะยาว 15 ปี ฉบับที่ 2 (พ.ศ. 2551-2565) และแผนพัฒนาการศึกษาระดับอุดมศึกษา ฉบับที่ 10 (พ.ศ. 2551-2554)'},
        {type_id:'1_1', id:'2', name:'เกณฑ์ประเมินข้อ 2', description:'มีการถ่ายทอดแผนกลยุทธ์ระดับหน่วยงานไปสู่ทุกงานย่อยภายใน'},
        {type_id:'1_1', id:'3', name:'เกณฑ์ประเมินข้อ 3', description:'มีกระบวนการแปลงแผนกลยุทธ์เป็นแผนปฏิบัติการประจำปีครบ 4 พันธกิจ คือ ด้านการเรียนการสอน การวิจัย การบริการทางวิชาการ และการทำนุบำรุงศิลปะและวัฒนาธรรมน'},
        {type_id:'1_1', id:'4', name:'เกณฑ์ประเมินข้อ 4', description:'มีตัวบ่งชี้ของแผนกลยุทธ์ แผนปฏิบัติการประจำปี และค่าเป้าหมายของแต่ละตัวบ่งชี้เพื่อวัดความสำเร็จของการดำเนินงานตามแผนกลยุทธ์และแผนปฏิบัติการประจำปี'},
        {type_id:'1_1', id:'5', name:'เกณฑ์ประเมินข้อ 5', description:'มีการดำเนินงานตามแผนปฏิบัติการประจำปีครบ 4 พันธกิจ'},
        {type_id:'1_1', id:'6', name:'เกณฑ์ประเมินข้อ 6', description:'มีการติดตามผลการดำเนินงานตามตัวบ่งชี้ของแผนปฏิบัติการประจำปี อย่างน้อยปีละ 2 ครั้ง และรายงานผลต่อผู้บริหารเพื่อพิจารณา'},
        {type_id:'1_1', id:'7', name:'เกณฑ์ประเมินข้อ 7', description:'มีการประเมินผลการดำเนินงานตามตัวบ่งชี้ของแผนกลยุทธ์ อย่างน้อยปีละ 1 ครั้ง และรายงานผลต่อผู้บริหารเพื่อพิจารณา'},
        {type_id:'1_1', id:'8', name:'เกณฑ์ประเมินข้อ 8', description:'มีการนำผลการพิจารณา ข้อคิดเห็น และข้อเสนอแนะของคณะกรรมการของหน่วยงานไปปรับปรุงแผนกลยุทธ์และแผนปฏิบัติการประจำปี'},
    
    ];
  
  
    $scope.types7 = [    
    {element_id:'7', id:'7_1', name:'7.1 ภาวะผู้นำของสภาสถาบันและผู้บริหารทุกระดับของสถาบัน', id7_1:true},
    {element_id:'7', id:'7_2', name:'7.2 การพัฒนาสถาบันสู่สถาบันเรียนรู้ ', id7_2:true},
    {element_id:'7', id:'7_3', name:'7.3 ระบบสารสนเทศเพื่อการบริหารและการตัดสินใจ', id7_3:true},
    {element_id:'7', id:'7_4', name:'7.4 ระบบบริหารความเสี่ยง', id7_4:true}
  ];
  
    $scope.items7_1 = [
        {type_id:'7_1', id:'1', name:'เกณฑ์ประเมินข้อ 1', description:'หน่วยงานปฏิบัติหน้าที่ตามที่กฎหมายกำหนดครอบถ้วนและมีการประเมินตนเองตามหลักเกณฑ์ที่กำหนดล่วงหน้า'},
        {type_id:'7_1', id:'2', name:'เกณฑ์ประเมินข้อ 2', description:'ผู้บริหารมีวิสัยทัศน์ กำหนดทิศทางการดำเนินงาน และสามารถถ่ายทอดไปยังบุคลากรทุกระดับ มีความสามารถในการวางแผนกลยุทธ์ มีการนำข้อมูลสารสนเทศเป็นฐานในการปฏิบัติงานและพัฒนาหน่วยงาน'},
        {type_id:'7_1', id:'3', name:'เกณฑ์ประเมินข้อ 3', description:'ผู้บริหารมีการกำกับ ติดตามและประเมินผลการดำเนินงานตามที่มอบหมาย รวมทั้งสามารถสื่อสารแผนและผลการดำเนินงานของหน่วยงานไปยังบุคลากรในหน่วยงาน'},
        {type_id:'7_1', id:'4', name:'เกณฑ์ประเมินข้อ 4', description:'ผู้บริหารสนับสนุนให้บุคลากรในหน่วยงานมีส่วนร่วมในการบริหารจัดการ ให้อำนาจในการตัดสินใจแก่บุคลากรตามความเหมาะสม'},
        {type_id:'7_1', id:'5', name:'เกณฑ์ประเมินข้อ 5', description:'ผู้บริหารถ่ายทอดความรู้และส่งเสริมพัฒนาผู้ร่วมงาน เพื่อให้สามารถทำงานบรรลุวัตถุประสงค์ของหน่วยงานเต็มตามศักยภาพ'},
        {type_id:'7_1', id:'6', name:'เกณฑ์ประเมินข้อ 6', description:'ผู้บริหารบริหารงานด้วยหลักธรรมภิบาล โดยคำนึงถึงประโยชน์ของหน่วยงานและผู้มีส่วนได้ส่วนเสีย'},
        {type_id:'7_1', id:'7', name:'เกณฑ์ประเมินข้อ 7', description:'หน่วยงานประเมินผลการบริหารงานของสถาบันและผู้บริหารนำเผลการประเมินไปปรับปรุงการบริหารงานอย่างเป็นรูปธรรม'}
    ];
    
    $scope.items7_2 = [
        {type_id:'7_2', id:'1', name:'เกณฑ์ประเมินข้อ 1', description:'มีการกำหนดประเด็นความรู้และเป้าหมายของการจัดการความรู้ที่สอดคล้องกับแผนกลยุทธ์ของหน่วยงานอย่างน้อยครอบคลุมพันธกิจหลักของหน่วยงาน '},
        {type_id:'7_2', id:'2', name:'เกณฑ์ประเมินข้อ 2', description:'กำหนดบุคลากรกลุ่มเป้าหมายที่จะพัฒนาความรู้และทักษะด้านการผลิตบัณฑิตและด้านการวิจัยอย่างชัดเจนตามประเด็นความรู้ที่กำหนดในข้อ 1'},
        {type_id:'7_2', id:'3', name:'เกณฑ์ประเมินข้อ 3', description:'มีการแบ่งปันและแลกเปลี่ยนเรียนรู้จากความรู้ ทักษะของผู้มีประสบการณ์ตรง (tacit knowledge) เพื่อค้นหาแนวปฏิบัติที่ดีตามประเด็นความรู้ที่กำหนดในข้อ 1 และเผยแพร่ไปสู่บุคลากรกลุ่มเป้าหมายที่กำหนด'},
        {type_id:'7_2', id:'4', name:'เกณฑ์ประเมินข้อ 4', description:'มีการรวบรวมความรู้ตามประเด็นความรู้ที่กำหนดในข้อ 1 ทั้งที่มีอยู่ในตัวบุคคลและแหล่งเรียนรู้อื่น ๆ ที่เป็นแนวปฏิบัติที่ดีมาพัฒนาและจัดเก็บอย่างเป็นระบบโดยเผยแพร่ออกมาเป็น ลายลักษณ์อักษร (explicit knowledge)'},
        {type_id:'7_2', id:'5', name:'เกณฑ์ประเมินข้อ 5', description:'มีการนำความรู้ที่ได้จากการจัดการความรู้ในปีการศึกษาปัจจุบันหรือปีการ ศึกษาที่ผ่านมา ที่เป็นลายลักษณ์อักษร (explicit knowledge) และจากความรู้ ทักษะของผู้มีประสบการณ์ตรง (tacit knowledge) ที่เป็นแนวปฏิบัติที่ดีมาปรับใช้ในการปฏิบัติงานจริง'}
    ];
    
    $scope.items7_3 = [
        {type_id:'7_2', id:'1', name:'เกณฑ์ประเมินข้อ 1', description:'มีระบบสารสนเทศเพื่อการบริหารและการตัดสินใจตามพันธกิจของหน่วยงาน โดยอย่างน้อยต้องครอบคลุมการจัดการเรียนการสอน การวิจัย การบริหารจัดการ และการเงิน และสามารถนำไปใช้ในการดำเนินงานประกันคุณภาพ'},
        {type_id:'7_2', id:'2', name:'เกณฑ์ประเมินข้อ 2', description:'มีการประเมินความพึงพอใจของผู้ใช้ระบบสารสนเทศ'},
        {type_id:'7_2', id:'3', name:'เกณฑ์ประเมินข้อ 3', description:'มีการนำผลการประเมินความพึงพอใจของผู้ใช้ระบบสารสนเทศมาปรับปรุงระบบสารสนเทศ'},
        {type_id:'7_2', id:'4', name:'เกณฑ์ประเมินข้อ 4', description:'มีการส่งข้อมูลผ่านระบบเครือข่ายของหน่วยงานภายนอกที่เกี่ยวข้องตามที่กำหนด'},
        {type_id:'7_2', id:'5', name:'เกณฑ์ประเมินข้อ 5', description:'มีแนวปฏิบัติที่ดีหรือนวัตกรรมในระบบสารสนเทศเพื่อการบริหารและการตัดสินใจ'}
    ];
    
    $scope.items7_4 = [
        {type_id:'7_2', id:'1', name:'เกณฑ์ประเมินข้อ 1', description:'มีการแต่งตั้งคณะกรรมการหรือคณะทำงานบริหารความเสี่ยง โดยมีผู้บริหารระดับสูงและตัวแทนที่รับผิดชอบพันธกิจหลักของสถาบันร่วมเป็น คณะกรรมการหรือคณะทำงาน'},
        {type_id:'7_2', id:'2', name:'เกณฑ์ประเมินข้อ 2', description:'มีการวิเคราะห์และระบุความเสี่ยง และปัจจัยที่ก่อให้เกิดความเสี่ยงอย่างน้อย 3 ด้านตามบริบทของสถาบัน ตัวอย่างเช่น'},
        {type_id:'7_2', id:'3', name:'เกณฑ์ประเมินข้อ 3', description:'มีการประเมินโอกาสและผลกระทบของความเสี่ยงและจัดลำดับความเสี่ยงที่ได้จากการวิเคราะห์ในข้อ 2'},
        {type_id:'7_2', id:'4', name:'เกณฑ์ประเมินข้อ 4', description:'มีการจัดทำแผนบริหารความเสี่ยงที่มีระดับความเสี่ยงสูง และดำเนินการตามแผน'},
        {type_id:'7_2', id:'5', name:'เกณฑ์ประเมินข้อ 5', description:'มีการติดตาม และประเมินผลการดำเนินงานตามแผน และรายงานต่อสภาสถาบันเพื่อพิจารณาอย่างน้อยปีละ 1 ครั้ง'},
        {type_id:'7_2', id:'6', name:'เกณฑ์ประเมินข้อ 6', description:'มีการนำผลการประเมิน และข้อเสนอแนะจากสภาสถาบันไปใช้ในการปรับแผนหรือวิเคราะห์ความเสี่ยงในรอบปีถัดไป'}
    ];
    
    $scope.types8 = [
        {element_id:'8', id:'8_1', name:'ระบบและกลไกการเงินและงบประมาณ',id8_1:true}
    ];
    
    $scope.items8_1 = [
        {type_id:'8_1', id:'1', name:'เกณฑ์ประเมินข้อ 1', description:'มีแผนกลยุทธ์ทางการเงินที่สอดคล้องกับแผนกลยุทธ์ของมหาวิทยาลัย'},
        {type_id:'8_1', id:'2', name:'เกณฑ์ประเมินข้อ 2', description:'มีแนวทางจัดหาทรัพยากรทางด้านการเงิน หลักเกณฑ์การจัดสรร และการวางแผนการใช้เงินอย่างมีประสิทธิภาพโปร่งใส ตรวจสอบได้'},
        {type_id:'8_1', id:'3', name:'เกณฑ์ประเมินข้อ 3', description:'มีงบประมาณประจำปีที่สอดคล้องกับแผนปฏิบัติการในแต่ละพันธกิจและการพัฒนาหน่วยงานและบุคลากร'},
        {type_id:'8_1', id:'4', name:'เกณฑ์ประเมินข้อ 4', description:'มีการจัดทำรายงานทางการเงินอย่างเป็นระบบ และรายงานต่อมหาวิทยาลัยอย่างน้อยปีละ 2 ครั้ง'},
        {type_id:'8_1', id:'5', name:'เกณฑ์ประเมินข้อ 5', description:'มีการนำข้อมูลทางการเงินไปใช้ในการวิเคราะห์ค่าใช้จ่าย และวิเคราะห์สถานะทางการเงินและความมั่นคงของหน่วยงานอย่างต่อเนื่อง'},
        {type_id:'8_1', id:'6', name:'เกณฑ์ประเมินข้อ 6', description:'มีหน่วยงานตรวจสอบภายในและภายนอก ทำหน้าที่ตรวจ ติดตามการใช้เงินให้เป็นไปตามระเบียบและกฎเกณฑ์ที่หน่วยงานกำหนด'},
        {type_id:'8_1', id:'7', name:'เกณฑ์ประเมินข้อ 7', description:'ผู้บริหารระดับสูงมีการติดตามผลการใช้เงินให้เป็นไปตามเป้าหมาย และนำข้อมูลจากรายงานทางการเงินไปใช้ในการวางแผนและการตัดสินใจ'}
    ];
    
        $scope.types9 =[
        {element_id:'9', id:'9_1', name:'ระบบและกลไกการประกันคุณภาพการศึกษาภายใน ',id9_1:true},
    ];
  
    $scope.items9_1 = [
        {type_id:'9_1', id:'1', name:'เกณฑ์ประเมินข้อ 1', description:'มีระบบและกลไกการประกันคุณภาพการศึกษาภายในที่เหมาะสมและสอดคล้องกับพันธกิจและพัฒนาของหน่วยงาน และดำเนินการตามระบบที่กำหนด'},
        {type_id:'9_1', id:'2', name:'เกณฑ์ประเมินข้อ 2', description:'มีการกำหนดนโยบายและให้ความสำคัญเรื่องการประกันคุณภาพการศึกษาภายในโดยคณะกรรมการระดับผู้บริหารสูงสุดของหน่วยงาน '},
        {type_id:'9_1', id:'3', name:'เกณฑ์ประเมินข้อ 3', description:'มีการกำหนดตัวบ่งชี้เพิ่มเติมตามอัตลักษณ์ของหน่วยงาน'},
        {type_id:'9_1', id:'4', name:'เกณฑ์ประเมินข้อ 4', description:'มีการดำเนินงานด้านการประกันคุณภาพการศึกษาภายในที่ครบถ้วน ประกอบด้วย 1) การควบคุม ติดตามการดำเนินงาน และประเมินคุณภาพ 2) การจัดทำรายงานประจำปีที่เป็นรายงานประเมินคุณภาพการประกันคุณภาพ'},
        {type_id:'9_1', id:'5', name:'เกณฑ์ประเมินข้อ 5', description:'มีการนำผลการประกันคุณภาพการศึกษาภายในมาปรับปรุงการทำงาน และส่งผลให้มีการพัฒนาผลการดำเนินงานตามตัวบ่งชี้ของแผนกลยุทธ์ทุกตัวบ่งชี้ '},
        {type_id:'9_1', id:'6', name:'เกณฑ์ประเมินข้อ 6', description:'มีระบบสารสนเทศที่ให้ข้อมูลสนับสนุนการประกันคุณภาพการศึกษาภายในครบทั้ง 9 องค์ประกอบคุณภาพ'},
        {type_id:'9_1', id:'7', name:'เกณฑ์ประเมินข้อ 7', description:'มีส่วนร่วมของผู้มีส่วนได้ส่วนเสียในการประกันคุณภาพการศึกษา '},
        {type_id:'9_1', id:'8', name:'เกณฑ์ประเมินข้อ 8', description:'มีเครือข่ายการแลกเปลี่ยนเรียนรู้ด้านการประกันคุณภาพการศึกษาระหว่างหน่วยงานและมีกิจกรรมร่วมกัน'},
        {type_id:'9_1', id:'9', name:'เกณฑ์ประเมินข้อ 9', description:'มีแนวปฏิบัติที่ดีหรืองานวิจัยด้านการประกันคุณภาพการศึกษาที่หน่วยงานพัฒนาขึ้นและเผยแพร่ให้หน่วยงานอื่นสามารถนำไปใช้ประโยชน์'}
    ];
  
    $scope.types10 = [
        {element_id:'10', id:'10_1', name:'ระบบและกลไกการประกันคุณภาพการศึกษาภายใน ',id10_1:true},
    ];
  
    $scope.items10_1 = [
        {type_id:'10_1', id:'1', name:'เกณฑ์ประเมินข้อ 1', description:'กำหนดนโยบายการกำกับมาตรฐานการศึกษาระดับบัณฑิตศึกษา '},
        {type_id:'10_1', id:'2', name:'เกณฑ์ประเมินข้อ 2', description:'มีระบบและกลไกการกำกับมาตรฐานการศึกษาระดับบัณฑิตศึกษา '},
        {type_id:'10_1', id:'3', name:'เกณฑ์ประเมินข้อ 3', description:'มีการดำเนินงานในการกำกับมาตรฐานการศึกษาระดับบัณฑิตศึกษาด้าน '},
        {type_id:'10_1', id:'4', name:'เกณฑ์ประเมินข้อ 4', description:'มีการติดตามประเมินผลการดำเนินงานและรายงานผลการประเมิน '},
        {type_id:'10_1', id:'5', name:'เกณฑ์ประเมินข้อ 5', description:'มีการนำผลการประเมินมาปรับปรุงพัฒนาการดำเนินงาน '}
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
  
    $scope.showMainPage =true;
  
    $scope.restrictedAction = function(){
	console.log("restrictedAction");
	$scope.showLoginPage =true;
	$scope.showMainPage =false;
	$scope.showContentPage=false;
    };  
    
    
    $scope.submit = function() {
	console.log("username-->"+$scope.username+'password'+$scope.password);
	$scope.showContentPage=true;
	$scope.showLoginPage =false;
	$scope.showMainPage =false;
	//$http.post('auth/login').success(function() {
        //authService.loginConfirmed();
      //});
    }
  
};



