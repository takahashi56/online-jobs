function JobsShowController(JobFactory, $stateParams, $state, Auth) {
        var vm = this;

        //callable methods on the vm
        vm.getJob = getJob;
        vm.updateStatus = updateStatus;
        vm.updateJob = updateJob;
        vm.destroyJob = destroyJob;
        vm.signedIn = Auth.isAuthenticated();
        vm.getCurrentUser = getCurrentUser;
        vm.claimJob = claimJob;
        vm.acceptJob = acceptJob;

        vm.statuses = [
          {id: 1, value: 'Discovered'},
          {id: 2, value: 'Claimed'},
          {id: 3, value: 'Accepted'}
        ];


        //instantiated info
        activate();

        //defined methods on the vm
        function activate() {
          getJob($stateParams.jobId);
          getCurrentUser();
        };

        function getCurrentUser() {
            return Auth.currentUser()
                       .then(setCurrentUser);
        }

        function setCurrentUser(user) {
            return vm.user = user;
        }

        function getJob(id) {
            return JobFactory.getJob(id)
                       .then(setJob);
        };

        function updateJob() {
          if (vm.signedIn) {
                return JobFactory.updateJob(vm.job)
                       .then(showJob);
            } else {
                alert("Whoops. You need to sign in to edit a Job.");
                $state.go('home.login')
            }
        };

        function updateStatus(jobId, jobStatus) {
          return JobFactory.updateStatus(jobId, jobStatus)
        }

        function destroyJob(id) {
            return JobFactory.destroyJob(id)
                       .then(showJobs);
        };

        function claimJob(id) {
            vm.job.status = 2;
            return JobFactory.updateJob(vm.job)
                       .then(showJob);
        };

        function acceptJob(id) {
            vm.job.status = 3;
            return JobFactory.updateJob(vm.job)
                       .then(showJob);
        };

        function setJob(data) {
            return vm.job = data;
        };

        function showJob(data) {
            $state.go('home.show', { jobId: data.id });
        };

        function showJobs() {
            $state.go('home.jobs');
        };
    };

    JobsShowController.$inject = ['JobFactory', '$stateParams', '$state', 'Auth'];

    angular
        .module('app')
        .controller('JobsShowController', JobsShowController);
