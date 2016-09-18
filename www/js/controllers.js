angular.module('starter.controllers', [])

.controller('ProfileCtrl', function ($scope) {})

.controller('HistoryCtrl', function ($scope) {})

.controller('SettingsCtrl', function ($scope) {})

.controller('RankingCtrl', function ($scope) {})

.controller('NewGameCtrl', function ($scope, $ionicHistory) {
    $scope.goBack = function()
    {
        $ionicHistory.goBack();
    }
})