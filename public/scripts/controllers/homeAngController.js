var myApp = angular.module('TimeShareApp', []);




myApp.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("hellooooooooooworld from controller");

   $http.get('/advertslist').success(function (response) {
                console.log("I got the data I requested");
                $scope.advertslist = response;
                $scope.advert = "";
            });
 }]);