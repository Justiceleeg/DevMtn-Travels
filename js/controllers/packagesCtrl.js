angular.module('devmtnTravel').controller('packagesCtrl',function($scope, mainSrv, $stateParams){

  var country = $stateParams.country;

  if (country) {
    $scope.packages = mainSrv.getByCountry(country);
  } else {
    $scope.packages = mainSrv.packageInfo;

  }

})
