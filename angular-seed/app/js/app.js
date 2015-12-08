'use strict';

var myApp = angular.module('myApp', [
    'ngRoute',
    'ngCookies',

    'myApp.services',
    'myApp.controllers',
    'myApp.filters',
    'myApp.directives',
    'myApp.constants'
]);

_.extend(myApp, {
    constants: angular.module('myApp.constants', []),
    services: angular.module('myApp.services', [
        'myApp.constants'
    ]),
    controllers: angular.module('myApp.controllers', [
        'ui.bootstrap'
    ]),
    filters: angular.module('myApp.filters', []),
    directives: angular.module('myApp.directives', [
        'ui.bootstrap'
    ])
});

(function() {

    var EthUtils = require('eth-utils');

    myApp.utils = {
        
        ctrl: {
            
            field: function(value, pattern) {
                return {
                    value: value,
                    pattern: pattern
                };
            },

            emptyField: function(pattern) {
                return this.field('', pattern);
            }
        },
        
        eth: _.extend(EthUtils, {
            
            seedToAuth: function(seed) {
                var seedHash = EthUtils.signToPKey(seed);
                return {
                    seedHash: seedHash,
                    address: EthUtils.toAddress(seedHash)
                };
            }
        })
    };

})();