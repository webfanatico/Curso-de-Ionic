// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller("MainCtrl", function($scope, ImageSearch, $ionicSlideBoxDelegate) {

    $scope.images = [];

    $scope.doSearch = function() {
        if(!$scope.search) return;
        console.log("search for ", $scope.search);
        ImageSearch.getImages($scope.search).then(function(results) {
            $scope.images = results.data.d.results;
            setTimeout(function() {
                $ionicSlideBoxDelegate.slide(0);
                $ionicSlideBoxDelegate.update();
                $scope.$apply();
            });
        });
    };

})

.service("ImageSearch", function($http) {

    return {
        getImages:function(term) {
            var appid = "fgQ7ve/sV/eB3NN/+fDK9ohhRWj1z1us4eIbidcsTBM";
            $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa(appid + ':' + appid);
            return $http.get("https://api.datamarket.azure.com/Bing/Search/v1/Image?$format=json&Query='"+escape(term)+"'&$top=10");
        }
    };

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
