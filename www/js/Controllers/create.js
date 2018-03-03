angular.module('starter.create',[])

.controller('createCtrl',function($scope, $cookies,$http, $state,$cordovaToast,$ionicLoading,$ionicHistory, notifyService) {

  $scope.data = {};

  $scope.create = function () {
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $http.post('/api/v1/contacts', $scope.data)
    .then(function (response) {
      $ionicLoading.hide();
      $scope.data = {};
      $state.go('contact');
    },function (error) {
      $ionicLoading.hide();
      notifyService(error.data.message)
    })
  };

  $scope.myGoBack = function () {
    console.log($ionicHistory);
    $ionicHistory.goBack(1);
  }
});
