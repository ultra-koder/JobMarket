(function() {

'use strict';

    myApp.controllers.controller('createJobCtrl', ['$q', '$scope', '$window', '$routeParams', 'JobService', createJobCtrl]);
    
    function createJobCtrl($q, $scope, $window, $routeParams, jobService) {
        
        _.extend($scope, {
            job_name : "",
            job_description : "",
            job_date : new Date(),
            job_location : "Denver, Co",
            job_skills : [],
        });
        
        $scope.submit = function() {
            jobService.createJobWithSkills($scope.job_name, $scope.job_description, $scope.job_skills, $scope.quantity, $scope.compensation);
            $window.history.back();
        };

}})();