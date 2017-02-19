angular.module('Seminar')

.directive('demo1', function () {
	return {
		restrict: 'A',
		link: function (scope, ele, attrs) {
			element.bind('click', function () {
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
            element.on('mouseenter', function () {
                element.css('color', 'red');
            });
            element.on('mouseleave', function () {
                element.css('color', 'orange');
            });
            element.bind('click', function () {
            	element.css('color', 'black');
            })
		}
	}
})

.directive('demo3', function () {
	return {
        restrict: 'E',
        template: '<button class="btn btn-success">{{message}}</button>',
        link: function (scope, ele, attrs) {
        	scope.message = 'ahihi';
        	ele.bind('click', function () {
        		ele.attr('disabled', true);
        	});
        }
    }
})