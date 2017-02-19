angular.module('Seminar').factory('ToastFactory',function (toaster) {
	return {
		popSuccess : function(message) {
			toaster.pop({type: 'success',title: 'ACTION SUCCESS', body: message});
		},
		popErrors : function(message) {
			toaster.pop({type: 'error', title: 'ACTION FAILED', body: message});
		},
	}
});