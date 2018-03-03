angular.module('starter.services', [])

.factory('notifyService',['$ionicPopup',
function($ionicPopup) {
  return function(message) {
   $ionicPopup.alert({
      title: 'Error',
      template: message
    });
  }
}]);
