(function() {

	var moduleId = "MainCtrl";
	angular.module("comeApp").controller(moduleId, [mainCtrl]);

	function mainCtrl() {

		var vm = this;
		vm.currentYear = new Date().getFullYear();
		vm.mode = "diet";
		vm.templateUrl = "";
		vm.toggleMode = toggleMode;

		vm.loggedUser = {};

		init();


		function init() {
			
			vm.loggedUser = {
				isAdmin: true
			};

			vm.toggleMode(vm.mode);
		}

		function toggleMode(mode) {
			vm.mode = mode;
			switch (vm.mode) {
				case "diet" : {
					vm.templateUrl = 'client/app/diet/diet.html';
				}
				break;
				case "weighting": {
					vm.templateUrl = 'client/app/weighting/weighting.html';
				}
				break;
				default: {
					vm.templateUrl = 'client/app/layout/page404.html';
				}
				break;
			}
		}
	}
})();