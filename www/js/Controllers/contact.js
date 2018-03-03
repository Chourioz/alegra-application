angular.module('starter.contact',[])

.controller('contactCtrl',function($scope, $cookies,$http, $state,$cordovaToast,$ionicLoading,$ionicHistory, $ionicModal, notifyService) {

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
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $http.get('/api/v1/contacts?limit='+limit+"&start="+start)
    .then(function(response) {
      if (response.data.length == 5) {
        start += 5;
        $scope.loadMore();
      };
      addContacts(response.data)
    }, function (error) {
      notifyService(error.data.message)
    });
  };

  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.loadMore();
  });

  function addContacts(contacts) {
    if ($scope.contacts.length != 0) {
      contacts.forEach(function (elemento) {
        $scope.contacts.forEach(function (contact) {
          if (elemento.id != contact.id) {
            $scope.contacts.push(elemento)
          }
        })
      });
    }else {
      contacts.forEach(function (elemento) {
        $scope.contacts.push(elemento)
      });
    }
    $ionicLoading.hide();
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
