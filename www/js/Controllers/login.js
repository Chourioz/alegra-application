/*
controlador de la pantalla de login
*/

angular.module('starter.login',[])

.controller('loginCtrl',function($rootScope, $scope, $cookies,$http, $state,$cordovaToast,$ionicLoading,$ionicHistory,notifyService) {

  console.log($scope);

  $scope.user = {
    email : '',
    password : '',

  };

  $scope.login = function(user) {
    var auth = btoa($scope.user.email + ':' + $scope.user.password);
    $http.defaults.headers.common.Authorization = auth;
    $scope.user.email = '';
    $scope.user.password = '';
    $state.go('contact');

  }
});
