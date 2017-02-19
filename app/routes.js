angular.module('Seminar').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
    	.state('login', {
            url: "/login",
            templateUrl: "/views/auth/login.html",
            controller: 'LoginController',
            data: {
                pageTitle: 'Login'
            }
        })
        .state('home', {
            url: "/home",
            templateUrl: "/views/home.html",
            controller: 'HomeController',
            data: {
                pageTitle: 'Home'
            }
        })
        .state('validation', {
            url: "/validation",
            templateUrl: "/views/validation.html",
            controller: 'ValidationController',
            data: {
                pageTitle: 'Validation Form'
            }
        })
        .state('crud', {
            url: "/crud",
            templateUrl: "/views/crud.html",
            controller: 'CrudController',
            data: {
                pageTitle: 'CRUD Example'
            }
        })
});

app.constant('API_GET', 'api/members');
app.constant('API_UPLOAD', 'uploadImg');
app.constant('API_POST_PUT_DELETE', 'api/members/');