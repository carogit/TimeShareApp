var myApp = angular.module('TimeShareApp', []);




myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("hellooooooooooworld from controller");


        var refresh = function () {
            $http.get('/advertslist').success(function (response) {
                console.log("I got the data I requested");
                $scope.advertslist = response;
                $scope.advert = "";
            });
        };
        refresh();


        $scope.addAdvert = function() {
            console.log($scope.advert);
            $http.post('/advertslist', $scope.advert).success(function (response) {
                console.log(response);
                refresh();
            });
        };
        
        $scope.removeAdvert = function(id) {
            console.log(id);
            $http.delete('/advertslist/' + id).success(function(response){
               refresh(); 
            }); 
        };
        
        $scope.editAdvert = function(id){
            console.log(id);
            $http.get('/advertslist/'+ id).success(function(response){
               $scope.advert = response; 
            });
        };

        $scope.updateAdvert = function(){
            console.log($scope.advert._id);
            $http.put('/advertslist/'+ $scope.advert._id, $scope.advert).success(function(response){
                refresh(); 
            });
        };
        
        $scope.deselect = function(){
            $scope.advert = "";
        };
        
        
    }]);

