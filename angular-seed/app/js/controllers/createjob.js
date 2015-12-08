(function() {

'use strict';

    myApp.controllers.controller('createJobCtrl', ['$q', '$scope', '$window', '$routeParams', 'JobService', createJobCtrl]);
    
    function createJobCtrl($q, $scope, $window, $routeParams, jobService) {
        
        _.extend($scope, {
            job_name : "",
            job_description : "",
        });
        
        $scope.submit = function() {
            jobService.createJob($scope.job_name, $scope.job_description, $scope.quantity, $scope.compensation);
            $window.history.back();
    };    
}})();