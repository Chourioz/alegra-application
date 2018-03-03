angular.module('starter.contact',[])

.controller('contactCtrl',function($scope, $cookies,$http, $state,$cordovaToast,$ionicLoading,$ionicHistory, $ionicModal) {

  $scope.hasMore = false;
  $scope.contacts = [];
  var limit = 5,
  start = 0;

  $scope.detail = function (contact) {
    $state.go('detail', {contact: contact})
  };

  $scope.create = function () {
    $state.go('create');
  };

  $scope.loadMore = function() {
    $http.get('/api/v1/contacts?limit='+limit+"&start="+start)
    .then(function(response) {
      if (response.data.length == 5) {
        start += 5;
        $scope.loadMore();
      };
      addContacts(response.data)
    }, function (error) {
    });
  };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });

  function addContacts(contacts) {
    contacts.forEach(function (elemento) {
      $scope.contacts.push(elemento)
    })
  };

  $scope.moreData = function () {
    if($scope.contacts.length == 5){
      $scope.loadMore();
    }else {
      $scope.hasMore = false;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
  }
});
