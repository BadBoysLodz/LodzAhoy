angular.module('starter.controllers', [])

.controller('ProfileCtrl', function ($scope) {})

.controller('HistoryCtrl', function ($scope) {})

.controller('SettingsCtrl', function ($scope) {})

.controller('RankingCtrl', function ($scope) {})

.controller('loading', function ($scope) {
		 setTimeout(function(){
		window.location.href = "/#/login";
		},
		3500);
	
})

.controller('devel', function ($scope) {
		 setTimeout(function(){
		window.location.href = "/#/loading";
		},
		2000);
	
})

.controller('LoginCtrl', function ($scope) {})

.controller('mapsCtrl', function ($scope) {})

.controller('NewGameCtrl', function ($scope, $ionicHistory) {})

.controller('StartPlaceCtrl', function ($scope) {})

.controller('manuInfoCtrl', function ($scope) {})