angular.module('Seminar').controller('CrudController', CrudController);

function CrudController($scope, $http, ToastFactory) {

	$scope.btnedit = false;
	$scope.btnadd = true;
	$scope.name = null;
	$scope.address = null;
	$scope.phone = null;

	var members = [
		{id: 1, name: 'Dinh Ngoc Trung', address: 'Ha Noi', phone: '0983333888'},
		{id: 2, name: 'Le Vinh Phi', address: 'Quang Tri', phone: '0983333999'},
		{id: 3, name: 'Dao Quang Hoan', address: 'Ha Noi', phone: '0983333777'},
		{id: 4, name: 'Nguyen Duc Loc', address: 'Hai Phong', phone: '0983333666'},
		{id: 5, name: 'Pham Tuan Anh', address: 'Ha Noi', phone: '0983333555'},
	];

	$scope.index = function() {
		$scope.members = members;
	}

	$scope.remove = function (member) {
		var result = confirm('Are you sure ?');
		if(result === true) {
     		$scope.members.splice(($scope.members.indexOf(member)),1);
     		ToastFactory.popSuccess('Delete member success !');
	    }
 	}

	$scope.add = function () {
		$scope.members.push({name: $scope.name, address: $scope.address, phone: $scope.phone});
		$scope.name = null;
		$scope.address = null;
		$scope.phone = null;
	}

	function getIndex (id) {
		for(var i = 0; i < $scope.members.length; i++)
			if($scope.members[i].id === id) {
				return i;
			}
		return -1;
	}

	$scope.save = function() {
		$scope.btnedit = false;
		var index = getIndex($scope.idcode);
		$scope.members[index].name = $scope.name;
		$scope.members[index].address = $scope.address;
		$scope.members[index].phone = $scope.phone;
		$scope.name = null;
		$scope.address = null;
		$scope.phone = null;
		ToastFactory.popSuccess('Update member success !');
	}

	$scope.edit = function (id) {
		$scope.btnedit = true;
		var index = getIndex(id);
		var member = $scope.members[index];
		$scope.idcode = member.id;
		$scope.name = member.name;
		$scope.address = member.address;
		$scope.phone = member.phone;
	}
}