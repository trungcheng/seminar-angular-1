var app = angular.module('Seminar', [
	"ui.router",
    "toaster",
    "ngCookies",
    "ngSanitize"
]);

app.run(function ($rootScope, $state, $location, $cookieStore) {
    $rootScope.$state = $state;
    $rootScope.rootAuth = null;
    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
        $state.current = toState;
        $rootScope.rootAuth = $cookieStore.get('authUser');
        if ($rootScope.rootAuth == null || $rootScope.rootAuth == undefined) {
            $location.path('/login');
        }else{
            $state.current = toState;
            if ($state.current.name == 'login') {
                $location.path('/home');
            }
        }
    });
    $rootScope.logout = function() {
        $cookieStore.remove('authUser');
        $location.path('/login');
    }
    $rootScope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };
});