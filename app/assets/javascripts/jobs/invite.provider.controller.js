(function() {

  'use strict';

    function InviteProviderController(JobFactory, $stateParams, $state, Auth) {
        var vm = this;

        //callable methods on the vm
        vm.inviteProvider = inviteProvider;
        vm.signedIn = Auth.isAuthenticated();
        vm.email = '';

        //instantiated info
        activate();

        //defined methods on the vm
        function activate() {
            if (!vm.signedIn) {
                $state.go('home.jobs');
            }
        };

        function inviteProvider() {
            if (vm.email == '') {
                alert("Whoops. You need to provide email.");
                return;
            }

            JobFactory.sendEmail(vm.email)
                .then(handleSuccess);
        };

        function handleSuccess() {
            $state.go('home.jobs');
        }
    };

    InviteProviderController.$inject = ['JobFactory', '$stateParams', '$state', 'Auth'];

    angular
        .module('app')
        .controller('InviteProviderController', InviteProviderController);
}());