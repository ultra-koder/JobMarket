import "std.sol";
import "set.sol";

contract JobMarket is owned, named("JobMarket"), SetUtil {

    uint32 totalJobs;
    mapping (uint => Job) jobs;
    Set_ui32 jobList;
    
	event NewJob(uint id, bytes32 name, bytes32 description);
	event NewEmployer(bytes32 name, address addr);
        
    enum JobStatus {
        New, 
        InProgress, 
        Completed,
        Done
    }

    Set_addr employerList;
    Set_addr workerList;
    mapping (address => Employer) employers;
    mapping (address => Worker) workers;
    
    struct Employer {
        bytes32 name;
        address account;
        uint rank;
        uint jobsCompleted;
        Set_ui32  jobIds;
    }
    
    struct Worker {
        bytes32 name;
        address account;
        uint rank;
        uint jobsCompleted;
        Set_ui32  jobIds;
    }
    
    struct Job {
        Employer owner;
        bytes32 name;
        bytes32 description;
        JobStatus status;
        uint value;
        Worker worker;
    }
    
    function JobMarket() {
        totalJobs= 0;
    }

    function newEmployer(bytes32 _name) returns(uint employerId)  {
        Employer newEmployer= employers[msg.sender];
        newEmployer.name = _name;
        newEmployer.account= msg.sender;
        setAddUnique(employerList, msg.sender);
        
        NewEmployer(newEmployer.name, newEmployer.account);
        return(employerList.arr.length);
    }

    
    function newJob(bytes32 _name, bytes32 _description) returns(uint jobId)  {
        Job newJob= jobs[totalJobs];
        newJob.owner= employers[msg.sender];
        newJob.name= _name;
        newJob.description= _description;
        newJob.status= JobStatus.New;
        newJob.value= msg.value;
        setAddUnique(employerList, msg.sender);
        
        totalJobs++;
        setAddUnique(jobList, totalJobs);
        
        NewJob(totalJobs, _name, _description);
        return(totalJobs);
    }

    function getJobs() constant returns( uint32 [] jList)  {
        return(jobList.arr);
    }

    function getTotalJobs() constant returns(uint tJobs)  {
        return(totalJobs);
    }

    function getJobName(uint id) constant returns(bytes32 jn)  {
        return(jobs[id - 1].name);
    }
    
    function getJobDescription(uint id) constant returns(bytes32 jd)  {
        return(jobs[id - 1].description);
    }
    
    function getJobStatus(uint id) constant returns(uint status)  {
        return(uint256(jobs[id - 1].status));
    }
    
    function getJobValue(uint id) constant returns(uint value)  {
        return(jobs[id - 1].value);
    }
    
    function getJobEmployerName(uint id) constant returns(bytes32 jn)  {
        return(jobs[id - 1].owner.name);
    }

    function getJobWorkerName(uint id) constant returns(bytes32 jn)  {
        return(jobs[id - 1].worker.name);
    }
    
}