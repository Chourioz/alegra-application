angular.module('starter.detail',[])

.controller('detailCtrl',function($scope, $cookies,$http, $state,$cordovaToast,$ionicLoading,$ionicHistory, $stateParams) {

  $scope.contact = $state.params.contact;

  $scope.delete = function (id) {
    console.log(id);
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $http.delete('/api/v1/contacts/'+id)
    .then(function (response) {
      $ionicLoading.hide();
      $state.go('contact');
    }, function (error) {
      $ionicLoading.hide();
      console.log(error.data);
    })
  }

});
