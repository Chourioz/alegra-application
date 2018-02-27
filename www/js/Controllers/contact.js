angular.module('starter.contact',[])

.controller('contactCtrl',function($scope, $cookies,$http, $state,$cordovaToast,$ionicLoading,$ionicHistory, $ionicModal) {

  $scope.hasMore = true;

  $http.get('/api/v1/contacts')
  .then(function (response) {
    // console.log(response.data);
    $scope.contacts = response.data;
    if($scope.contacts.lenght < 10){
      $scope.hasMore = false;
    };
  }, function (error) {
    // console.log(error.data);
  });

  $scope.detail = function (contact) {
    // console.log(contact);
    $state.go('detail', {contact: contact})
  };

  $scope.create = function () {
    $state.go('create');
  };

  $scope.loadMore = function() {
    $http.get('/api/v1/contacts').success(function(response) {
      if (response.data) {
        if (response.data > 0) {
          addContacts(response.data);
          if(response.data.lenght < 10){
            $scope.hasMore = false;
          };
          $scope.$broadcast('scroll.infiniteScrollComplete');
        }
      };
    });
  };

  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });

  function addContacts(contacts) {
    contacts.forEach(function (elm) {
      $scope.contacts.forEach(function (element) {
        if (elm.id != element.id) {
          $scope.contacts.push(elm);
        }
      })
    })
  };
});
