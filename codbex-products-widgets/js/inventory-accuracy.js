const dashboard = angular.module('inventoryAccuracy', []);

dashboard.controller('InventoryAccuracyController', ['$scope', function ($scope) {
    $scope.today = new Date();
}]);