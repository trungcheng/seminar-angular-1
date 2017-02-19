angular.module('Seminar').controller('ValidationController', ValidationController);

function ValidationController ($http, $scope, ToastFactory) {
	$scope.register = function (form) {
		if(!form.$valid) {
			$scope.submitted = true;
			angular.element('input.ng-invalid').first().focus();
		}else {
			ToastFactory.popSuccess('Submit success !');
		}
	}
}