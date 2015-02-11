
app.controller('indexCtrl',['$scope','myService','myFactory',function($scope,myService,myFactory){
	$scope.data={
		title:'Hello, world!'
	}
	$scope.alertOpen=function(msg){
		myService.alertOpen(msg);
		myFactory.alertOpen(msg);
	}
}]);