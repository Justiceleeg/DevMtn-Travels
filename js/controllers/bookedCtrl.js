angular.module('devmtnTravel').controller('bookedCtrl',function($scope, mainSrv, $stateParams){

  var id = $stateParams.id;

  $scope.package = mainSrv.getCityById(id)

})
