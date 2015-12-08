(function() {

    'use strict';

    myApp.services.factory('JobMarket', ['AppConfig', 'ContractService', 'AuthService', JobMarket]);

    function JobMarket(AppConfig, contractService, authService) {

        var jm = contractService.jobMarket();
        
        return {
            withCtx: withContext,
            defaultCtx: defaultContext
        };

        function withContext(context) {
            var ctx = (_.isFunction(context) && context()) || context || defaultContext();

            return jm.with(ctx);
        }
        function defaultContext() {
            return {
                client: authService.getClientInfo(),
                tx: {
                    from: authService.getAddress() || AppConfig.SU_ADDRESS
                }
            };
        }
    }

})();