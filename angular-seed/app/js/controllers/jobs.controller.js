(function() {

    'use strict';

    myApp.controllers.controller('JobsController', ['$q', '$scope', '$routeParams', 'ContractService', 'JobService', 'Web3Service', JobsController]);

    function JobsController( $q, $scope, $routeParams, contractService, js, web3) {
        var id = $routeParams.jobId;

        _.extend($scope, {
            jobId : 0,
            jobCount: 0,
            jobName:  "",
            jobDescription:  "",
            jobStatus: 0,
            jobValue: 0,
            employerName: "",
        });

        $scope.jobId= id;
        js.getTotalJobs()
            .then(function(tJobs) {
                $scope.jobsCount = parseInt(tJobs, 10);
            }).catch(function(err) {
                console.error(err);
            });

        js.getJobName(id)
            .then(function(jn) {
                $scope.jobName = web3.toAscii(jn);
            }).catch(function(err) {
                console.error(err);
            });

        js.getJobDescription(id)
            .then(function(jn) {
                $scope.jobDescription = web3.toAscii(jn);
            }).catch(function(err) {
                console.error(err);
            });

        js.getJobStatus(id)
            .then(function(status) {
                $scope.jobStatus = parseInt(status);
            }).catch(function(err) { console.error(err); });

        js.getJobValue(id)
            .then(function(value) {
                $scope.jobValue = parseInt(value);
            }).catch(function(err) { console.error(err); });

        js.getJobEmployerName(id)
            .then(function(en) {
                $scope.employerName = web3.toAscii(en);
            }).catch(function(err) {
                console.error(err);
            });


    }

})();