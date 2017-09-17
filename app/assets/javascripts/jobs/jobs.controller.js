(function() {
  'use strict';

  function JobsController(JobFactory, $state, $filter, Auth) {
    var vm = this;

    // callable methods on the vm
    vm.getJobs = getJobs;
    vm.createJob = createJob;
    vm.signedIn = Auth.isAuthenticated();
    vm.updateStatus = updateStatus;
    vm.refilter = refilter;
    vm.getCurrentUser = getCurrentUser;

    vm.statuses = [
      {id: 1, value: 'Discovered'},
      {id: 2, value: 'Claimed'},
      {id: 3, value: 'Accepted'}
    ];

    if (!vm.signedIn) {
      $state.go('home');
    }
    //instantiated info
    activate();

    //defined methods on the vm
    function activate() {
      getJobs();
      getCurrentUser();
    };

    function getCurrentUser() {
        return Auth.currentUser()
                   .then(setCurrentUser);
    }

    function setCurrentUser(user) {
        return vm.user = user;
    }

    function getJobs() {
      return JobFactory.getJobs()
            .then(setJobs)
            .then(setFilteredList)
    };

    function createJob() {
      if (vm.signedIn) {
              vm.job.status = 1;
                return JobFactory.createJob(vm.job)
                       .then(showJob)
            } else {
                alert("Whoops. You need to be signed in to create a Job.");
                $state.go('home.login')
            }

    };

    function updateStatus(jobId, jobStatus) {
      return JobFactory.updateStatus(jobId, jobStatus)
    }

    function setJobs(data) {
      return vm.jobs = data;
    };

    function setFilteredList(data) {
      return vm.filteredList = data;
    };

    function refilter() {
      return vm.filteredList = $filter('filter')(vm.jobs, vm.search);
    };

    function showJob(data) {
        $state.go('home.show', { jobId: data.id });
    };

  };

  JobsController.$inject = ['JobFactory', '$state', '$filter', 'Auth'];

  angular
    .module('app')
    .controller('JobsController', JobsController);
}());
