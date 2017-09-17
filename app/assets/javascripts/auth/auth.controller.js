(function(){

    'use strict';

    function AuthController($scope, $state, Auth) {

        var vm = this;

        //callable methods on the vm
        vm.login = login;
        vm.register = register;

        vm.usertypes = [
          {id: 1, value: 'Consumer'},
          {id: 2, value: 'Service Provider'}
        ];

        //defined methods on the vm
        function login() {
            Auth.login(vm.user)
                .then(goToJobs);
        };

        function register() {
            if (vm.user.usertype == undefined) {
                return;
            }
            
            Auth.register(vm.user)
                .then(goToJobs);
        };

        function goToJobs() {
            $state.go('home.jobs');
        };

    };

    angular
        .module('app')
        .controller('AuthController', AuthController);
}());
