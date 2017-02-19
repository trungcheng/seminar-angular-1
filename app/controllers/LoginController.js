angular.module('Seminar').controller('LoginController', LoginController);

function LoginController ($state, $scope, $http, $cookieStore, ToastFactory, LoginService) {

	$scope.submited = false;

	$scope.userLogin  = {
		email: null,
		password: null
	}

	$scope.login = function() {
		$scope.submited = true;
		var authen = LoginService.postLogin($scope.userLogin);
		if (authen.status) {
			$cookieStore.put('authUser', authen.data);
			ToastFactory.popSuccess(authen.message);
			$state.go('home');
		}else {
			ToastFactory.popErrors(authen.message);
		}
	}
}