(function() {

    'use strict';

    myApp.controllers.controller('JobsListController', ['$scope', '$window', '$routeParams', 'JobService', JobsListController]);

    function JobsListController($scope, $window, $routeParams, jobService) {
        var totalJobs= 0;
        
        _.extend($scope, {
            jobs: [],
        });

        jobService.getTotalJobs()
            .then(function(tJobs) {
                totalJobs= parseInt(tJobs, 10);
                var filteredJobs= [];
                var added= 0;
                for(var i = 0;i < totalJobs;i++) {
                    jobService.getJob(i+1)
                        .then(function(tJob){
                            filteredJobs.push(tJob);
                            if(++added == totalJobs)
                                $scope.jobs = filteredJobs;
                        })
                }
            }).catch(function(err) {
                console.error(err);
            });
            
        $scope.return = function() {
            $window.history.back();
    };    
            
    }

})();