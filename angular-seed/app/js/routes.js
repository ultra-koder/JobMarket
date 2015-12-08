(function() {
    'use strict';

    angular
        .module('myApp')
        .config(config);

    function config($routeProvider) {

        $routeProvider
            .when('/jobs/:jobId', {
                templateUrl: 'template/displayjob.html',
                controller: 'JobsController'
            })
            .when('/jobs', {
                templateUrl: 'template/jobslist.html',
                controller: 'JobsListController'
            })
            .when('/createJob', {
                templateUrl: 'template/createjob.html',
                controller: 'createJobCtrl'
            })
         
            // .when('/dashboard', {
            //     templateUrl: 'template/dashboard.html',
            //     controller: 'DashboardController'
            // })
            // .when('/registration/:accountType', {
            //     templateUrl: 'template/registration.html',
            //     controller: 'RegistrationController'
            // })
            // .when('/debtors', {
            //     templateUrl: 'template/debtors/list.html',
            //     controller: 'DebtorsListCotroller'
            // })
            // .when('/debtors/:address', {
            //     templateUrl: 'template/debtors/details.html',
            //     controller: 'DebtorController'
            // })
            // .when('/debtors/:address/asks/:askId', {
            //     templateUrl: 'template/debtors/ask.html',
            //     controller: 'AskController'
            // })
            // .when('/creditors', {
            //     templateUrl: 'template/creditors/list.html',
            //     controller: 'CreditorsListController'
            // })
            // .when('/creditors/:address', {
            //     templateUrl: 'template/creditors/details.html',
            //     controller: 'CreditorController'
            // })
            .otherwise({
                redirectTo: '/'
            });
    }

})();