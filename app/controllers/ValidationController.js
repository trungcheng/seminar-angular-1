angular.module('Seminar').controller('ValidationController', ValidationController);

function ValidationController ($http, $scope, ToastFactory) {
	$scope.register = function (form) {
		if(!form.$valid || $scope.Credential.password !== $scope.Credential.confirmpassword) {
			$scope.submitted = true;
			angular.element('input.ng-invalid').first().focus();
			ToastFactory.popErrors('Submit failed !');
		}else {
			ToastFactory.popSuccess('Submit success !');
		}
	}
}