angular.module('starter.services', [])

.factory('notifyService',['$cordovaToast',
function($cordovaToast) {
  return function(message) {
    // Mostrar el Toast con el error
    $cordovaToast
    .show(message, 'short', 'center')
    .then(function(success) {
      // success
    }, function (error) {
      // error
    });
  }
}])
