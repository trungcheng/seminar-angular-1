angular.module('Seminar')

.directive('demo1', function () {
	return {
		restrict: 'A',
		link: function (scope, ele, attrs) {
			ele.bind('click', function () {
				alert('day la demo 1');
			})
		}
	}
})

.directive('demo2', function () {
	return {
		restrict: 'A',
		template: '<h2>Click or hover here to change color</h2>',
		link: function (scope, ele, attrs) {
            ele.on('mouseenter', function () {
                ele.css('color', 'red');
            });
            ele.on('mouseleave', function () {
                ele.css('color', 'orange');
            });
            ele.bind('click', function () {
            	ele.css('color', 'black');
            });
		}
	}
})

.directive('demo3', function () {
	return {
        restrict: 'E',
        replace: true,
        template: '<button class="btn btn-success">{{ text }}</button>',
        link: function(scope, ele, attrs) {
        	scope.text = 'Ahihi';
            ele.bind('click', function() {
                ele.attr('disabled', true);
            });
        }
    };
})