angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope) {})

.controller('HistoryCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
