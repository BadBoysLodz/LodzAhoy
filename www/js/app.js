// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  // Each tab has its own nav history stack:

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('tab.history', {
      url: '/history',
      views: {
        'tab-history': {
          templateUrl: 'templates/tab-history.html',
          controller: 'HistoryCtrl'
        }
      }
    })


  .state('tab.ranking', {
    url: '/ranking',
    views: {
      'tab-ranking': {
        templateUrl: 'templates/tab-ranking.html',
        controller: 'RankingCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })
  

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html'
  });

  $stateProvider
  .state('developer', {
    url: '/developer',
    templateUrl: 'templates/developer.html'
  });

  $stateProvider
  .state('loading', {
    url: '/loading',
    templateUrl: 'templates/loading.html'
  });

  $stateProvider
  .state('newgame', {
    url: '/newgame',
    templateUrl: 'templates/newgame.html',
    controller: 'NewGameCtrl'
  });
  
  $stateProvider
  .state('startPlace', {
    url: '/startPlace',
    templateUrl: 'templates/startPlace.html'
  });
  
  $stateProvider
  .state('manuInfo', {
    url: '/manuInfo',
    templateUrl: 'templates/manuInfo.html'
  });
  
  $stateProvider
  .state('maps', {
    url: '/maps',
    templateUrl: 'templates/maps.html'
  });

  $urlRouterProvider.otherwise("/");

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/loading');

});