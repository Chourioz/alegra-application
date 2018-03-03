/*
controlador de la pantalla de login
*/

angular.module('starter.login',[])

.controller('loginCtrl',function($scope, $cookies,$http, $state,$cordovaToast,$ionicLoading,$ionicHistory) {


  $scope.login = function(user) {

    $state.go('contact');
    
  }
});
