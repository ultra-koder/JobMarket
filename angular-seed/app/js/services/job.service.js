(function() {

    'use strict';

    myApp.services.factory('JobService', [ 'Web3Service', '$q', 'JobMarket', JobService]);

    function JobService(web3, $q, mb) {
        return {
            getJobs: getJobs,
            getJob: getJob,
            getTotalJobs: getTotalJobs,
            getJobName: getJobName,
            getJobDescription: getJobDescription,
            getJobStatus: getJobStatus,
            getJobValue: getJobValue,
            getJobEmployerName: getJobEmployerName,
            getJobWorkerName: getJobWorkerName,
            createJob: createJob,
            createJobWithSkills: createJobWithSkills,
            newEmployer: newEmployer,
            getJobTotalSkills: getJobTotalSkills,
            getSkillName: getSkillName,
            getJobSkills: getJobSkills,
            addJobSkill: addJobSkill,
        };

        function getJob(id) {
            var dfd = $q.defer();

            mb.withCtx()
                .batchInvokation()
                .getJobName(id)
                .getJobDescription(id)
                .getJobStatus(id)
                .getJobValue(id)
                .getJobEmployerName(id)
                .getJobWorkerName(id)
                .invoke()
                .then(function(data) {
                    dfd.resolve({
                        id: id,
                        name: web3.toAscii(data[0]),
                        description: web3.toAscii(data[1]),
                        status: getStatus(data[2].toNumber()),
                        value: data[3].toNumber(),
                        employer: web3.toAscii(data[4]),
                        worker: web3.toAscii(data[5]),
                    });
                });

            return dfd.promise;
        }

        function getStatus(numeric) {
            var result= "Unknown";
            switch (numeric) {
                case 0:
                    result= "New";
                    break;
                case 1:
                    result= "In Progress";
                    break;
                case 2:
                    result= "Completed";
                    break;
                case 3:
                    result= "Done";
                    break;
            }
            return(result);
        }

        function getJobs() {
            var result = $q.defer();
            var totalJobs= mb.withCtx().getTotalJobs();
            var filteredJobs= [];
            for(var i = 0;i < totalJobs;i++) {
                filteredJobs[i] = getJob(i+1);
            }
            
            $q.all(filteredJobs).then(function(filteredJobs) {
                result.resolve(filteredJobs);
            });
        }

        // function getJobs() {
        //     var result = $q.defer();

        //     var self = this;
        //     mb.withCtx().getJobs().then(function(id) {
        //         var dfds = _.map(id, function(id) {
        //             return self.getJob(id);
        //         });

        //         $q.all(dfds).then(function(jobs) {
        //             result.resolve(jobs);
        //         });
        //     });

        //     return result.promise;
        // }
        

        function getTotalJobs() {
            return mb.withCtx().totalJobs();
        }

        function getJobName(id) {
            return mb.withCtx().getJobName(id);
        }
        
        function getJobDescription(id) {
            return mb.withCtx().getJobDescription(id);
        }
        
        function getJobStatus(id) {
            return(mb.withCtx().getJobStatus(id));
        }
        
        function getJobValue(id) {
            return(mb.withCtx().getJobValue(id));
        }
        
        function getJobEmployerName(id) {
            return(mb.withCtx().getJobEmployerName(id));
        }
        
        function getJobWorkerName(id) {
            return(mb.withCtx().getJobWorkerName(id));
        }

        function createJob(name, description, quantity, compensation) {
            return(mb.withCtx().newJob(name, description));
        }
        
        function createJobWithSkills(name, description, skills, quantity, compensation) {
            mb.withCtx().newJob(name, description)
                 .then(function(ret) {
                     getTotalJobs()
                    .then(function(tJobs) {
                        
                    var jobIndex= parseInt(tJobs, 10);                     
                    var batch = mb.withCtx().batchInvokation();
                    
                    _.each(skills, function(skill) {
                      return(batch.addJobSkill(jobIndex, skill));
                    });
                    batch.invoke().then(function() { console.log("Added skills");
                    });
                   });
                 return(ret);
                 });
        }
        
        
        function newEmployer(name) {
            return(mb.withCtx().newEmployer(name));
        }
        
        function getJobTotalSkills(id) {
            return(mb.withCtx().getJobTotalSkills(id));
        }
        
        function addJobSkill(id, name) {
            return(mb.withCtx().addJobSkill(id, name));
        }
        
        function getSkillName(id) {
            return(mb.withCtx().getSkillName(id));
        }
        
        function getJobSkills(id) {
            var idsDfd= mb.withCtx().getJobSkills(id);
            return getByIds(idsDfd, getSkillName);
        }
        
        function getByIds(idsDfd, getEntity) {
            var dfd = $q.defer();

            idsDfd.then(function(ids) {
                if (_.isEmpty(ids)) {
                    dfd.resolve([]);
                    return;
                }

                var dfds = [];
                _.each(ids, function(id) {
                    dfds.push(getEntity(id));
                });

                $q.all(dfds).then(function(entities) {
                    dfd.resolve(entities);
                });
            });

            return dfd.promise;
        }

        
    }

})();