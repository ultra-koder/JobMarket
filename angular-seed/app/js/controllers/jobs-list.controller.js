(function() {

    'use strict';

    myApp.controllers.controller('JobsListController', ['$scope', '$window', '$routeParams', 'JobService', '$q', JobsListController]);

    function JobsListController($scope, $window, $routeParams, jobService, $q) {
        var totalJobs= 0;
        
    const TEST_JOBS = [
                { jobId : 1,  jobName:  "Build a treehouse", jobDescription:  "Need a small treehouse in back", jobStatus: 0, jobValue: 2000.0, employerName: "Ultra Koder" },
                { jobId : 2,  jobName:  "Deliver keys", jobDescription:  "Send 2nd pair of keys with drone", jobStatus: 0, jobValue: 800.0, employerName: "Ultra Koder" },
                { jobId : 3,  jobName:  "Mow the lawn", jobDescription:  "Electric mower prefered", jobStatus: 0, jobValue: 400.0, employerName: "Ultra Koder" },
            ];

        
        _.extend($scope, {
            jobs: [],
        });

        jobService.getTotalJobs()
            .then(function(tJobs) {
                totalJobs= parseInt(tJobs, 10);
                if(totalJobs == 0)
                    addTestJobs();
                else
                  updateJobs();
            }).catch(function(err) {
                console.error(err);
            });
            
        $scope.return = function() {
            $window.history.back();
        };    
            
        $scope.search = function() {
        };    
            
        $scope.filter = function() {
        };    

        function updateJobs() {
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
        }
        
        function addTestJobs() {     
            jobService.newEmployer("Ultra Koder").
                then(function(ret) {
                    jobService.createJob(TEST_JOBS[0].jobName, TEST_JOBS[0].jobDescription, 0, TEST_JOBS[0].jobValue).
                        then(function(ret) {
                            jobService.createJob(TEST_JOBS[1].jobName, TEST_JOBS[1].jobDescription, 0, TEST_JOBS[1].jobValue).
                        then(function(ret) {
                            jobService.createJob(TEST_JOBS[2].jobName, TEST_JOBS[2].jobDescription, 0, TEST_JOBS[2].jobValue).
                        then(function(ret) {
                            totalJobs=3;
                            updateJobs();
                        });
                    });
                });
                    
            });

        return(true);
        }
            // var result = $q.defer();

            // var self = this;
            // jobService.newEmployer("Ultra Koder").then(function(name) {
            //     var dfds = _.map(TEST_JOBS, function(job) {
            //         console.log(job.jobName);
            //         return  jobService.createJob(job.jobName, job.jobDescription, 0, job.jobValue);
            //     });

            //     $q.all(dfds).then(function(jobIds) {
            //         result.resolve(jobIds);
            //     });
            // });

//            return result.promise;


            // jobService.newEmployer("Ultra Koder")
            // .then(function(){
            //     _.each(TEST_JOBS, function(job) {
            //         jobService.createJob(job.jobName, job.jobDescription, 0, job.jobValue)
            //                 .then(function(job){
            //                     console.log(job.jobName);
            //                 })
                    
            //     })
            // });



    }

})();