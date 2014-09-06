var todoListApp = angular.module('todoListApp', []);

todoListApp.controller('todoListCtrl', function ($scope) {
	$scope.list = [
	{descrip: "Do laundry", done: false},
	{descrip: "Read a book", done: false}
	];

	$scope.addItem = function() {
		$scope.list.push({descrip: $scope.newTodo, done: false});
		$scope.newTodo = '';
	};

	$scope.getListSize = function() {
		return $scope.list.length;
	};

	$scope.clearCompleted = function() {
		$scope.list = _.filter($scope.list, {'done': false});

	};

});


