// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.control' is found in Controllers/control.js



angular.module('starter',
['ionic','ngResource','ngCookies','ngMessages','ngCordova.plugins.cardIO','ngCordova',
'starter.services','starter.login', 'starter.contact', 'starter.detail', 'starter.create'])

.run(function($ionicPlatform,$http,$cookies,$ionicLoading) {
  // Setup the loader
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  // $ionicPlatform.registerBackButtonAction(function () {
  //     navigator.app.exitApp();
  // }, 100);

  $ionicPlatform.ready(function() {
    $ionicLoading.hide();

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

//hace que guarde las cookies del servidor
  //  $http.defaults.headers.post['cookie'] = $cookies['sails.sid'];


})

.factory('authInterceptor', function ($cookies) {
  return {
    request: function(config) {
      var username = 'mjchourio.11@gmail.com',
      password = '4be621390b46fd823f87',
      auth = btoa(username + ':' + password);

      if (config.url.indexOf('/api/v1') != -1) {
        config.headers = config.headers || {};
        config.headers['Authorization'] = 'Basic ' + auth;
        config.url = 'https://app.alegra.com'+config.url;
        return config;
      }else return config;
    }
  };
})

.config(function($httpProvider,$stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position("bottom");
  $ionicConfigProvider.tabs.style("standard");
  // Configuracion de headers
  $httpProvider.interceptors.push('authInterceptor');

  $stateProvider

  .state('login', {

    url: "/login",
    // abstract: true,
    templateUrl: "templates/login.html",
    controller: 'loginCtrl',
  })

  .state('contact', {
    // abstract: true,
    url: "/contact",
    templateUrl: "templates/contact.html",
    controller: 'contactCtrl',
  })

  .state('detail', {
    url: '/detail',
    params: {
      contact: null
    },
    templateUrl: 'templates/detail.html',
    controller: 'detailCtrl'
  })

  .state('create', {
    url: '/create',
    templateUrl: '/templates/create.html',
    controller: 'createCtrl'
  })

  .state('modify', {
    url: '/modify',
    templateUrl: '/templates/modals/modify.html',
  });



//si es una ruta que no este en esta lista va a login
  $urlRouterProvider.otherwise('/login');
  $httpProvider.defaults.timeout = 5000;
})


.controller('AppCtrl', function($scope, $timeout, $ionicLoading) {

  // Setup the loader
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  // Set a timeout to clear loader, however you would actually call the $ionicLoading.hide(); method whenever everything is ready or loaded.
  $timeout(function () {
    $ionicLoading.hide();

  }, 2000);

});
