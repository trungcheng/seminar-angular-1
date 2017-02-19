angular.module('Seminar').service('LoginService',function ($http) {

	this.postLogin = function (userInfo) {
		if (userInfo.email === 'trungdn.dev@gmail.com' && userInfo.password === 'adadad') {
			return {status: true, data: userInfo, message: 'Authenticate success !'};
		}

		return {status: false, data: userInfo, message: 'Email or password wrong !'};
	}
});