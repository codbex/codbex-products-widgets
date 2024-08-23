const dashboard = angular.module('inventory-accuracy', ['ideUI', 'ideView']);

dashboard.controller('InventoryAccuracyController', ['$scope', function ($scope) {
    $scope.today = new Date()

}]);