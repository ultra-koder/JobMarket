'use strict';

myApp.constants
    .constant('ContractConfig', {
 nameReg: {        
    address: '0x084f6a99003dae6d3906664fdbf43dd09930d0e3',
    abi:    
    [
      {
        "constant": false,
        "inputs": [],
        "name": "kill",
        "outputs": [],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "name",
            "type": "bytes32"
          }
        ],
        "name": "addressOf",
        "outputs": [
          {
            "name": "addr",
            "type": "address"
          }
        ],
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "name",
            "type": "bytes32"
          }
        ],
        "name": "register",
        "outputs": [],
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "unregister",
        "outputs": [],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "nameOf",
        "outputs": [
          {
            "name": "name",
            "type": "bytes32"
          }
        ],
        "type": "function"
      },
      {
        "inputs": [],
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "addr",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "name",
            "type": "bytes32"
          }
        ],
        "name": "Register",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "addre",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "name",
            "type": "bytes32"
          }
        ],
        "name": "Unregister",
        "type": "event"
      }
    ]    
 },
 jobMarket: {
    address: '0xdf315f7485c3a86eb692487588735f224482abe3',
    namespace: 'ether-camp/job-market',
    abi: 
[
  {
    "constant": false,
    "inputs": [],
    "name": "nameRegAddress",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalJobs",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "bytes32"
      },
      {
        "name": "_description",
        "type": "bytes32"
      }
    ],
    "name": "newJob",
    "outputs": [
      {
        "name": "jobId",
        "type": "uint32"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getJobValue",
    "outputs": [
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getSkillName",
    "outputs": [
      {
        "name": "skillName",
        "type": "bytes32"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getJobs",
    "outputs": [
      {
        "name": "jList",
        "type": "uint32[]"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getJobEmployerName",
    "outputs": [
      {
        "name": "jn",
        "type": "bytes32"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getJobName",
    "outputs": [
      {
        "name": "jn",
        "type": "bytes32"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "bytes32"
      }
    ],
    "name": "addSkill",
    "outputs": [
      {
        "name": "index",
        "type": "uint32"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "bytes32"
      }
    ],
    "name": "named",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getJobStatus",
    "outputs": [
      {
        "name": "status",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "changeOwner",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getJobWorkerName",
    "outputs": [
      {
        "name": "jn",
        "type": "bytes32"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getJobDescription",
    "outputs": [
      {
        "name": "jd",
        "type": "bytes32"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "jobID",
        "type": "uint32"
      },
      {
        "name": "name",
        "type": "bytes32"
      }
    ],
    "name": "addJobSkill",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getJobSkills",
    "outputs": [
      {
        "name": "list",
        "type": "uint32[]"
      }
    ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getJobTotalSkills",
    "outputs": [
      {
        "name": "totalSkills",
        "type": "uint32"
      }
    ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "bytes32"
      }
    ],
    "name": "newEmployer",
    "outputs": [
      {
        "name": "employerId",
        "type": "uint256"
      }
    ],
    "type": "function"
  },
  {
    "inputs": [],
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "name",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "description",
        "type": "bytes32"
      }
    ],
    "name": "NewJob",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "name",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "NewEmployer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "name",
        "type": "bytes32"
      }
    ],
    "name": "NewSkill",
    "type": "event"
  }
]



}
    }
    )