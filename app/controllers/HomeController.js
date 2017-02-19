angular.module('Seminar').controller('HomeController', HomeController);

function HomeController ($http, $scope, $sce) {
	$scope.myText = $sce.trustAsHtml("My name is: <span style='color: blue'>Trung</span>");
	$scope.myname = 'Trung';
}