angular.module('starter.detail',[])

.controller('detailCtrl',function($scope, $cookies,$http, $state,$cordovaToast,$ionicLoading,$ionicHistory, $stateParams, $ionicModal, notifyService) {

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
      notifyService(error.data.message);
    })
  };

  $ionicModal.fromTemplateUrl('templates/modals/modify.html',
    {
      scope: $scope,
      backdropClickToClose: false,
      animation: 'slide-in-right'
    }).then(function (modal) {
      $scope.modal = modal;
  });

  $scope.edit = function () {
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $http.put('/api/v1/contacts/'+$scope.contact.id, $scope.contact)
    .then(function (response) {
      $ionicLoading.hide();
      $scope.modal.hide();
    },function (error) {
      $ionicLoading.hide();
      notifyService(error.data.message);
      $scope.modal.hide();
    })
  };

});
