{"changed":false,"filter":false,"title":"jobs.controller.js","tooltip":"/angular-seed/app/js/controllers/jobs.controller.js","value":"(function() {\n\n    'use strict';\n\n    myApp.controllers.controller('JobsController', ['$q', '$scope', '$routeParams', 'ContractService', 'JobService', 'Web3Service', JobsController]);\n\n    function JobsController( $q, $scope, $routeParams, contractService, js, web3) {\n        var id = $routeParams.jobId;\n\n        _.extend($scope, {\n            jobId : 0,\n            jobCount: 0,\n            jobName:  \"\",\n            jobDescription:  \"\",\n            jobStatus: 0,\n            jobValue: 0,\n            employerName: \"\",\n        });\n\n        $scope.jobId= id;\n        js.getTotalJobs()\n            .then(function(tJobs) {\n                $scope.jobsCount = parseInt(tJobs, 10);\n            }).catch(function(err) {\n                console.error(err);\n            });\n\n        js.getJobName(id)\n            .then(function(jn) {\n                $scope.jobName = web3.toAscii(jn);\n            }).catch(function(err) {\n                console.error(err);\n            });\n\n        js.getJobDescription(id)\n            .then(function(jn) {\n                $scope.jobDescription = web3.toAscii(jn);\n            }).catch(function(err) {\n                console.error(err);\n            });\n\n        js.getJobStatus(id)\n            .then(function(status) {\n                $scope.jobStatus = parseInt(status);\n            }).catch(function(err) { console.error(err); });\n\n        js.getJobValue(id)\n            .then(function(value) {\n                $scope.jobValue = parseInt(value);\n            }).catch(function(err) { console.error(err); });\n\n        js.getJobEmployerName(id)\n            .then(function(en) {\n                $scope.employerName = web3.toAscii(en);\n            }).catch(function(err) {\n                console.error(err);\n            });\n\n\n    }\n\n})();","undoManager":{"mark":-1,"position":-1,"stack":[]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":0},"end":{"row":17,"column":11},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1449349172724}