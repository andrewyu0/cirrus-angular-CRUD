var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope){
	$scope.myMessage = "You're not entitled to an answer, HAL";
});