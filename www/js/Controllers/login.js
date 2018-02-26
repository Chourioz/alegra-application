/*
controlador de la pantalla de login
*/

angular.module('starter.login',[])

.controller('loginCtrl',function($scope, $cookies,$http, $state,$cordovaToast,$ionicLoading,$ionicHistory) {


  $scope.login = function(user) {

    $state.go('contact');
    /*
    item para mostrar un spinner para el loading
    */
    // $ionicLoading.show({
    //   content: 'Loading',
    //   animation: 'fade-in',
    //   showBackdrop: true,
    //   maxWidth: 200,
    //   showDelay: 0
    // });
  }
});
